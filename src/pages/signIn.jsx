import FormSignIn from "../components/fragments/FormSignIn";
import AuthLayout from "../components/Layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignIn;