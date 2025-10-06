import { ICapture } from "./ICapture";

export const captureExample: ICapture = {
	dateCreated: "2025-10-06T12:00:00.000Z",
	id: "capture_0001",
	device: {
		platform: "iOS",
		model: "iPhone 15 Pro",
		deviceName: "John’s iPhone",
		osVersion: "iOS 17.5",
		deviceId: "ios-device-vendor-12345",
		appVersion: "1.3.0",
		bundleId: "com.example.captureapp",
		primaryCameraId: "rear-wide",
		cameras: [
			{
				id: "rear-wide",
				position: "rear",
				lensType: "wide",
				focalLengthMm: 24,
				sensorSizeMm: { width: 7.01, height: 5.79 },
				intrinsics3x3: [
					2000, 0, 1500,
					0, 2000, 1000,
					0, 0, 1
				],
				fovRadians: { horizontal: 1.396, vertical: 1.047 }
			},
			{
				id: "rear-ultra",
				position: "rear",
				lensType: "ultraWide",
				focalLengthMm: 13,
				fovRadians: { horizontal: 2.199, vertical: 1.885 }
			}
		]
	},
	model: {},
	videos: [
		{
			url: "https://cloud.example.com/projects/abc/captures/0001/video/main.mov",
			thumbnailUrl: "https://cloud.example.com/projects/abc/captures/0001/thumbs/video_main.jpg",
			width: 3840,
			height: 2160,
			durationMs: 120000,
			fps: 60,
			bitrateKbps: 35000,
			codec: "hevc",
			sizeBytes: 524288000,
			createdAt: "2025-10-06T12:00:05.000Z"
		}
	],
	photos: [
		{
			id: "2f1d9b24-8c5b-41a1-9b4b-8a2d7a6d3b11",
			url: "https://cloud.example.com/projects/abc/captures/0001/photos/0001.jpg",
			thumbnailUrl: "https://cloud.example.com/projects/abc/captures/0001/thumbs/0001_thumb.jpg",
			width: 4032,
			height: 3024,
			sizeBytes: 3565158,
			createdAt: "2025-10-06T12:00:10.000Z",
			cameraId: "rear-wide",
			meta: { iso: 80, shutterSeconds: 0.01, apertureFNumber: 1.78, focalLengthMm: 24 }
		},
		{
			id: "9a6a0e97-7fb5-4f1d-9f4c-2d8d1a0f2c33",
			url: "https://cloud.example.com/projects/abc/captures/0001/photos/0002.jpg",
			width: 4032,
			height: 3024,
			createdAt: "2025-10-06T12:00:12.000Z",
			cameraId: "rear-wide"
		}
	],
	frames: [
		{
			id: "f16f3c6c-2b4f-4a2e-9a78-4a8d0c8a1c01",
			number: 0,
			perspective: {
				point: [150, 100, 0],
				height: 150,
				facingAngle: 0.78539816339, // ~45°
				fov: { vertical: [0.5235987756, -0.5235987756], horizontal: [-0.6981317008, 0.6981317008] }
			},
			photos: [
				{
					id: "8e7b2c1d-3a4f-4d6b-9c2a-1f0e9d8c7b66",
					url: "https://cloud.example.com/projects/abc/captures/0001/photos/frame0_01.jpg",
					width: 4032,
					height: 3024,
					createdAt: "2025-10-06T12:00:15.000Z",
					cameraId: "rear-wide"
				}
			]
		},
		{
			id: "a1b2c3d4-e5f6-47a8-9abc-def012345678",
			number: 1,
			perspective: {
				point: [300, 120, 0],
				height: 150,
				facingAngle: 1.2217304764, // ~70°
				fov: { vertical: [0.5235987756, -0.5235987756], horizontal: [-0.6981317008, 0.6981317008] }
			},
			photos: [
				{
					id: "5c4d3e2f-1a0b-4c9d-8e7f-6d5c4b3a2f10",
					url: "https://cloud.example.com/projects/abc/captures/0001/photos/frame1_01.jpg",
					width: 4032,
					height: 3024,
					createdAt: "2025-10-06T12:00:20.000Z",
					cameraId: "rear-wide"
				}
			]
		}
	],
		timeline: {
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
				photos: []
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
				photos: []
			}
		]
	},
		tasks: [
		{
			id: "task-001",
			issue: {
				id: "issue-001",
				status: 0,
				category: 2,
				confidence: 1,
				reason: 3,
				frameId: "a1b2c3d4-e5f6-47a8-9abc-def012345678"
			}
		}
	]
};

export default captureExample;

