import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { apiBaseUrl } from "../constants";
import { NotificationService } from "../services/notification/notification.service";
import { RestApiService } from "../services/rest-api.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  today = new Date().toISOString().slice(0, 10);
  taskForm: any = FormGroup;
  submitted: boolean = false;
  loader: boolean = false;
  items = [
    { name: "James", id: "James" },
    { name: "Robert", id: "Robert" },
    { name: "John", id: "John" },
  ];
  items1 = [
    { name: "Pending", id: 1 },
    { name: "Active", id: 2 },
    { name: "Inactive", id: 3 },
    { name: "Rejected", id: 4 },
  ];
  items2 = [
    { name: "James", id: "James" },
    { name: "Robert", id: "Robert" },
    { name: "John", id: "John" },
  ];
  items3 = [
    { name: "Task 1", id: "Task 1" },
    { name: "Task 2", id: "Task 2" },
    { name: "Task 3", id: "Task 3" },
  ];
  items4 = [
    { name: "Important", id: "Important" },
    { name: "Not Important", id: "Not Important" },
  ];

  constructor(
    private restApi: RestApiService,
    private notifyService: NotificationService
  ) {}
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      due_date: new FormControl(null, [Validators.required]),
      created_by: new FormControl(null, [Validators.required]),
      client: new FormControl(null, [Validators.required]),
      project: new FormControl(null, [Validators.required]),
      task: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      assignee: new FormControl(null, [Validators.required]),
      task_type: new FormControl(null, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
      notes: new FormControl(null, [Validators.required]),
      email_notes: new FormControl(null, [Validators.required]),
      project_date_filter: new FormControl(false, []),
      is_send_email: new FormControl(false, []),
    });
  }
  formSubmit() {
    this.submitted = true;
    try {
      if (this.taskForm.valid) {
        this.loader = true;
        const url = `${apiBaseUrl}/task/add`;
        const values = {
          ...this.taskForm.value,
          is_send_email: this.taskForm.value.is_send_email ? 1 : 0,
          project_date_filter: this.taskForm.value.project_date_filter ? 1 : 0,
        };
        this.restApi.postApi(url, values).subscribe((response: any) => {
          if (response && response?.code === 201) {
            this.notifyService.showSuccess("Success", response?.message);
            this.taskForm.reset();
            this.submitted = false;
          } else {
            this.notifyService.showError("Error", response?.message);
          }
          this.loader = false;
        });
      }
    } catch (error) {
      this.notifyService.showError("Error", "Something is wrong");
    }
  }

  get f() {
    return this.taskForm.controls;
  }
}
