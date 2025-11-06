import { ProductStatusType, ProductType } from "../enums/enums";
import { IAddress } from "./IAddress";
import { ICapture } from "./ICapture";

export interface IProject {
    id: string;
    name: string; // for test data, use the address of the project
    address: IAddress;
    description?: string;
    model: ICapture | undefined; // not used yet, so undefined
    dateCreated: Date;
    dateModified: Date;
    isActive: boolean;
    currentStatus: ProductStatusType;
    statusHistory: IProjectStatus[];
    
}

export interface IProjectStatus {
    status: ProductStatusType;
    date: Date;
}