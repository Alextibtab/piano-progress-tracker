import Layout from "../components/Layout.tsx";
import MotionTest from "../islands/TestMotionComponent.tsx";

const Home = () => {
  return (
    <>
      <Layout active="Home">
        <MotionTest />
      </Layout>
    </>
  );
};

export default Home;
