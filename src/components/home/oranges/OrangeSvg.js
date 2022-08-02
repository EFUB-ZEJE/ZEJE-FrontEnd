import React from 'react';
import * as Oranges from '../../../assets/images/oranges';

const OrangeSvg = ({name, width, height}) => {
  const Comp = Oranges[name];

  return <Comp width={width} height={height} />;
};

export default OrangeSvg;
