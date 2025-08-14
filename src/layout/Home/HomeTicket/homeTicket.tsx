import { Button, Form, Row } from "antd";
import { TicketType } from "../../../properties/type";
import "./homeTicket.scss";

interface HomeTicketProps {
  status: TicketType;
}

export const HomeTicket: React.FC<HomeTicketProps> = ({ status }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };
  return (
    <div className="home-ticket">
      <Form form={form} onFinish={handleSubmit} className="home-ticket__form">
        <Row className="home-ticket__row-1">
          <div className="home-ticket__row-line">
            <p className="home-ticket__row-line-text">
              Home/Danh sách đơn hỗ trợ
            </p>
          </div>
          <div className="home-ticket__row-line">
            <Button
              icon={
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/50/export-csv.png"
                  alt="export-csv"
                />
              }
              className="home-ticket__row-csvExport"
            />
            <Button
              icon={
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/50/filter--v1.png"
                  alt="filter--v1"
                />
              }
              className="home-ticket__row-filter"
            />
          </div>
        </Row>
      </Form>
    </div>
  );
};
