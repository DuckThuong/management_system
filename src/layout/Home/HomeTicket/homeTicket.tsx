import { Button, Form, Input, Row, Table, Modal, Select } from "antd";
import { LinkLine } from "../../../component/LinkLine/linkLine";
import { TicketType } from "../../../properties/type";
import { ROUTER_PATH } from "../../../webRouter/routers";
import "./homeTicket.scss";
import React from "react";

interface HomeTicketProps {
  status: TicketType;
}

export const HomeTicket: React.FC<HomeTicketProps> = ({ status }) => {
  const [form] = Form.useForm();
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  const showFilterModal = () => setIsFilterVisible(true);
  const handleFilterOk = () => setIsFilterVisible(false);
  const handleFilterCancel = () => setIsFilterVisible(false);

  const handleExport = () => {
    console.log("Exporting data...");
  };

  const onSearch = (value: string) => {
    console.log("Search value:", value);
  };

  const columns = [
    {
      title: "Mã",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Nhóm",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Người tạo",
      dataIndex: "insertUser",
      key: "insertUser",
    },
    {
      title: "Người được giao",
      dataIndex: "assignUser",
      key: "assignUser",
    },
    {
      title: "Người xử lý",
      dataIndex: "processUser",
      key: "processUser",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (text: any, record: any) => (
        <Row className="home-ticket__action-row">
          <Button
            icon={
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/bulleted-list.png"
                alt="bulleted-list"
              />
            }
            className="home-ticket__action-row-button"
          ></Button>
          <Button
            icon={
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/material-outlined/50/test-failed.png"
                alt="test-failed"
              />
            }
            className="home-ticket__action-row-button"
          ></Button>
        </Row>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      code: "TCK001",
      title: "Lỗi đăng nhập",
      group: "Hệ thống",
      insertUser: "Nguyễn Văn A",
      assignUser: "Trần Thị B",
      processUser: "Lê Văn C",
      status: "Đang xử lý",
    },
    {
      key: "2",
      code: "TCK002",
      title: "Không nhận được email",
      group: "Email",
      insertUser: "Phạm Văn D",
      assignUser: "Nguyễn Thị E",
      processUser: "Trần Văn F",
      status: "Hoàn thành",
    },
    {
      key: "3",
      code: "TCK003",
      title: "Lỗi giao diện",
      group: "Frontend",
      insertUser: "Lê Thị G",
      assignUser: "Nguyễn Văn H",
      processUser: "Phạm Thị I",
      status: "Chờ xử lý",
    },
  ];
  return (
    <div className="home-ticket">
      <Form form={form} onFinish={handleSubmit} className="home-ticket__form">
        <Row className="home-ticket__row-1">
          <div className="home-ticket__row-line">
            <LinkLine
              items={[
                { name: "Home", url: ROUTER_PATH.HOME },
                {
                  name: "Danh sách đơn hỗ trợ",
                  url: ROUTER_PATH.HOME,
                },
              ]}
            />
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
              onClick={handleExport}
              className="home-ticket__row-line-csvExport"
            >
              In
            </Button>
            <Button
              icon={
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/50/filter--v1.png"
                  alt="filter--v1"
                />
              }
              onClick={showFilterModal}
              className="home-ticket__row-line-filter"
            />
          </div>
        </Row>
        <Row className="home-ticket__row-2">
          <Form.Item name="search" className="home-ticket__form-item">
            <Input
              onBlur={(e) => onSearch(e.target.value)}
              onPressEnter={(e) => onSearch(e.currentTarget.value)}
              placeholder="Mã, Tên, Trạng thái"
            />
          </Form.Item>
        </Row>

        <Row className="home-ticket__row-3">
          <Table
            columns={columns}
            dataSource={dataSource}
            className="home-ticket__row-3-table"
            pagination={{ pageSize: 10 }}
          ></Table>
        </Row>
      </Form>
      <Modal
        title="Điều kiện lọc"
        open={isFilterVisible}
        onOk={handleFilterOk}
        onCancel={handleFilterCancel}
        footer={null}
        className="home-ticket__filter-modal"
      >
        <Form layout="vertical">
          <Form.Item label="Dự án/Ứng dụng" name="project">
            <Select
              defaultValue="FM"
              options={[{ value: "FM", label: "FM" }]}
            />
          </Form.Item>
          <Form.Item label="Người tạo" name="creator">
            <Select
              defaultValue="TruongLA"
              options={[{ value: "TruongLA", label: "TruongLA" }]}
            />
          </Form.Item>
          <Form.Item label="Nhân sự xử lý" name="processor">
            <Select
              defaultValue="DuyHX"
              options={[{ value: "DuyHX", label: "DuyHX" }]}
            />
          </Form.Item>
          <Form.Item label="Nhân sự QA tiếp nhận" name="qa">
            <Select
              defaultValue="HangBT13"
              options={[{ value: "HangBT13", label: "HangBT13" }]}
            />
          </Form.Item>
          <Form.Item label="Đơn vị" name="unit">
            <Select
              defaultValue="FTIODS"
              options={[{ value: "FTIODS", label: "FTIODS" }]}
            />
          </Form.Item>
          <Form.Item label="Trạng thái" name="status">
            <Select
              defaultValue="Đã tiếp nhận"
              options={[{ value: "Đã tiếp nhận", label: "Đã tiếp nhận" }]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleFilterOk}>
              Lọc
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
