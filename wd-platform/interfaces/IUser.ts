import { OrganizationRoleType, UnitOfMeasurePrecisionType, UnitOfMeasureType, UserRoleType } from "../enums/enums";

export interface IUser {
    id: string; // guid uuid
    authId: string; // guid uuid
    emailAddress: string;
    firstName: string;
    lastName: string;
    countryCode: string; // all test data is in US
    dateCreated: Date;
    unitOfMeasureType: UnitOfMeasureType; // number for database
    unitOfMeasurePrecisionType: UnitOfMeasurePrecisionType; // number for database
    role: UserRoleType;
    organizationId?: string; // guid uuid
    organizationName?: string;  
    organizationRole?: OrganizationRoleType; // number for database
    isEmailVerified: boolean;
    isDisabled: boolean; // default is false
    dateLastLogin?: Date;
    profilePhotoUrl?: string; // not used yet
    phoneNumber?: string; // not used yet
    tosAcceptedVersion?: string; // not used yet
    privacyPolicyAcceptedVersion?: string; // not used yet
    marketingOptIn?: boolean; // not used yet
    betaProgramOptIn?: boolean; // not used yet
    languageCode?: string; // en, fr, es, de, it, pt, zh, ja, ko
    darkModeOptIn?: boolean; // not used yet
    experimentalFeaturesOptIn?: boolean; // not used yet
    featureFlags?: string[]; // not used yet
}

export interface IUnitOfMeasure {
    unitOfMeasure: UnitOfMeasureType;
    unitOfMeasurePrecision: UnitOfMeasurePrecisionType;
}

export interface UserProjectSettings {
    showZones: boolean;
    showWalls: boolean;
    showObjects: boolean;    
}