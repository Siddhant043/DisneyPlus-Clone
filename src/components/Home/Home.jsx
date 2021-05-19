import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Recommend from "../Recommend/Recommend";
import Trending from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { selectUserName } from "../../features/user/userSlice";
import { setMovies } from "../../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend,
          newDisney,
          original,
          trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
