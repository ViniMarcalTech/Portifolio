import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '../projectHeader/projectHeader.component';
import { FooterComponent } from '../../main/components/footer/footer.component';

@Component({
  selector: 'app-springsecurity-pr',
  standalone: true,
  imports: [ ProjectHeaderComponent, FooterComponent],
  templateUrl: './springsecurity-pr.component.html',
  styleUrl: './springsecurity-pr.component.scss'
})
export class SpringsecurityPrComponent {

}
