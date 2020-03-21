import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { centeredFlex } from "./lib/css";
import Changer from "./components/Changer";
import Viewer from "./components/Viewer";
import getNewDate from "./lib/getNewDate";
import getImage from "./lib/getImage";

const AppBlock = styled.div`
  ${centeredFlex}
  flex-direction:column;
  width: 100%;
  height: 100%;

  .body {
    ${centeredFlex}
    width: 100%;
    height: calc(100% - 5rem);
  }
`;

const App = () => {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);

  const onPrevious = () => setDate(getNewDate(date, -1));
  const onNext = () => {
    const newDate = getNewDate(date, 1);
    const nextDate =
      newDate.getDate() <= new Date().getDate() ? newDate : new Date();
    setDate(nextDate);
  };

  useEffect(() => {
    const request = async date => {
      setLoading(true);
      const result = await getImage(date);
      const { response, error } = result;
      if (error) {
        setContent(<h2>ERROR!</h2>);
      } else {
        const { data } = response;
        const url = data.url;
        const content =
          data["media_type"] === "image" ? (
            <img src={url} alt="" />
          ) : (
            <iframe
              title="space-video"
              src={url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          );
        setContent(content);
      }
      setLoading(false);
    };
    console.log(loading);
    if (loading) return;
    request(date);
  }, [date]);

  return (
    <AppBlock>
      <Header />
      <div className="body">
        <Changer onPrevious={onPrevious} vertical>
          이전
        </Changer>
        <Viewer date={date} content={content} loading={loading} />
        <Changer onNext={onNext} vertical>
          다음
        </Changer>
      </div>
    </AppBlock>
  );
};

export default App;
