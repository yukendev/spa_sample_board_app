import React from "react";
import { Advertisements } from './Advertisements';
import { MainContents } from "./MainContents";

export const Body = () => {
  return (
    <div className="h-100 app_body">
      <Advertisements/>
      <MainContents/>
    </div>
  );
};