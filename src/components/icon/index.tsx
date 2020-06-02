import React from 'react';

interface PropsType {
  iconClass:string;
  className?:string;
  size?:string
}
const Icon = (props:PropsType) => {
  const { iconClass, className, size = '16px' } = props;
  const svgStyle = {
    width: size,
    height: size,
    verticalAlign: 'middle',
    fill: 'currentColor',
    overflow: 'hidden',
  };
  return (
    <svg className={`icon ${className}`} style={svgStyle}>
      <use xlinkHref={`#icon-${iconClass}`} />
    </svg>
  );
};
export default Icon;
