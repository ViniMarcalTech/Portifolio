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
      imgUrl: 'assets/projects/projeto_spring_security/capa.png',
      name: 'Serviço de controle e autenticação de usuarios, com Java language, Spring Security, JWT, Angular 17, PostgreSQL ',
      hrefUrl: '/spring_security_project'
    },
    {
      imgUrl:'assets/projects/construcao.gif' ,
      name: '',
      hrefUrl: ''
    },
    /** 
    {
      imgUrl: 'assets/projects/projeto_03.png',
      name: 'Em desenvolvimento 03...',
      hrefUrl: ''
    },
    {
      imgUrl: 'assets/projects/projeto_04.png',
      name: 'Em desenvolvimento 04...',
      hrefUrl: ''
    },

*/


  ];


}
