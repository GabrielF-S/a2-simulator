import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
   standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
  
  @ViewChild('sidebarNav', { static: false }) sidebarNav!: ElementRef;
  @ViewChild('sidebarToggle', { static: false }) sidebarToggle!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const path = window.location.href;

    // Adiciona a classe "active" aos links correspondentes
    const navLinks = this.sidebarNav.nativeElement.querySelectorAll('.sb-sidenav a.nav-link');
    navLinks.forEach((link: HTMLAnchorElement) => {
      if (link.href === path) {
        this.renderer.addClass(link, 'active');
      }
    });

    // Adiciona o evento de clique para alternar o menu lateral
    this.renderer.listen(this.sidebarToggle.nativeElement, 'click', (event) => {
      event.preventDefault();
      this.renderer.addClass(document.body, 'sb-sidenav-toggled');
    });
  }
}