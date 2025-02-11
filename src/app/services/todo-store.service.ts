import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class TodoStoreService {
  constructor() {}

  //use uuidv4() to generate a unique id for each todo item
  public addTodo() {}
}
