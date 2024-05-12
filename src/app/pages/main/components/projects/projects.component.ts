import { Component } from '@angular/core';
import { Project } from './projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectsList: Project[] = [
    {
      imgUrl: 'assets/projects/spring_security_project.png',
      name: 'Serviço de controle e autenticação de usuarios, com Java language, Spring Security, JWT, Angular 17, PostgreSQL ',
      hrefUrl: 'https://vinimarcaltech.github.io/springsecurity_project/'
    },
    {
      imgUrl:'assets/projects/construcao.gif' ,
      name: '',
      hrefUrl: ''
    }


  ];


}
