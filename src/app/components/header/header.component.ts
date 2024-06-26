import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionArrowDownOutline, ionBulbOutline, ionCallOutline, ionHomeOutline, ionRocketOutline, ionTerminalOutline } from "@ng-icons/ionicons";
import { Header } from './header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    NgOptimizedImage, 
    NgIcon,
    NgClass,
    NgStyle
  ],
  providers: [provideIcons({ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline})],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  headerItens: Header[] = [];
  
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
        txt: 'Início',
        href: '#',
      },
      {
        txt: 'Sobre',
        href: '#about',
      },
      {
        txt: 'Habilidades',
        href: '#skills',
      },
      {
        txt: 'Projetos',
        href: '#projects',
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
