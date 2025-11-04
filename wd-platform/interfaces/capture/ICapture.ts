
export interface ICapture {
	dateCreated: string; // ISO 8601 string for JSON safety
    id: string;
    device: ICaptureDevice;
    model: ICaptureModel; // this is the format required by product to render floor plans - it is an intermediate format between the raw data and the product format
    videos: ICaptureVideo[];
    photos: ICapturePhoto[];
    // frames: ICaptureFrameOLD[];
    frames: ICaptureFrame[]; // frames from the raw scan
    objFile: ICaptureObjFile; // .obj from scan storage
    mtlFile: ICaptureMtlFile; // .mtl from scan storage
    meshFile: ICaptureMeshFile; // .ply from scan storage
    timeline: ICaptureTimeline;
    tasks: ICaptureTask[];
}
    
export interface ICaptureObjFile {
    id: string;
    path: string;
    url: string;
    size: number;
    createdAt: string;
    updatedAt: string;
    lastModifiedAt: string;
    lastModifiedBy: string;
    lastModifiedByEmail: string;
    mtlFileId: string;
}

export interface ICaptureMtlFile {
    id: string;
    path: string;
    url: string;
    size: number;
    createdAt: string;
    updatedAt: string;
    lastModifiedAt: string;
    lastModifiedBy: string;
    lastModifiedByEmail: string;
    objFileId: string;
}

export interface ICaptureMeshFile {
    id: string;
    path: string;
    url: string;
    size: number;
    createdAt: string;
    updatedAt: string;
    lastModifiedAt: string;
    lastModifiedBy: string;
    lastModifiedByEmail: string;    
}

export interface ICaptureDevice {
	platform: "iOS";
	model: string; // e.g., "iPhone 15 Pro"
	deviceName: string; // user-visible device name
	osVersion: string; // e.g., "iOS 17.5"
	deviceId: string; // vendor/device identifier (not PII)
	appVersion?: string; // capture app version
	bundleId?: string; // capture app bundle identifier
	cameras?: ICaptureCamera[]; // available camera modules
	primaryCameraId?: string; // id of camera used predominantly
}

export interface ICaptureVideo {
    id: string;
	url: string; // cloud storage url
	thumbnailUrl?: string;
	width: number;
	height: number;
	durationMs: number;
	fps?: number;
	bitrateKbps?: number;
	codec?: string; // e.g., "h264", "hevc"
	sizeBytes?: number;
	createdAt?: string; // ISO 8601
}

export interface ICapturePhoto {
	id: string;
	url: string; // cloud storage url
	thumbnailUrl?: string;
	width: number;
	height: number;
	sizeBytes?: number;
	createdAt?: string; // ISO 8601
	cameraId?: string; // which camera captured this photo
	meta?: ICapturePhotoMetadata;
}

export interface ICaptureFrameOLD {
	id: string;
    number: number;
    perspective: ICapturePerspective;
    photoIds: string[];
	objects: ICaptureObject[];
}

export interface ICaptureFrame {
    imageUrl: string;
    cameraPose: ICameraPose;
    depthValues: string; // base64 encoded depth values
    depthFrameUrl: string; // url to the depth frame
}

export interface ICaptureObject {
    id: string;
    name: string;
    type: string;
    position: number[];
    rotation: number[];
    scale: number[];
}

export interface ICameraPose {
    extrinsics: number[]; // 16 elements [R11, R12, R13, R21, R22, R23, R31, R32, R33, Tx, Ty, Tz]
    intrinsics: number[]; // 9 elements [fx, fy, cx, cy, k1, k2, k3, p1, p2]
}

export interface ICaptureTimeline {
    frameIds: string[];
}

export interface ICaptureTask {
    id: string;
    issue: ICaptureIssue;
}

export interface ICaptureIssue {
    id: string;
    status: CaptureIssueStatusType;
    category: CaptureIssueCategoryType,
    confidence: CaptureIssueConfidenceType,
    reason: CaptureIssueConfidenceReasonType,
    frameId: string;
}

export interface ICapturePerspective {
    point: number[]; // cartesian point of device
    height: number; // height off floor
    facingAngle: number; // in radians
    fov: IFieldOfView;
}

export interface ICaptureObject  {
	// tdb
}


export interface ICaptureModel {
    structure: IStructure;
}

export interface IStructure {
    id: string | undefined;
    levels: ICaptureLevel[] | undefined;
}

export interface ICaptureLevel {
    id: string;
    name: string;
    elevation: number;
    wallFaces: number[][]; // array of wall faces, each face is array of points [x1, y1, x2, y2]
    objects: ICaptureObject[];
}

export interface IFieldOfView {
    vertical: number[]; // [top angle, bottom angle] 
    horizontal: number[]; // [left angle, right angle]
}

export enum CaptureIssueStatusType {
    new = 0,
    viewed = 1,
    resolved = 2,
    deferred = 3,
    nonIssue = 4
}

export enum CaptureIssueCategoryType {
    wall = 0,
    object = 1,
    other = 2
}

export enum CaptureIssueConfidenceType {
    high = 0,
    medium = 1,
    low = 2
}

export enum CaptureIssueConfidenceReasonType {
    lighting = 0,
    complexity = 1,
    reflectiveSurface = 2,
    scanQuality = 3
}

export interface ICaptureCamera {
	cameraType: string; // stable id for camera module (e.g., "rear-wide")
	position: "front" | "rear";
	lensType: "wide" | "ultraWide" | "telephoto" | "front";
	focalLengthMm?: number;
	sensorSizeMm?: { width: number; height: number };
	intrinsics3x3?: number[]; // row-major 3x3 matrix [9]
	fovRadians?: { horizontal: number; vertical: number };
}

export interface ICapturePhotoMetadata {
	iso?: number;
	shutterSeconds?: number;
	apertureFNumber?: number;
	focalLengthMm?: number;
}