import React from 'react';
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
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useBooksFeed, deleteBook } from '../services/Books';
import { IBook } from '../types/Book';

interface BookActionsMenuProps {
  bookId: string;
}

interface DeleteBookAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

function DeleteBookAlertDialog({
  isOpen,
  onClose,
  onDelete
}: DeleteBookAlertProps) {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        // @ts-ignore
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Book
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="red" onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

const BookActionsMenu = ({ bookId }: BookActionsMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleDeleteBook = async (bookId: string) => {
    await deleteBook(bookId);
    // TODO: Clean up this handling
  };

  return (
    <>
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
          <MenuItem onClick={handleOpen}>Delete</MenuItem>
        </MenuList>
      </Menu>
      <DeleteBookAlertDialog
        isOpen={isOpen}
        onClose={handleClose}
        onDelete={() => handleDeleteBook(bookId)}
      />
    </>
  );
};

const Book = ({ id, name, description, author }: IBook) => {
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
