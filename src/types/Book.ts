// Interface which matches the same shape as a book in the firestore
export interface IBookDraft {
  name: string;
  author: string;
  description: string;
  isbn10?: string;
  isbn13?: string;
}
export interface IBook extends IBookDraft {
  id: string;
}
