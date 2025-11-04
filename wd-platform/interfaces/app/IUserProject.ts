import { ProductType } from "../../enums/enums";

export interface IUserProject {
    id: string;
    userId: string; // owner
    name: string;
    description?: string;
    products: ProductType[];
    dateCreated: Date;
    dateModified: Date;    
    organizationId?: string; // optional organization
    isArchived: boolean;
    } 