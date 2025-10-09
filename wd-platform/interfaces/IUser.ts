import { OrganizationRoleType, UnitOfMeasurePrecisionType, UnitOfMeasureType, UserRoleType } from "../enums/enums";

export interface IUser {
    id: string;
    authId: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    dateCreated: Date;
    unitOfMeasureType: UnitOfMeasureType; // number for database
    unitOfMeasurePrecisionType: UnitOfMeasurePrecisionType; // number for database
    role: UserRoleType;
    organizationId?: string;
    organizationName?: string;  
    organizationRole?: OrganizationRoleType; // number for database
    isEmailVerified: boolean;
    isDisabled: boolean;    
    lastLoginDate?: Date;
    profilePhotoUrl?: string;
    phoneNumber?: string;
    tosAcceptedVersion?: string;
    privacyPolicyAcceptedVersion?: string;
    marketingOptIn?: boolean;
    betaProgramOptIn?: boolean;
    languageCode?: string; // en, fr, es, de, it, pt, zh, ja, ko
    darkModeOptIn?: boolean;
    experimentalFeaturesOptIn?: boolean;
    featureFlags?: string[]; // list of enabled feature flags
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