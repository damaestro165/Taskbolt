import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import MoreIcon from '../assets/Icons/MoreIcon';
import DeleteIcon from '../assets/Icons/DeleteIcon';
import IconPerson from '../assets/Icons/IconPerson';

const MemberMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<MoreIcon boxSize={6} />}
        variant='unstyled'
      />
      <MenuList className='flex flex-col gap-2 w-full h-full'>
        <MenuItem className='flex justify-evenly items-center gap-2'>
          <DeleteIcon boxSize={6} />{' '}
          <Text className=' text-red-600'>Remove Member</Text>
        </MenuItem>
        <MenuItem className='flex justify-evenly items-center gap-2'>
          <IconPerson boxSize={6} /> <Text>Assign Member</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MemberMenu;
