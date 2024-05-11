import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { EmailBoxComponent } from '../../../../components/email-box/email-box.component';
import { HeaderComponent } from '../../../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EmailBoxComponent, LottieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/pc_animation.json',
  }

  window!: Window;

}
