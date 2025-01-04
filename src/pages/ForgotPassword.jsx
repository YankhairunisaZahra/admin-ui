import FormForgotPw from "@components/Fragments/FormForgotPw";
import Authlayout from "@components/Layouts/AuthLayout";

const ForgotPasswordPage = () => {
  return (
    <Authlayout type="forgot-password">
      <FormForgotPw />
    </Authlayout>
  );
};

export default ForgotPasswordPage;
