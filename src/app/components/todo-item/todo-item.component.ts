import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-todo-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-item.component.html",
  styleUrl: "./todo-item.component.scss",
})
export class TodoItemComponent {}
