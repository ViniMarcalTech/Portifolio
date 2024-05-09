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
      imgUrl: 'assets/projects/projeto_01.png',
      name: 'Um texto de um tamanho rasoavel explicando o basico do projeto 01.'
    },
    {
      imgUrl: 'assets/projects/projeto_02.png',
      name: 'Um texto de um tamanho rasoavel explicando o basico do projeto 02 contando caracteres aqui por exemplo foram exatamente 100 caracteres.'
    },
    {
      imgUrl: 'assets/projects/projeto_03.png',
      name: 'Em desenvolvimento 03...'
    },
    {
      imgUrl: 'assets/projects/projeto_04.png',
      name: 'Em desenvolvimento 04...'
    },


  ];


}
