import { Col, DatePicker, Form, Row } from "antd";
import "./homeDashBoard.scss";

const { RangePicker } = DatePicker;

export const HomeDashboard = () => {
  const [form] = Form.useForm();
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
          <Col className="dash-board__section-3-col" span={12}></Col>
          <Col className="dash-board__section-3-col" span={12}></Col>
        </Row>
      </Form>
    </div>
  );
};
