import { Button, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function CountdownTimer({ resendOtp }) {
  const [countdown, setCountdown] = useState(300);

  useEffect(() => {
    if (countdown === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const handleClicked = () => {
    resendOtp();
    setCountdown(300);
  };

  return (
    <div className='text-[#5720DD]'>
      {countdown === 0 ? (
        <Button variant='unstyled' onClick={handleClicked}>
          <Text as='u' className=''>
            Resend Link
          </Text>
        </Button>
      ) : (
        <p className=' font-semibold'>{`${minutes}:${
          seconds < 10 ? '0' : ''
        }${seconds}`}</p>
      )}
    </div>
  );
}

export default CountdownTimer;
