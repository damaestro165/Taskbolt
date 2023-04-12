import { MenuButton, MenuList, Menu, Button, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const MenuComp = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='unstyled'
        rightIcon={<HiOutlineChevronDown size='1rem' />}
        color='white'
        display='flex'
      >
        Quick Acces
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
