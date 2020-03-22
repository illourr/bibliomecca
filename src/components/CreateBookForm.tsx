import React, { useRef, useState } from 'react';
import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
  // FormHelperText
} from '@chakra-ui/core';
import { fetchVolumes } from '../services/GoogleBooks';

const CreateBookForm = () => {
  const fetchTimerRef: React.MutableRefObject<number> = useRef<number>(0);
  const [volumes, setVolumes] = useState([]);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length === 0) {
      return;
    }
    // search after 300 ms
    const timerId = fetchTimerRef.current;
    clearTimeout(timerId);
    fetchTimerRef.current = setTimeout(() => {
      fetchVolumes(query).then(volumes => {
        console.log({ volumes });
      });
    }, 300);
  };
  return (
    <Box>
      <Heading as="h2" size="lg">
        Add a new Book
      </Heading>
      <form>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" onChange={handleNameChange} />
          <FormErrorMessage>Book name is required</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="author">Author</FormLabel>
          <Input id="author" />
          <FormErrorMessage>Author name is required</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="author">ISBN-10</FormLabel>
          <Input id="author" />
          <FormErrorMessage>Author name is required</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="author">ISBN-13</FormLabel>
          <Input id="author" />
          <FormErrorMessage>Author name is required</FormErrorMessage>
        </FormControl>
      </form>
    </Box>
  );
};

export default CreateBookForm;
