export interface IBilling {
    id: string;
    userId: string;
    organizationId?: string; // optional organization

}

export interface IPaymentMethod {
    id: string;
    userId: string;
    organizationId?: string; // optional organization
    type: string; // e.g., 'credit_card', 'paypal'
    provider: string; // e.g., 'Visa', 'MasterCard', 'PayPal'
    accountLast4: string; // last 4 digits of the account
    expiryDate?: Date; // optional expiry date for cards
    isDefault: boolean;
    dateCreated: Date;
    dateModified: Date;
}

export interface IPayment {
    id: string; 
    userId: string;
    organizationId?: string; // optional organization
    amount: number; // in smallest currency unit, e.g., cents
    currency: string; // ISO 4217 currency code, e.g., 'USD', 'EUR'
    paymentMethodId: string; // reference to IPaymentMethod
    status: string; // e.g., 'pending', 'completed', 'failed'
    transactionId?: string; // optional transaction ID from payment gateway
    dateCreated: Date;
    dateModified: Date;
}