import { UnitOfMeasurePrecisionType, UnitOfMeasureType } from "../enums/enums";
import { IAddress } from "./IAddress";

export interface IOrganization {
    id: string;
    name: string;
    description?: string;
    dateCreated: Date;
    dateModified: Date;
    isActive: boolean;
    address?: IAddress;
    contactEmail?: string;
    contactPhone?: string;
    websiteUrl?: string;
    logoUrl?: string;
    vatNumber?: string;
    taxNumber?: string;
    industry?: string;
    size?: string; // e.g. "1-10", "11-50", "51-200", "201-500", "501-1000", "1001+"
    defaultUnitOfMeasureType: UnitOfMeasureType;
    defaultUnitOfMeasurePrecisionType: UnitOfMeasurePrecisionType;
}