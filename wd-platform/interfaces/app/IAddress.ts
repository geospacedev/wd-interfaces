export interface IAddress {
    street1: string;
    street2?: string;
    city: string;
    state?: string;
    postalCode: string;
    countryCode: string; // ISO 3166-1 alpha-2
}