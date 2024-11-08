import React from 'react';

export function NextArrow(props) {
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: 'block', right: '10px' }}
      onClick={props.onClick}
    />
  );
}

export function PrevArrow(props) {
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: 'block', left: '10px' }}
      onClick={props.onClick}
    />
  );
}
