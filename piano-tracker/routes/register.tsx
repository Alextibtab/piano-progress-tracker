import Layout from "../components/Layout.tsx";

import RegisterPageForm from "../islands/RegisterPageForm.tsx";

const RegisterPage = () => {
  return (
    <Layout active="Register">
      Register Page Content
      <RegisterPageForm />
    </Layout>
  );
};

export default RegisterPage;
