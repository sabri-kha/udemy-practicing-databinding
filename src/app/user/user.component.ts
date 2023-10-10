// user component not necessary - i added it to keep practicing components
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName = '';

  allowResetUser(vUserName: string) {
    if (vUserName.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  resetUser() {
    this.userName = '';
  }
}
