import { Component } from "@angular/core";
import { TodosFilterComponent } from "./components/todos-filter/todos-filter.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TodosFilterComponent,TodoItemComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "todo-app";
}
