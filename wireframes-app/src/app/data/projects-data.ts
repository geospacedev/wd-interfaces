import { IProject, IProjectStatus } from '@wd-platform/interfaces/IProject';
import { IAddress } from '@wd-platform/interfaces/IAddress';
import { ProductStatusType } from '@wd-platform/enums/enums';

const projectIds = [
  '990e8400-e29b-41d4-a716-446655440001',
  '990e8400-e29b-41d4-a716-446655440002',
  '990e8400-e29b-41d4-a716-446655440003',
  '990e8400-e29b-41d4-a716-446655440004',
  '990e8400-e29b-41d4-a716-446655440005',
  '990e8400-e29b-41d4-a716-446655440006',
  '990e8400-e29b-41d4-a716-446655440007',
  '990e8400-e29b-41d4-a716-446655440008',
  '990e8400-e29b-41d4-a716-446655440009',
  '990e8400-e29b-41d4-a716-446655440010',
  '990e8400-e29b-41d4-a716-446655440011',
  '990e8400-e29b-41d4-a716-446655440012',
  '990e8400-e29b-41d4-a716-446655440013',
  '990e8400-e29b-41d4-a716-446655440014',
  '990e8400-e29b-41d4-a716-446655440015',
  '990e8400-e29b-41d4-a716-446655440016',
  '990e8400-e29b-41d4-a716-446655440017',
  '990e8400-e29b-41d4-a716-446655440018',
  '990e8400-e29b-41d4-a716-446655440019',
  '990e8400-e29b-41d4-a716-446655440020'
];

