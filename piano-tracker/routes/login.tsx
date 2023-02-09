import Layout from "../components/Layout.tsx";

import LoginPageForm from "../islands/LoginPageForm.tsx";

const LoginPage = () => {
  return (
    <Layout active="Login">
      Login Page Content
      <LoginPageForm />
    </Layout>
  );
};

export default LoginPage;
