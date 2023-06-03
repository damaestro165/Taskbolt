import { Icon } from '@chakra-ui/react';
import React from 'react';

const CalenderIcon = (props) => {
  return (
    <Icon
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.33333 1.3335V3.3335M10.6667 1.3335V3.3335M2.33333 6.06016H13.6667M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z'
        stroke='#252525'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.4633 9.1333H10.4693M10.4633 11.1333H10.4693M7.99663 9.1333H8.0033M7.99663 11.1333H8.0033M5.5293 9.1333H5.53596M5.5293 11.1333H5.53596'
        stroke='#252525'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export default CalenderIcon;
