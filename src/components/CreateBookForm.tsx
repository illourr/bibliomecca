import React from 'react';
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/core';

const CreateBookForm = () => (
  <Box>
    <Heading as="h2" size="lg">
      Add a new Book
    </Heading>
    <form>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="email" id="email" aria-describedby="email-helper-text" />
        <FormHelperText id="email-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </form>
  </Box>
);

export default CreateBookForm;
