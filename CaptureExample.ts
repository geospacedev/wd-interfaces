import { ICapture, ICaptureDevice, ICaptureModel, ICaptureVideo, ICapturePhoto, ICaptureFrame, ICaptureTimeline, ICaptureTask, ICaptureIssue, ICapturePerspective, IFieldOfView, CaptureIssueStatusType, CaptureIssueCategoryType, CaptureIssueConfidenceType, CaptureIssueConfidenceReasonType } from "./WDCInterfaces";


export const captureExample: ICapture = {
    dateCreated: "2025-10-06T12:00:00.000Z",
    id: "e2a1c7b2-4f3a-4b8d-9c2e-1a2b3c4d5e6f",
    device: {
        // Example iPhone device properties
        platform: "iOS",
        model: "iPhone 15 Pro",
        deviceName: "John’s iPhone",
        osVersion: "iOS 17.5",
        deviceId: "ios-device-vendor-12345",
        appVersion: "1.3.0",
        bundleId: "com.example.captureapp"
        // Add more fields as needed by ICaptureDevice
    },
    model: {
        structure: {
            id: "c1d2e3f4-5678-49ab-8cde-f0123456789a",
            levels: [
                {
                    id: "level-1",
                    name: "Ground Floor",
                    elevation: 0,
                        wallFaces: [
                            [0, 0, 5, 0],
                            [5, 0, 5, 5],
                            [5, 5, 0, 5],
                            [0, 5, 0, 10],
                            [0, 10, 5, 10],
                            [5, 10, 10, 10],
                            [10, 10, 10, 5],
                            [10, 5, 10, 0],
                            [10, 0, 15, 0],
                            [15, 0, 15, 5],
                            [15, 5, 15, 10],
                            [15, 10, 10, 15],
                            [10, 15, 5, 15],
                            [5, 15, 0, 15],
                            [0, 15, 0, 10],
                            [0, 10, 0, 0]
                        ],
                    objects: []
                },
                {
                    id: "level-2",
                    name: "First Floor",
                    elevation: 3,
                        wallFaces: [
                            [0, 0, 6, 0],
                            [6, 0, 6, 6],
                            [6, 6, 0, 6],
                            [0, 6, 0, 12],
                            [0, 12, 6, 12],
                            [6, 12, 12, 12],
                            [12, 12, 12, 6],
                            [12, 6, 12, 0],
                            [12, 0, 18, 0],
                            [18, 0, 18, 6],
                            [18, 6, 18, 12],
                            [18, 12, 12, 18],
                            [12, 18, 6, 18],
                            [6, 18, 0, 18],
                            [0, 18, 0, 12],
                            [0, 12, 0, 6],
                            [0, 6, 0, 0],
                            [0, 0, 6, 0],
                            [6, 0, 12, 0],
                            [12, 0, 18, 0],
                            [18, 0, 18, 18],
                            [18, 18, 0, 18]
                        ],
                    objects: []
                }
            ]
        }
    },
    videos: [
        {
            id: "d4e5f6a7-b8c9-40d1-a2b3-c4d5e6f7a8b9",
            url: "https://cloud.example.com/projects/abc/captures/0001/video/main.mov",
            width: 1920,
            height: 1080,
            durationMs: 60000
        }
    ],
    photos: [
        {
            id: "b1c2d3e4-f5a6-47b8-9abc-def0123456789",
            url: "https://cloud.example.com/projects/abc/captures/0001/photos/0001.jpg",
            width: 4032,
            height: 3024
        }
    ],
    frames: [
        {
            id: "f16f3c6c-2b4f-4a2e-9a78-4a8d0c8a1c01",
            number: 0,
            perspective: {
                point: [150, 100, 0],
                height: 150,
                facingAngle: 0.78539816339,
                fov: { vertical: [0.5235987756, -0.5235987756], horizontal: [-0.6981317008, 0.6981317008] }
            },
            photoIds: ["b1c2d3e4-f5a6-47b8-9abc-def0123456789"],
            objects: []
        },
        {
            id: "a1b2c3d4-e5f6-47a8-9abc-def012345678",
            number: 1,
            perspective: {
                point: [300, 120, 0],
                height: 150,
                facingAngle: 1.2217304764,
                fov: { vertical: [0.5235987756, -0.5235987756], horizontal: [-0.6981317008, 0.6981317008] }
            },
            photoIds: [],
            objects: []
        },
        {
            id: "b2c3d4e5-f6a7-48b9-8abc-def012345679",
            number: 2,
            perspective: {
                point: [450, 140, 0],
                height: 150,
                facingAngle: 1.5707963268,
                fov: { vertical: [0.5235987756, -0.5235987756], horizontal: [-0.6981317008, 0.6981317008] }
            },
            photoIds: [],
            objects: []
        }
    ],
    timeline: {
        frameIds: [
            "f16f3c6c-2b4f-4a2e-9a78-4a8d0c8a1c01",
            "a1b2c3d4-e5f6-47a8-9abc-def012345678",
            "b2c3d4e5-f6a7-48b9-8abc-def012345679"
        ]
    },
    tasks: [
        {
            id: "a7b8c9d0-e1f2-43a4-b5c6-d7e8f9a0b1c2",
            issue: {
                id: "c3d4e5f6-a7b8-49c0-b1c2-d3e4f5a6b7c8",
                status: CaptureIssueStatusType.new,
                category: CaptureIssueCategoryType.other,
                confidence: CaptureIssueConfidenceType.medium,
                reason: CaptureIssueConfidenceReasonType.scanQuality,
                frameId: "f16f3c6c-2b4f-4a2e-9a78-4a8d0c8a1c01"
            }
        }
    ]
};

export default captureExample;

