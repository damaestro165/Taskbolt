import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { forwardRef, useRef } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export const PasswordField = forwardRef(({ label }, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);
  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };
  return (
    <FormControl variant='floating' id='last-name'>
      <InputGroup>
        <Input
          id='password'
          ref={mergeRef}
          name='password'
          type={isOpen ? 'text' : 'password'}
          autoComplete='current-password'
          height='56px'
          required
          placeholder='  '
        />
        <FormLabel className='text-gray-500'>{label || 'Password'}</FormLabel>
        <InputRightElement height='100%'>
          <IconButton
            variant='link'
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEye /> : <HiEyeOff />}
            onClick={onClickReveal}
            fontSize='20px'
            color='#5720DD'
            pr={5}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
});
PasswordField.displayName = 'PasswordField';
