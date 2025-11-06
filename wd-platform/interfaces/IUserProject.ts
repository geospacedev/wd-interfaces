import { ProductType, UserProjectType } from "../enums/enums";
import { ICapture } from "./ICapture";

export interface IUserProject {
    id: string;
    userId: string; // owner. guid uuid for user
    projectId: string; // guid uuid for project
    type: UserProjectType;
} 