export const projectsData: IProject[] = [
  {
    id: projectIds[0],
    name: '123 Main Street, New York, NY 10001',
    address: {
      street1: '123 Main Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      countryCode: 'US'
    },
    description: 'Modern downtown apartment complex',
    model: undefined,
    dateCreated: new Date('2023-01-10T10:00:00'),
    dateModified: new Date('2024-01-15T14:30:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-01-10T10:00:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-01-10T11:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-01-11T14:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-01-12T09:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-01-15T16:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-01-18T10:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2023-01-20T12:00:00') }
    ]
  },
  {
    id: projectIds[1],
    name: '456 Oak Avenue, Los Angeles, CA 90001',
    address: {
      street1: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90001',
      countryCode: 'US'
    },
    description: 'Residential single-family home',
    model: undefined,
    dateCreated: new Date('2023-02-15T09:15:00'),
    dateModified: new Date('2024-01-20T16:45:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-02-15T09:15:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-02-15T10:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-02-16T15:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-02-17T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-02-20T14:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-02-25T11:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2023-02-28T16:00:00') }
    ]
  },
  {
    id: projectIds[2],
    name: '789 Pine Road, Chicago, IL 60601',
    address: {
      street1: '789 Pine Road',
      street2: 'Suite 200',
      city: 'Chicago',
      state: 'IL',
      postalCode: '60601',
      countryCode: 'US'
    },
    description: 'Commercial office building',
    model: undefined,
    dateCreated: new Date('2023-03-20T11:30:00'),
    dateModified: new Date('2024-01-18T10:20:00'),
    isActive: true,
    currentStatus: ProductStatusType.processingCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-03-20T11:30:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-03-20T13:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-03-22T10:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-03-23T09:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-03-25T15:00:00') }
    ]
  },
  {
    id: projectIds[3],
    name: '321 Elm Street, Houston, TX 77001',
    address: {
      street1: '321 Elm Street',
      city: 'Houston',
      state: 'TX',
      postalCode: '77001',
      countryCode: 'US'
    },
    description: 'Suburban townhouse development',
    model: undefined,
    dateCreated: new Date('2023-04-05T13:45:00'),
    dateModified: new Date('2024-01-17T09:30:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCreated,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-04-05T13:45:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-04-05T15:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-04-07T11:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-04-08T09:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-04-10T14:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-04-12T10:00:00') }
    ]
  },
  {
    id: projectIds[4],
    name: '654 Maple Drive, Phoenix, AZ 85001',
    address: {
      street1: '654 Maple Drive',
      city: 'Phoenix',
      state: 'AZ',
      postalCode: '85001',
      countryCode: 'US'
    },
    description: 'Luxury condominium complex',
    model: undefined,
    dateCreated: new Date('2023-05-12T15:00:00'),
    dateModified: new Date('2024-01-22T17:15:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-05-12T15:00:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-05-12T16:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-05-14T10:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-05-15T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-05-18T13:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-05-20T11:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2023-05-22T15:00:00') }
    ]
  },
  {
    id: projectIds[5],
    name: '987 Cedar Lane, Philadelphia, PA 19101',
    address: {
      street1: '987 Cedar Lane',
      city: 'Philadelphia',
      state: 'PA',
      postalCode: '19101',
      countryCode: 'US'
    },
    description: 'Historic building renovation',
    model: undefined,
    dateCreated: new Date('2023-06-18T10:10:00'),
    dateModified: new Date('2024-01-16T11:45:00'),
    isActive: true,
    currentStatus: ProductStatusType.scanCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-06-18T10:10:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-06-18T11:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-06-19T14:00:00') }
    ]
  },
  {
    id: projectIds[6],
    name: '147 Birch Boulevard, San Antonio, TX 78201',
    address: {
      street1: '147 Birch Boulevard',
      city: 'San Antonio',
      state: 'TX',
      postalCode: '78201',
      countryCode: 'US'
    },
    description: 'Multi-family residential complex',
    model: undefined,
    dateCreated: new Date('2023-07-22T14:25:00'),
    dateModified: new Date('2024-01-14T13:20:00'),
    isActive: true,
    currentStatus: ProductStatusType.processingStarted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-07-22T14:25:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-07-22T15:45:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-07-24T10:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-07-25T09:00:00') }
    ]
  },
  {
    id: projectIds[7],
    name: '258 Spruce Court, San Diego, CA 92101',
    address: {
      street1: '258 Spruce Court',
      city: 'San Diego',
      state: 'CA',
      postalCode: '92101',
      countryCode: 'US'
    },
    description: 'Beachfront property development',
    model: undefined,
    dateCreated: new Date('2023-08-30T08:50:00'),
    dateModified: new Date('2024-01-13T15:10:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-08-30T08:50:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-08-30T10:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-09-01T12:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-09-02T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-09-05T14:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-09-07T10:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2023-09-10T16:00:00') }
    ]
  },
  {
    id: projectIds[8],
    name: '369 Willow Way, Dallas, TX 75201',
    address: {
      street1: '369 Willow Way',
      street2: 'Building A',
      city: 'Dallas',
      state: 'TX',
      postalCode: '75201',
      countryCode: 'US'
    },
    description: 'Mixed-use development project',
    model: undefined,
    dateCreated: new Date('2023-09-14T16:40:00'),
    dateModified: new Date('2024-01-12T10:25:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelError,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-09-14T16:40:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-09-14T18:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-09-16T11:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-09-17T09:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-09-20T13:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-09-22T10:00:00') },
      { status: ProductStatusType.modelError, date: new Date('2023-09-25T14:00:00') }
    ]
  },
  {
    id: projectIds[9],
    name: '741 Cherry Street, San Jose, CA 95101',
    address: {
      street1: '741 Cherry Street',
      city: 'San Jose',
      state: 'CA',
      postalCode: '95101',
      countryCode: 'US'
    },
    description: 'Tech office campus',
    model: undefined,
    dateCreated: new Date('2023-10-08T12:15:00'),
    dateModified: new Date('2024-01-11T14:50:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-10-08T12:15:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-10-08T13:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-10-10T09:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-10-11T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2023-10-14T12:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2023-10-16T10:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2023-10-18T15:00:00') }
    ]
  },
  {
    id: projectIds[10],
    name: '852 Ash Avenue, Austin, TX 78701',
    address: {
      street1: '852 Ash Avenue',
      city: 'Austin',
      state: 'TX',
      postalCode: '78701',
      countryCode: 'US'
    },
    description: 'Modern apartment building',
    model: undefined,
    dateCreated: new Date('2023-11-25T09:30:00'),
    dateModified: new Date('2024-01-10T08:20:00'),
    isActive: true,
    currentStatus: ProductStatusType.scanStarted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-11-25T09:30:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-11-25T11:00:00') }
    ]
  },
  {
    id: projectIds[11],
    name: '963 Poplar Drive, Jacksonville, FL 32201',
    address: {
      street1: '963 Poplar Drive',
      city: 'Jacksonville',
      state: 'FL',
      postalCode: '32201',
      countryCode: 'US'
    },
    description: 'Residential subdivision',
    model: undefined,
    dateCreated: new Date('2023-12-01T11:45:00'),
    dateModified: new Date('2024-01-09T12:15:00'),
    isActive: true,
    currentStatus: ProductStatusType.processingError,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2023-12-01T11:45:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2023-12-01T13:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2023-12-03T10:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2023-12-04T09:00:00') },
      { status: ProductStatusType.processingError, date: new Date('2023-12-06T14:00:00') }
    ]
  },
  {
    id: projectIds[12],
    name: '159 Fir Circle, Fort Worth, TX 76101',
    address: {
      street1: '159 Fir Circle',
      city: 'Fort Worth',
      state: 'TX',
      postalCode: '76101',
      countryCode: 'US'
    },
    description: 'Retail shopping center',
    model: undefined,
    dateCreated: new Date('2024-01-03T13:20:00'),
    dateModified: new Date('2024-01-08T16:35:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-03T13:20:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-03T14:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2024-01-04T11:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2024-01-05T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2024-01-06T13:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2024-01-07T10:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2024-01-08T15:00:00') }
    ]
  },
  {
    id: projectIds[13],
    name: '357 Hickory Road, Columbus, OH 43201',
    address: {
      street1: '357 Hickory Road',
      city: 'Columbus',
      state: 'OH',
      postalCode: '43201',
      countryCode: 'US'
    },
    description: 'University student housing',
    model: undefined,
    dateCreated: new Date('2024-01-10T10:00:00'),
    dateModified: new Date('2024-01-07T12:00:00'),
    isActive: true,
    currentStatus: ProductStatusType.created,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-10T10:00:00') }
    ]
  },
  {
    id: projectIds[14],
    name: '468 Walnut Street, Charlotte, NC 28201',
    address: {
      street1: '468 Walnut Street',
      city: 'Charlotte',
      state: 'NC',
      postalCode: '28201',
      countryCode: 'US'
    },
    description: 'Executive office complex',
    model: undefined,
    dateCreated: new Date('2024-01-12T14:55:00'),
    dateModified: new Date('2024-01-06T09:15:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-12T14:55:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-12T16:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2024-01-13T10:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2024-01-14T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2024-01-15T12:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2024-01-16T09:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2024-01-17T14:00:00') }
    ]
  },
  {
    id: projectIds[15],
    name: '579 Chestnut Lane, San Francisco, CA 94101',
    address: {
      street1: '579 Chestnut Lane',
      street2: 'Unit 5B',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94101',
      countryCode: 'US'
    },
    description: 'Victorian home restoration',
    model: undefined,
    dateCreated: new Date('2024-01-14T11:30:00'),
    dateModified: new Date('2024-01-05T17:40:00'),
    isActive: true,
    currentStatus: ProductStatusType.scanError,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-14T11:30:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-14T13:00:00') },
      { status: ProductStatusType.scanError, date: new Date('2024-01-15T10:00:00') }
    ]
  },
  {
    id: projectIds[16],
    name: '680 Redwood Boulevard, Indianapolis, IN 46201',
    address: {
      street1: '680 Redwood Boulevard',
      city: 'Indianapolis',
      state: 'IN',
      postalCode: '46201',
      countryCode: 'US'
    },
    description: 'Sports facility complex',
    model: undefined,
    dateCreated: new Date('2024-01-15T15:20:00'),
    dateModified: new Date('2024-01-04T10:10:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-15T15:20:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-15T16:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2024-01-16T11:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2024-01-17T09:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2024-01-18T13:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2024-01-19T10:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2024-01-20T15:00:00') }
    ]
  },
  {
    id: projectIds[17],
    name: '791 Sycamore Court, Seattle, WA 98101',
    address: {
      street1: '791 Sycamore Court',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      countryCode: 'US'
    },
    description: 'Waterfront condominiums',
    model: undefined,
    dateCreated: new Date('2024-01-16T08:45:00'),
    dateModified: new Date('2024-01-03T13:25:00'),
    isActive: true,
    currentStatus: ProductStatusType.processingCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-16T08:45:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-16T10:00:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2024-01-17T12:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2024-01-18T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2024-01-20T14:00:00') }
    ]
  },
  {
    id: projectIds[18],
    name: '802 Cypress Way, Denver, CO 80201',
    address: {
      street1: '802 Cypress Way',
      city: 'Denver',
      state: 'CO',
      postalCode: '80201',
      countryCode: 'US'
    },
    description: 'Mountain view residential',
    model: undefined,
    dateCreated: new Date('2024-01-17T12:10:00'),
    dateModified: new Date('2024-01-02T14:50:00'),
    isActive: false,
    currentStatus: ProductStatusType.modelError,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-17T12:10:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-17T13:30:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2024-01-18T10:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2024-01-19T09:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2024-01-21T13:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2024-01-22T11:00:00') },
      { status: ProductStatusType.modelError, date: new Date('2024-01-23T15:00:00') }
    ]
  },
  {
    id: projectIds[19],
    name: '913 Magnolia Avenue, Washington, DC 20001',
    address: {
      street1: '913 Magnolia Avenue',
      city: 'Washington',
      state: 'DC',
      postalCode: '20001',
      countryCode: 'US'
    },
    description: 'Government building renovation',
    model: undefined,
    dateCreated: new Date('2024-01-18T09:25:00'),
    dateModified: new Date('2024-01-01T11:30:00'),
    isActive: true,
    currentStatus: ProductStatusType.modelCompleted,
    statusHistory: [
      { status: ProductStatusType.created, date: new Date('2024-01-18T09:25:00') },
      { status: ProductStatusType.scanStarted, date: new Date('2024-01-18T10:45:00') },
      { status: ProductStatusType.scanCompleted, date: new Date('2024-01-19T12:00:00') },
      { status: ProductStatusType.processingStarted, date: new Date('2024-01-20T08:00:00') },
      { status: ProductStatusType.processingCompleted, date: new Date('2024-01-22T14:00:00') },
      { status: ProductStatusType.modelCreated, date: new Date('2024-01-23T10:00:00') },
      { status: ProductStatusType.modelCompleted, date: new Date('2024-01-25T16:00:00') }
    ]
  }
];
