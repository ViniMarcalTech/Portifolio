import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionMailOutline } from "@ng-icons/ionicons";
import { ClipboardModule } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-email-box',
  standalone: true,
  imports: [
    NgIconComponent, 
    NgClass, 
    ClipboardModule
  ],
  providers: [provideIcons({ionMailOutline})],
  templateUrl: './email-box.component.html',
  styleUrl: './email-box.component.scss'
})
export class EmailBoxComponent {

  copyTxtEnable: boolean = false;

  copyClicked: boolean = false;

  emailTxt = 'vinicius.dm1515@gmail.com'

  handleCopy = () => {
    this.copyClicked = true;    
    
    setTimeout(() => {
      this.copyClicked = false;    
    }, 1500)
  }
}
