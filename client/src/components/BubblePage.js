import React, { useState, useEffect } from "react";
import { getColors } from '../api/getColors';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

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
    <div className="container is-flex is-flex-direction-column">
      <div className="bubbles-container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-space-between">
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
    </div>
  );
};

export default BubblePage;
