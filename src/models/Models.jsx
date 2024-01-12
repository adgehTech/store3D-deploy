import React from "react";
// import FullIndex from "./full/FullIndex";
import PantIndex from "./pants/PantIndex";
import ShoeIndex from "./shoe/ShoeIndex";
import ShortsIndex from "./shorts/ShortsIndex";

export default function Models() {
  return (
    <>
      <ShoeIndex />
      <PantIndex />
      <ShortsIndex />
      {/* <FullIndex /> */}
    </>
  );
}
