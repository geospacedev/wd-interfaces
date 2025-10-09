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
    walls: number[][]; // array of wall roots, each root is array of points [[x1, y1, x2, y2], [x3, y3, x4, y4], ...]
    perimeter: number[][]; // polygon of the floor [[x1, y1], [x1, y1], ...]
}