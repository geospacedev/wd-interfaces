import { ProductType } from "../enums/enums";

export interface IProduct {
    id: string;
    type: ProductType;
    name: string;
    description?: string;
    version: string;
    dateCreated: Date;
    dateModified: Date;
    isActive: boolean;
    status: string;
}