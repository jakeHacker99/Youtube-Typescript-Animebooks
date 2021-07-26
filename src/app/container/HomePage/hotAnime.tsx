import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimepage } from "./selectors";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;

const stateSelector = createSelector(makeSelectAnimepage, (animePage) => ({
  animePage,
}));

export const HotAnime = () => {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimepage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimepage) return <div>loading ... </div>;
  return (
    <HotAnimeContainer>
      <AnimeItemContainer>
        {animePage &&
          animePage.media &&
          animePage.media.map((anime) => (
            <AnimeItemContainer key={anime?.id}>
              <AnimeCover>
                <img src={anime?.coverImage?.extraLarge || ""} alt="" />
                <h5 style={{ justifyContent: "center", textAlign: "center" }}>
                  Average Score: {anime?.averageScore}
                </h5>
              </AnimeCover>
              <AnimeTitle>{anime?.title?.english}</AnimeTitle>
            </AnimeItemContainer>
          ))}
      </AnimeItemContainer>
    </HotAnimeContainer>
  );
};
