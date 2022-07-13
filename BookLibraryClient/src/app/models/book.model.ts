import { Author } from "./author.model";

export interface Book {
    id?: number;
    title?: string;
    yearOfPublish?: number;
    description?: string;
    rentalPrice?: number;
    listPrice?: number;
    unitNumber?: number;
    publisher?: any;
    publisherId?: any;
    language?: any;
    languageId?: any;
    authors?: any;
    genres?: any;
    orders?:any;
    createdBy?: number;
    created?: string;
    updatedBy?: number;
    updated?: string;
}



