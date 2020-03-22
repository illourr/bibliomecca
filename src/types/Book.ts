// Interface which matches the same shape as a book in the firestore
export interface IBook {
  id?: string;
  name: string;
  author: string;
  description: string;
  isbn10?: string;
  isbn13?: string;
}
