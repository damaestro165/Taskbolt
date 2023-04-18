import { Icon } from '@chakra-ui/react';
import React from 'react';

const ArchivedIcon = (props) => {
  return (
    <Icon
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20.21 10.22V19C20.21 21 19.71 22 17.21 22H8.20996C5.70996 22 5.20996 21 5.20996 19V10.22M10.89 14H14.53M5.70996 2H19.71C21.71 2 22.71 3 22.71 5V7C22.71 9 21.71 10 19.71 10H5.70996C3.70996 10 2.70996 9 2.70996 7V5C2.70996 3 3.70996 2 5.70996 2Z'
        stroke={props.color || '#252525'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export default ArchivedIcon;
