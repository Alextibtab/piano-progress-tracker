import { Head } from "$fresh/runtime.ts";
import { motion } from "framer-motion";

import Layout from "../components/Layout.tsx";
import Counter from "../islands/Counter.tsx";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Layout active="Home">
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            Welcome to `fresh`. Try updating this message in the
            ./routes/index.tsx file, and refresh. Test
          </p>
          <Counter start={3} />
          <motion.div />
        </div>
      </Layout>
    </>
  );
};

export default Home;
