// experimental - not in use
import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/core';

interface ImageProps {
  filename: string;
  alt: string;
}

const buildUrl = (filename: string) =>
  `https://firebasestorage.googleapis.com/v0/b/igneous-fort-228922.appspot.com/o/images%2F${filename}?alt=media`;

export const CDNImage = ({ filename, alt }: ImageProps) => {
  return (
    <Image
      fallbackSrc="https://via.placeholder.com/150"
      src={buildUrl(filename)}
      alt={alt}
    />
  );
};
