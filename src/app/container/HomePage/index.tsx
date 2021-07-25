import React, { useEffect } from "react";
import styled from "styled-components";
import animeService from "../../services/animeService";

interface HomepageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = (props: HomepageProps) => {
  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0).catch((err) => {
      console.log(err);
    });

    console.log("animePage: ", animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Trending Anime</h1>
    </Container>
  );
};

export default HomePage;
