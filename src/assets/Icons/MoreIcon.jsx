import { Icon } from '@chakra-ui/react';
import React from 'react';

const MoreIcon = (props) => {
  return (
    <Icon
      width='6'
      height='20'
      viewBox='0 0 6 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='3' cy='3' r='2.5' fill='#767676' />
      <circle cx='3' cy='10' r='2.5' fill='#767676' />
      <circle cx='3' cy='17' r='2.5' fill='#767676' />
    </Icon>
  );
};

export default MoreIcon;
