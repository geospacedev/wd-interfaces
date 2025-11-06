export enum UnitOfMeasureType {
    imperial = 0,
    metric = 1
}

export enum UnitOfMeasurePrecisionType {
    zero = 0, // m
    half = 1, // cm
    quarter = 2, // mm
    eighth = 3 // not used
}

export enum CaptureComplexityLevelType {
    low = 0,
    medium = 1,
    high = 2
}

export enum UserRoleType {
    user = 0,
    admin = 1,
    superAdmin = 2
}

export enum UserProjectType {
    owner = 0,
    collaborator = 1,
    viewer = 2
}

export enum OrganizationRoleType {
    member = 0,
    admin = 1,
    owner = 2
}

export enum ProductType {
    floorPlan = 0,
    homeReport = 1,
    photoPlan = 2,
    walkthru = 3
}

export enum ProductPackageType {
    basic = 0,
    standard = 1,
    premium = 2
}

export enum ProductStatusType {
    created = 0,
    scanStarted = 1,
    scanError = 2,
    scanCompleted = 3,
    processingStarted = 4,
    processingError = 5,
    processingCompleted = 6,
    modelCreated = 7,
    modelError = 8,
    modelCompleted = 9,
    productionAssigned = 10,
    productionStarted = 11,
    productionError = 12,
    productionReassigned = 13,
    productionPending = 14,
    productionApproved = 15,
    productionRejected = 16,
    productionCompleted = 17
}

export enum CostType {
    free = 0,
    paid = 1
}

export enum CostDiscountType {
    none = 0,
    seasonal = 1,
    promotional = 2,
    volume = 3
}

export enum FileType {
    imageJpg = 0,
    imagePng = 1,
    svg = 2,
    pdf = 3,
    other = 9
}
