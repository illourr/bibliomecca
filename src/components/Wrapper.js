import React from 'react';
import { Box } from '@chakra-ui/core';

const Wrapper = ({ children }) => (
  <Box maxW="1600px" m={[4, 6, 8]}>
    {children}
  </Box>
);

export default Wrapper;
