import { Icon } from '@chakra-ui/react';
import React from 'react';

const ChevondownIcon = (props) => {
  return (
    <Icon xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
        d='M16.92.95 10.4 7.47c-.77.77-2.03.77-2.8 0L1.08.95'
      />
    </Icon>
  );
};

export default ChevondownIcon;
