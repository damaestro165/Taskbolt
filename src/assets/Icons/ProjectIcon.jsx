import { Icon } from '@chakra-ui/react';
import React from 'react';

const ProjectIcon = (props) => {
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
        d='M8.70996 12.2H15.71M8.70996 16.2H13.09M10.71 6H14.71C16.71 6 16.71 5 16.71 4C16.71 2 15.71 2 14.71 2H10.71C9.70996 2 8.70996 2 8.70996 4C8.70996 6 9.70996 6 10.71 6Z'
        stroke='#252525'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.71 4.02002C20.04 4.20002 21.71 5.43002 21.71 10V16C21.71 20 20.71 22 15.71 22H9.70996C4.70996 22 3.70996 20 3.70996 16V10C3.70996 5.44002 5.37996 4.20002 8.70996 4.02002'
        stroke='#252525'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};

export default ProjectIcon;
