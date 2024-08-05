import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule],
  templateUrl: "./dialog.component.html",
})
export class DialogComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
