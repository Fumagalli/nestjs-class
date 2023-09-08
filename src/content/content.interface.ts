import { Lesson } from "src/lesson/lesson";

export interface Content {
    id: string;
    description: string;
    linkContent: string;
    lesson: Lesson;
    createdAt: Date;
    updatedAt: Date;
}
