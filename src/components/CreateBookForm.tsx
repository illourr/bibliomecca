import React, { useRef, useState } from 'react';
import {
  Button,
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
  // FormHelperText
} from '@chakra-ui/core';
import { IBook } from '../types/Book';
import { Formik, FormikValues } from 'formik';
import { createBook } from '../services/Books';
import { fetchVolumes } from '../services/GoogleBooks';

const CreateBookForm = () => {
  const fetchTimerRef: React.MutableRefObject<number> = useRef<number>(0);
  const [volumes, setVolumes] = useState([]);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Remove this later and use this volumes fetcher.
    return;

    const query = e.target.value;
    if (query.length === 0) {
      return;
    }
    // search after 300 ms
    const timerId = fetchTimerRef.current;
    clearTimeout(timerId);
    fetchTimerRef.current = setTimeout(() => {
      fetchVolumes(query).then(volumes => {});
    }, 300);
  };

  const handleSubmit = async (
    bookValues: IBook,
    { setSubmitting }: FormikValues
  ) => {
    // setTimeout(() => {
    console.log({ bookValues });
    console.groupCollapsed('Creating book');
    console.table(bookValues);
    const result = await createBook(bookValues);
    console.log({ result });
    console.groupEnd();
    setSubmitting(false);
    // }, 400);
  };

  return (
    <Box>
      <Heading as="h2" size="lg">
        Add a new Book
      </Heading>
      <Formik
        initialValues={{
          name: '',
          description: '',
          author: '',
          isbn10: '',
          isbn13: ''
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <FormErrorMessage>Book name is required</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="author">Author</FormLabel>
              <Input
                id="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              <FormErrorMessage>Author name is required</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <FormErrorMessage>Description name is required</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="isbn10">ISBN-10</FormLabel>
              <Input
                id="isbn10"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.isbn10}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="isbn13">ISBN-13</FormLabel>
              <Input
                id="isbn13"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.isbn13}
              />
            </FormControl>
            <Button mt="2" type="submit" variantColor="green">
              Create a book
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateBookForm;
