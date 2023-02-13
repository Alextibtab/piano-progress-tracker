import Layout from "../components/Layout.tsx";

import LoginPageForm from "../islands/LoginPageForm.tsx";

const LoginPage = () => {
  return (
    <Layout active="Login">
      <div class="flex flex-col text-center items-center bg-gray-800 w-full block mx-10 rounded-md">
        <h1 class="pt-8 text-3xl text-white font-black tracking-widest uppercase">
          Login
        </h1>
        <LoginPageForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
