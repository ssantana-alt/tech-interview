import { Component } from "@angular/core";
import { TodosFilterComponent } from "./components/todos-filter/todos-filter.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, TodosFilterComponent, TodoItemComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "todo-app";
}
