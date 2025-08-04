import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const doLogin = () => {};
  const doResetPassword = () => {};
  return (
    <div className="login">
      <Form form={form} onFinish={doLogin} name="login" className="login_form">
        <div className="login_form-header">
          <h1>ĐĂNG NHẬP</h1>
        </div>
        <Form.Item
          label="Tài khoản"
          name="email"
          layout="vertical"
          rules={[
            { required: true, message: "Vui lòng nhập tài khoản email!" },
          ]}
          className="login_form-item"
        >
          <Input className="login_form-input" placeholder="Email@gmail.com" />
        </Form.Item>
        <Form.Item
          label="Mật Khẩu"
          name="password"
          layout="vertical"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          className="login_form-item"
        >
          <Input.Password className="login_form-input" placeholder="Mật khẩu" />
        </Form.Item>
        <Button
          onClick={doLogin}
          htmlType="button"
          className="login_form-button"
        >
          Đăng nhập
        </Button>
        <p className="login_form-text-or">hoặc</p>
        <div className="login_form-option">
          <Button
            className="login_form-button-google"
            icon={
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-those-icons-flat-those-icons/24/external-Google-logos-and-brands-those-icons-flat-those-icons.png"
                alt="external-Google-logos-and-brands-those-icons-flat-those-icons"
              />
            }
          />
        </div>
      </Form>
    </div>
  );
};
