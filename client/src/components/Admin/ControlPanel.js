// import React from "react";
// import { Row, Col, Card } from "antd";
// import { Line, Pie, Bar } from "@ant-design/charts";

// const ControlPanel = () => {
//   // Dữ liệu mẫu cho biểu đồ đường (Lịch hẹn theo tháng)
//   const dataLine = [
//     { month: "Tháng 1", appointments: 30 },
//     { month: "Tháng 2", appointments: 45 },
//     { month: "Tháng 3", appointments: 60 },
//     { month: "Tháng 4", appointments: 80 },
//     { month: "Tháng 5", appointments: 65 },
//     { month: "Tháng 6", appointments: 85 },
//   ];

//   const configLine = {
//     data: dataLine,
//     xField: "month",
//     yField: "appointments",
//     label: {},
//     point: {
//       size: 5,
//       shape: "diamond",
//     },
//     smooth: true, // Đường cong mượt mà
//   };

//   // Dữ liệu mẫu cho biểu đồ tròn (Phân bố bệnh nhân theo độ tuổi)
//   const dataPie = [
//     { ageGroup: "0-18", value: 20 },
//     { ageGroup: "19-35", value: 40 },
//     { ageGroup: "36-55", value: 25 },
//     { ageGroup: "56+", value: 15 },
//   ];

//   const configPie = {
//     data: dataPie,
//     angleField: "value",
//     colorField: "ageGroup",
//     radius: 1, // Độ lớn của biểu đồ tròn
//     label: {
//       content: "{name}: {percentage}", // Hiển thị tên và phần trăm
//       style: {
//         fontSize: 14,
//         fill: "#000",
//       },
//     },
//     interactions: [{ type: "element-active" }], // Tương tác khi hover
//   };

//   // Dữ liệu mẫu cho biểu đồ cột (Số lượng bác sĩ theo chuyên khoa)
//   const dataBar = [
//     { department: "Tim mạch", doctors: 10 },
//     { department: "Nhi khoa", doctors: 8 },
//     { department: "Da liễu", doctors: 6 },
//     { department: "Tai Mũi Họng", doctors: 7 },
//     { department: "Nội tiết", doctors: 5 },
//   ];

//   const configBar = {
//     data: dataBar,
//     xField: "department",
//     yField: "doctors",
//     seriesField: "department",
//     colorField: "department",
//     label: {
//       position: "top", // Hiển thị nhãn ở trên cột
//       style: {
//         fill: "#595959",
//         opacity: 0.8,
//       },
//     },
//   };

//   return (
//     <div>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Card title="Lịch Hẹn Theo Tháng">
//             <Line {...configLine} />
//           </Card>
//         </Col>
//         <Col span={12}>
//           <Card title="Phân Bố Bệnh Nhân Theo Độ Tuổi">
//             <Pie {...configPie} />
//           </Card>
//         </Col>
//       </Row>
//       <Row gutter={16} style={{ marginTop: 16 }}>
//         <Col span={24}>
//           <Card title="Số Lượng Bác Sĩ Theo Chuyên Khoa">
//             <Bar {...configBar} />
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ControlPanel;
