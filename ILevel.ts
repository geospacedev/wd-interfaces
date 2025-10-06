export interface ILevel {
    id: string | undefined;
    name: string;
    elevation: number;
    captureWalls: ICaptureWall[];
    // walls: ILevelWalls | undefined;
    // objects: IObject[] | undefined;
}