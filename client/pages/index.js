import React from "react";

import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const HomePage = () => (
  <Center>
    Next.js Starter Kit
    <Img src="https://centerlinenewmedia.com/content/previews/6598_preview_lg.jpg" />
  </Center>
);

export default HomePage;
