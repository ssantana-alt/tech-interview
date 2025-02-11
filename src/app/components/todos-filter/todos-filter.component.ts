import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-todos-filter",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./todos-filter.component.html",
  styleUrl: "./todos-filter.component.scss",
})
export class TodosFilterComponent {
  protected readonly filterForm = new FormGroup({
    filter: new FormControl<"all" | "done" | "pending">("all", {
      nonNullable: true,
    }),
  });
}
