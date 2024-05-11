import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionArrowDownOutline, ionBulbOutline, ionCallOutline, ionHomeOutline, ionRocketOutline, ionTerminalOutline } from "@ng-icons/ionicons";
import { ProjectHeader } from './projectHeader';

@Component({
  selector: 'project-header',
  standalone: true,
  imports: [
    RouterLink, 
    NgOptimizedImage, 
    NgIcon,
    NgClass,
    NgStyle
  ],
  providers: [provideIcons({ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline})],
  templateUrl: './projectHeader.component.html',
  styleUrl: './projectHeader.component.scss'
})
export class ProjectHeaderComponent implements OnInit{
  headerItens: ProjectHeader[] = [];
  
  scrolled: boolean = false;
  
  ngOnInit(): void {
    this.setMenuItens();
  }
  
  //Função que verifica scroll para aplicar stylo no header flutuante
  @HostListener('window:scroll', ['$event']) //adicionar [ngClass]="{'scrolled': scrolled}" na div principal para ativar
  onScroll = (event: Event) => {
    this.scrolled = window.scrollY > 100;    
  }
  
  setMenuItens = () => {

    this.headerItens = [
      {
        txt: 'Home',
        href: '#',
      },   
      {
        txt: 'Contato',
        href: '#footer',
      },
      {
        txt: 'Currículo',
        href: 'assets/Curriculo Marcos Vinicius.pdf',
        icon: 'ionArrowDownOutline',
        isButton: true
      }
    ];
  }
}
