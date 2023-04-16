import { Icon } from '@chakra-ui/react';
import React from 'react';

const ShareIcon = (props) => {
  return (
    <Icon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.6702 9.80064L8.65676 5.05675C6.51812 3.92911 4.19284 6.20773 5.27382 8.3697L6.53368 10.8894C6.88363 11.5893 6.88363 12.4137 6.53368 13.1136L5.27382 15.6333C4.19284 17.7953 6.51812 20.0661 8.65676 18.9462L17.6702 14.2024C19.4433 13.2691 19.4433 10.7339 17.6702 9.80064Z'
        stroke='#252525'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export default ShareIcon;
