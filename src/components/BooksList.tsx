import React, { useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useBooksFeed, deleteBook } from '../services/Books';
import { IBook } from '../types/Book';

type BookActionsMenuProps = {
  bookId: string;
};

const BookActionsMenu = ({ bookId }: BookActionsMenuProps) => {
  const handleDeleteBook = async (bookId: string) => {
    const result = await deleteBook(bookId);
    // TODO: Clean up this handling
  };

  return (
    <Menu>
      {/* 
  // @ts-ignore */}
      <MenuButton as={Button} rightIcon="chevron-down">
        Settings
      </MenuButton>
      <MenuList>
        {/* 
  // @ts-ignore */}
        <MenuItem as={Link} to={`/book/${bookId}/checkout`}>
          Checkout
        </MenuItem>
        <MenuItem onClick={() => handleDeleteBook(bookId)}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

const Book = ({ id, name, description, author }: IBook) => {
  const isActive = true;
  return (
    <ListItem
      mb="4"
      border="1px solid"
      borderColor="teal.500"
      borderRadius="3px"
      p="2"
    >
      <Heading as="h3" size="md">
        {name}
      </Heading>
      <Box as="p" fontWeight="bold" color="teal.500">
        by {author}
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <BookActionsMenu bookId={id} />
      </Box>
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
