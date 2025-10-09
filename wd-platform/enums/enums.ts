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

export enum UserRoleType {
    user = 0,
    admin = 1,
    superAdmin = 2
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
    draft = 0,
    processing = 1,
    completed = 2,
    error = 3
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