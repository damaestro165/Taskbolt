import { Icon } from '@chakra-ui/react';
import React from 'react';

const ChevondownIcon = (props) => {
  return (
    <Icon
      width='18'
      height='9'
      viewBox='0 0 18 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195'
        stroke={props.color || '#252525'}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export default ChevondownIcon;
