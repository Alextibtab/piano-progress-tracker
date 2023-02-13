import { asset, Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type Props = {
  active: string;
  children: ComponentChildren;
};

const Layout = ({ active, children }: Props) => {
  return (
    <div class="flex flex-col h-full">
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href={asset("styles.css")} />
      </Head>
      <Header active={active} />
      <div class="my-auto mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
