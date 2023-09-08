import { Class } from "src/class/class";

export interface Student {
  id: string;
  name: string;
  key: string;
  email: string;
  classes: Class[];
  created_At: Date;
  update_At: Date;
}
