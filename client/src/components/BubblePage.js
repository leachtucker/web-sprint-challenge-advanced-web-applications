import React, { useState, useEffect } from "react";
import { getColors } from '../api/getColors';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // Runs when the component first mounts
  useEffect(() => {
    getColors()
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.error(err.response);
      })
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
