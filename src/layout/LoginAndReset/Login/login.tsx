import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const doLogin = () => {};
  const doResetPassword = () => {};
  return (
    <div className="login">
      <Form
        form={form}
        onFinish={doLogin}
        name="login"
        className="login_form"
      ></Form>
    </div>
  );
};
