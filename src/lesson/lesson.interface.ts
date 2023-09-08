import { Class } from "src/class/class";
import { Content } from "src/content/content";

export interface Lesson {
  id: string;
  description: string;
  content: Content[];
  classe: Class;
  created_At: Date;
  update_At: Date;
}
