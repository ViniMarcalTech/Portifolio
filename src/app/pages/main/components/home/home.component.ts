import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { EmailBoxComponent } from '../../../../components/email-box/email-box.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

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
