import FormSignIn from "../components/Fragments/FormSignIn";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignIn;