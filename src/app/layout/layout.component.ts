import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      (function($) {
        "use strict";

        // Add active state to sidebar nav links
        const path = window.location.href;
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
          const link = this as HTMLAnchorElement;
          if (link.href === path) {
            $(this).addClass("active");
          }
        });

        // Toggle the side navigation
        $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
        });
      })(jQuery);
    }
  }
}