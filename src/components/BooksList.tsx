import React from 'react';
import { List, ListItem, ListIcon, Button } from '@chakra-ui/core';
import { useBooksFeed } from '../services/Books';

type BookProps = {
  name: string;
  description: string;
  author: string;
};
const Book = ({ name, description, author }: BookProps) => {
  const isActive = true;
  return (
    <ListItem>
      <span>
        <ListIcon icon="sun" />
        {name} by {author}
      </span>
      {isActive && (
        <Button ml="2" size="sm" variantColor="red">
          Delete book
        </Button>
      )}
    </ListItem>
  );
};
export const BooksList = () => {
  const books = useBooksFeed();
  return (
    <List>
      {books.length > 0
        ? books.map(book => <Book key={book.id} {...book} />)
        : 'Books loading'}
    </List>
  );
};
