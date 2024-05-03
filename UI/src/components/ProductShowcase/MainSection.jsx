import React, { memo } from "react";
import ProductSection from "./MainSection/ProductSection";
import SideSection from "./SideSection/SideSection";

const MainSection = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <SideSection/>
          <ProductSection />
        </div>
      </div>
    </div>
  );
};

export default memo(MainSection);
