import { MenuButton, MenuList, Menu, Button, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import ChevondownIcon from '../assets/Icons/ChevondownIcon';

const MenuComp = ({ title, color }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='unstyled'
        rightIcon={<ChevondownIcon boxSize='1rem' color={color} />}
        color={color || 'black'}
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontWeight='light'
      >
        {title}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuComp;
