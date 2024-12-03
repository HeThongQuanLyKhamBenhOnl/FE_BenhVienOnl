import React from "react";
import { Row, Col, Card, Spin, Alert } from "antd";
import { Line } from "react-chartjs-2";
import { Pie, Bar } from "react-chartjs-2";
import {
  useGetAppointmentStatsQuery,
  useGetTopDoctorQuery,
  useGetTopDoctorsInMonthQuery,
} from "../../Redux/Appointment/api";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";

// Đăng ký các component của Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);

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

  // Dữ liệu Biểu đồ Line: Lịch Hẹn Theo Tháng
  const lineData = {
    labels: appointmentStats?.stats.map((item) => item.date) || [],
    datasets: [
      {
        label: "Số lượng lịch hẹn",
        data:
          appointmentStats?.stats.map((item) =>
            Math.round(item.appointmentCount)
          ) || [], // Làm tròn số
        borderColor: "#009eff",
        backgroundColor: "rgba(0, 158, 255, 0.5)",
        tension: 0.4,
      },
    ],
  };

  // Dữ liệu Biểu đồ Bar: Top Bác Sĩ Trong Tháng
  const barData = {
    labels: topDoctorsInMonth?.topDoctors.map((item) => item.fullName) || [],
    datasets: [
      {
        label: "Số lượng lịch hẹn",
        data:
          topDoctorsInMonth?.topDoctors.map((item) => item.appointmentCount) ||
          [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu Biểu đồ Pie: Phân Bố Bác Sĩ Theo Lịch Hẹn
  const pieData = {
    labels: topDoctors?.topDoctors.map((item) => item.fullName) || [],
    datasets: [
      {
        label: "Số lượng lịch hẹn",
        data: topDoctors?.topDoctors.map((item) => item.appointmentCount) || [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
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
            <Line data={lineData} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Phân Bố Bác Sĩ Theo Lịch Hẹn">
            <Pie data={pieData} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Top Bác Sĩ Trong Tháng">
            <Bar data={barData} />
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
