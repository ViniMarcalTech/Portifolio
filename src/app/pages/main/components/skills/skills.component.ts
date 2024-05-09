import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { sgvIconAngular, sgvIconDocker, sgvIconGitHub, sgvIconIntellij, sgvIconPostgreSQL, sgvIconTypeScript, svgIconJava, svgIconSpringBoot } from './logos/personalLogos';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({
    svgIconJava,
    svgIconSpringBoot,
    sgvIconDocker,
    sgvIconPostgreSQL,
    sgvIconAngular,
    sgvIconTypeScript,
    sgvIconGitHub,
    sgvIconIntellij,


  })],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  cardSkillsList: {name: string, icon: string}[] = [
    {
      name: 'JAVA', 
      icon: 'svgIconJava',
    },
    {
      name: 'SpringBoot', 
      icon: 'svgIconSpringBoot',
    },
    {
      name: 'Docker', 
      icon: 'sgvIconDocker',
    },
    {
      name: 'PostgreSQL', 
      icon: 'sgvIconPostgreSQL',
    },
    {
      name: 'TypeScript', 
      icon: 'sgvIconTypeScript',
    },
    {
      name: 'Angular', 
      icon: 'sgvIconAngular',
    },
    {
      name: 'Gitub', 
      icon: 'sgvIconGitHub',
    },
    {
      name: 'Intellij', 
      icon: 'sgvIconIntellij',
    },
   
  ]
}
