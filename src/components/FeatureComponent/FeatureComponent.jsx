import React, { useState } from "react";
import styled from "styled-components";

import { featureData } from "../data";
import FeatureBtns from "./FeatureBtns/FeatureBtns";
import FeatureInfo from "./FeatureInfo/FeatureInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const FeatureComponent = () => {
  const [value, setValue] = useState(0);
  const { ...props } = featureData[value];

  return (
    <Container>
      <FeatureBtns
        value={value}
        setValue={setValue}
        featureData={featureData}
      />
      <FeatureInfo {...props} />
    </Container>
  );
};

export default FeatureComponent;
