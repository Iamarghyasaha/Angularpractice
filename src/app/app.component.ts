import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project1';
  name : string = "arghya";
  btncontrol: Boolean = true;
  buttonstat ="Button is disabled";
  btnc(){
    if(this.btncontrol){
      this.btncontrol=false// button is on
      console.log("Button enabled");
      this.buttonstat = "Button is enabled"
    }
    else{
      this.btncontrol=true;
      console.log("Button disabled");
      this.buttonstat = "Button is disabled"
    }
  }
}
