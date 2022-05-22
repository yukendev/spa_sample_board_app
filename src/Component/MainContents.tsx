import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MessageCard } from "./MessageCard/MessageCard";


export const MainContents = () => {
  const [list, setList] = useState(
    Array.from({ length: 10 }, () => <MessageCard />)
  );

  const fetchData = () => {
    setTimeout(() => {
      setList([...list, ...Array.from({ length: 5 }, () => <MessageCard />)]);
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={list.length}
      next={fetchData}
      hasMore={true}
      loader={null}
      className="mx-5"
    >
      {list}
    </InfiniteScroll>
  )
};