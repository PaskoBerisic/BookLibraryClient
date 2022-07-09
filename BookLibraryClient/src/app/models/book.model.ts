import { Author } from "./author.model";
import { Genre } from "./genre.model";

export class Book {
    id?: number;
    title?: string;
    authors?: Author;
    publisher?: any;
    publisherId?: any;
    yearOfPublish?: number;
    description?: string;
    language?: any;
    languageId?: any;
    genres?: Genre;
    rentalPrice?: number;
    listPrice?: number;
    unitNumber?: number;
    createdBy?: number;
    created?: string;
    updatedBy?: number;
    updated?: string;
}



