import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from './header';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline} from "@ng-icons/ionicons";

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
        // pdf: 'assets/curriculo_rafael_jardim.pdf',
        icon: 'ionArrowDownOutline',
        isButton: true
      }
    ];
  }
}
