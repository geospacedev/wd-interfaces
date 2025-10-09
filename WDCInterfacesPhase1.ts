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
    walls: number[][]; // array of wall roots, each root is array of points [x1, y1, x2, y2]
    perimeter: number[]; // polygon of the floor
}