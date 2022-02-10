import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Ball, Container, LoadingDisplay } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(true);
    }, 1200);
  }, []);

  return isHidden ? (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  ) : (
    <LoadingDisplay>
      <Ball />
    </LoadingDisplay>
  );
};
