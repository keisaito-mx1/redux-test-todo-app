import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

import { nanoid } from "@reduxjs/toolkit";

import { db } from "../../firebase/db";
import { Todo, TodoEntitiy } from "../../types/tods";

export class TodoService {
  constructor() {}
  async postTodo(todo: Todo): Promise<TodoEntitiy> {
    const post: TodoEntitiy = {
      id: nanoid(7),
      text: todo.text,
      completed: todo.completed,
      updatedAt: Timestamp.now(),
      createdAt: Timestamp.now(),
    };

    await setDoc(doc(db, "todos", post.id), post);
    return post;
  }

  async getAll(): Promise<TodoEntitiy[]> {
    const col = collection(db, "todos");
    const snapShot = await getDocs(col);
    const todos = snapShot.docs.map((doc) => doc.data());
    return todos as TodoEntitiy[];
  }

  async updateTodo(todo: TodoEntitiy): Promise<TodoEntitiy> {
    const updated: TodoEntitiy = {
      ...todo,
      updatedAt: Timestamp.now(),
    };
    console.log(updated);
    await setDoc(doc(db, "todos", todo.id), updated, { merge: true });
    return updated;
  }

  async deleteTodo(id: string): Promise<void> {
    await deleteDoc(doc(db, "todos", id));
  }
}
