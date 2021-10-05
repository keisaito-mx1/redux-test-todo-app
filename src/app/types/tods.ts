import { Entity } from "./entity";

export interface TodoEntitiy extends Entity {
  completed: boolean;
  text: string;
}

export type Todo = Omit<TodoEntitiy, keyof Entity>;
