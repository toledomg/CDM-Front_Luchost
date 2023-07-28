import React from "react";
import { TechUl } from "./styles";

import RenderList from "./RenderList";

function RenderTech({ setShowModalAdd, setShowModalEdit }) {
  return (
    <div>
      <TechUl>
        <RenderList
          setShowModalAdd={setShowModalAdd}
          setShowModalEdit={setShowModalEdit}
        />
      </TechUl>
    </div>
  );
}

export default RenderTech;
