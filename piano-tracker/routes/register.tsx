import Layout from "../components/Layout.tsx";

import RegisterPageForm from "../islands/RegisterPageForm.tsx";

const RegisterPage = () => {
  return (
    <Layout active="Register">
      <div class="flex flex-col text-center items-center bg-gray-800 w-full block mx-10 rounded-md">
        <h1 class="pt-8 text-3xl text-white font-black tracking-widest uppercase">
          Register
        </h1>
        <RegisterPageForm />
      </div>
    </Layout>
  );
};

export default RegisterPage;
