import React from "react";
import styled from "styled-components";

interface HomepageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = (props: HomepageProps) => {
  return (
    <div>
      <h1>Trending Anime</h1>
    </div>
  );
};

export default HomePage;
