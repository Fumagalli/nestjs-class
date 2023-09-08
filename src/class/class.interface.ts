import { Lesson } from "src/lesson/lesson";

export interface Class {
    id: string;
    name: string;
    duration: number;
    lesson: Lesson[];
    createdAt: Date;
    updatedAt: Date;
}
