import { Col, DatePicker, Form, Row } from "antd";
import "./homeDashBoard.scss";
import { ChartComponent } from "../../../component/Chart/chart";

const { RangePicker } = DatePicker;

export const HomeDashboard = () => {
  const [form] = Form.useForm();

  const salesData = [
    { x: "Tháng 1", y: 120 },
    { x: "Tháng 2", y: 150 },
    { x: "Tháng 3", y: 180 },
    { x: "Tháng 4", y: 200 },
    { x: "Tháng 5", y: 170 },
    { x: "Tháng 6", y: 220 },
  ];

  const usersByRegionData = [
    { x: "Hà Nội", y: 2500 },
    { x: "TP.HCM", y: 3200 },
    { x: "Đà Nẵng", y: 1800 },
    { x: "Cần Thơ", y: 1200 },
    { x: "Hải Phòng", y: 1600 },
  ];

  const scoreData = [
    { x: "Toán", y: 8.5 },
    { x: "Văn", y: 7.8 },
    { x: "Anh", y: 9.2 },
    { x: "Lý", y: 8.0 },
    { x: "Hóa", y: 7.5 },
    { x: "Sinh", y: 8.8 },
  ];

  const productSalesData = [
    { x: "iPhone", y: 450 },
    { x: "Samsung", y: 380 },
    { x: "Xiaomi", y: 290 },
    { x: "Oppo", y: 220 },
    { x: "Vivo", y: 180 },
    { x: "Realme", y: 150 },
  ];

  return (
    <div className="dash-board">
      <Form form={form} className="dash-board__form">
        <Row className="dash-board__section-1">
          <Form.Item name="date" className="dash-board__form-item">
            <p className="dash-board__form-item-label">Thời gian</p>
            <RangePicker
              className="dash-board__form-item-picker"
              placeholder={["Từ ngày", "Đến ngày"]}
              format="DD/MM/YYYY"
              popupClassName="dash-board__form-item-picker-popup"
            />
          </Form.Item>
        </Row>

        <Row className="dash-board__section-2">
          <Col span={5} className="dash-board__section-2-col">
            <h1 className="dash-board__section-2-title">Tổng số yêu cầu</h1>
            <p className="dash-board__section-2-info">15</p>
          </Col>
          <Col span={5} className="dash-board__section-2-col">
            <h1 className="dash-board__section-2-title">Yêu cầu chưa xử lý</h1>
            <p className="dash-board__section-2-info">15</p>
          </Col>
          <Col span={5} className="dash-board__section-2-col">
            <h1 className="dash-board__section-2-title">Yêu cầu đang xử lý</h1>
            <p className="dash-board__section-2-info">15</p>
          </Col>
          <Col span={5} className="dash-board__section-2-col">
            <h1 className="dash-board__section-2-title">Yêu cầu đã từ chối</h1>
            <p className="dash-board__section-2-info">15</p>
          </Col>
        </Row>

        <Row gutter={[12, 12]} className="dash-board__section-3">
          <Col className="dash-board__section-3-col" span={12}>
            <ChartComponent
              color="#f8f8f8"
              orientation="horizontal"
              data={salesData}
            />
          </Col>
          <Col className="dash-board__section-3-col" span={12}>
            <ChartComponent color="#f8f8f8" data={usersByRegionData} />
          </Col>
        </Row>
        <Row gutter={[12, 12]} className="dash-board__section-4">
          <Col className="dash-board__section-4-col" span={12}>
            <ChartComponent
              color="#f8f8f8"
              orientation="horizontal"
              data={scoreData}
            />
          </Col>
          <Col className="dash-board__section-4-col" span={12}>
            <ChartComponent color="#f8f8f8" data={productSalesData} />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
