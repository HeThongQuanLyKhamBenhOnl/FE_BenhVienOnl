import React from "react";
import { Row, Col, Card, Spin, Alert } from "antd";
import { Line, Pie, Bar } from "@ant-design/charts";
import {
  useGetAppointmentStatsQuery,
  useGetTopDoctorQuery,
  useGetTopDoctorsInMonthQuery,
} from "../../Redux/Appointment/api";

const ControlPanel = () => {
  // Gọi các API
  const {
    data: appointmentStats,
    isLoading: isStatsLoading,
    error: statsError,
  } = useGetAppointmentStatsQuery({ period: "month" });
  const {
    data: topDoctors,
    isLoading: isTopDoctorsLoading,
    error: topDoctorsError,
  } = useGetTopDoctorQuery();
  const {
    data: topDoctorsInMonth,
    isLoading: isTopDoctorsMonthLoading,
    error: topDoctorsMonthError,
  } = useGetTopDoctorsInMonthQuery();

  // Biểu đồ Lịch Hẹn Theo Thời Gian
  const configLine = {
    data: appointmentStats?.stats || [],
    xField: "date",
    yField: "appointmentCount",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
    },
    smooth: true,
  };

  // Biểu đồ Top Bác Sĩ Trong Tháng
  const configBar = {
    data: topDoctorsInMonth?.topDoctors || [],
    xField: "fullName",
    yField: "appointmentCount",
    seriesField: "fullName",
    colorField: "fullName",
    label: {
      position: "top",
      style: {
        fill: "#595959",
        opacity: 0.8,
      },
    },
  };

  // Biểu đồ Pie Phân Bố Bệnh Nhân (Giả định dữ liệu từ API)
  const configPie = {
    data: topDoctors?.topDoctors || [],
    angleField: "appointmentCount",
    colorField: "fullName",
    radius: 1,
    label: {
      content: (data) => {
        const total =
          topDoctors?.topDoctors.reduce(
            (sum, item) => sum + item.appointmentCount,
            0
          ) || 1;
        const percentage = ((data.appointmentCount / total) * 100).toFixed(1);
        return `${percentage}%`;
      },
      style: {
        fontSize: "1rem",
        fill: "#000",
      },
    },
    interactions: [{ type: "element-active" }],
  };

  if (isStatsLoading || isTopDoctorsLoading || isTopDoctorsMonthLoading) {
    return (
      <Spin size="large" style={{ display: "block", margin: "20px auto" }} />
    );
  }

  if (statsError || topDoctorsError || topDoctorsMonthError) {
    return (
      <Alert
        message="Lỗi"
        description="Không thể tải dữ liệu thống kê, vui lòng thử lại sau."
        type="error"
        showIcon
      />
    );
  }

  return (
    <div>
      <h2 style={style.header}>BIỂU ĐỒ TỔNG QUÁT</h2>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Lịch Hẹn Theo Tháng">
            <Line {...configLine} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Phân Bố Bác Sĩ Theo Lịch Hẹn">
            <Pie {...configPie} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Top Bác Sĩ Trong Tháng">
            <Bar {...configBar} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ControlPanel;

const style = {
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "40px",
    fontWeight: "bold",
    color: "#009eff",
  },
};
