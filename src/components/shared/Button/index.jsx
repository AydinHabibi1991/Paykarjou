import React from 'react';
import Image from 'next/image';

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.isCategory
        ? props.icon && (
            <Image width={20} height={20} src={props.icon} alt="paykarjoo" />
          )
        : props.icon}

      {props.title && <span>{props.title}</span>}
    </button>
  );
};

export default Button;
