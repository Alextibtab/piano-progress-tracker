import { ComponentChildren } from "preact";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type Props = {
  active: string;
  children: ComponentChildren;
};

const Layout = ({ active, children }: Props) => {
  return (
    <>
      <Header active={active} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
