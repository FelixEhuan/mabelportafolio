import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mabelportafolio';
  @ViewChild('buttonmenu') buttonmenu: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  menu_visible = false;
  // Secciones
  @ViewChild('header') header: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('design') design: ElementRef;
  @ViewChild('digital') digital: ElementRef;
  @ViewChild('contact') contact: ElementRef;
  // Listas
  @ViewChild('header_li') header_li: ElementRef;
  @ViewChild('about_li') about_li: ElementRef;
  @ViewChild('design_li') design_li: ElementRef;
  @ViewChild('digital_li') digital_li: ElementRef;
  @ViewChild('contact_li') contact_li: ElementRef;
  customOptions: any = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 25,
    animateIn: true,
    rewind: false,
    // stagePadding: 35
    // navSpeed: 700
    // nav:true
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      650: {
        items: 2
      },
      900: {
        items: 4
      }
    },
  };
  constructor(private renderer: Renderer2 ) {}
  ngOnInit(): void {
    const header = new Typed('.header__title-typed', {
      strings: ['Web', 'App', 'Branding', 'Colabora'],
      typeSpeed: 50,
      smartBackspace: true
    });
    // const design = new Typed('.design__title-item', {
    //   strings: ['BRANDING', 'DESIGN'],
    //   typeSpeed: 100,
    //   smartBackspace: true
    // });
  }

  scrollToElement($element, activeElement: string, preventClick?: boolean): void {
    if (preventClick === undefined) {
    }
    this.buttonmenu.nativeElement.click();
    // this.menu.nativeElement.click();
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.activesToogle(activeElement);
  }

    activesToogle( el: string) {
      switch (el) {
        case 'header':
          this.header_li.nativeElement.classList.add('active');
          this.about_li.nativeElement.classList.remove('active');
          this.design_li.nativeElement.classList.remove('active');
          this.digital_li.nativeElement.classList.remove('active');
          this.contact_li.nativeElement.classList.remove('active');
          break;
        case 'about':
          this.header_li.nativeElement.classList.remove('active');
          this.about_li.nativeElement.classList.add('active');
          this.design_li.nativeElement.classList.remove('active');
          this.digital_li.nativeElement.classList.remove('active');
          this.contact_li.nativeElement.classList.remove('active');
          break;
        case 'design':
          this.header_li.nativeElement.classList.remove('active');
          this.about_li.nativeElement.classList.remove('active');
          this.design_li.nativeElement.classList.add('active');
          this.digital_li.nativeElement.classList.remove('active');
          this.contact_li.nativeElement.classList.remove('active');
          break;
        case 'digital':
          this.header_li.nativeElement.classList.remove('active');
          this.about_li.nativeElement.classList.remove('active');
          this.design_li.nativeElement.classList.remove('active');
          this.digital_li.nativeElement.classList.add('active');
          this.contact_li.nativeElement.classList.remove('active');
          break;
          case 'contact':
          this.header_li.nativeElement.classList.remove('active');
          this.about_li.nativeElement.classList.remove('active');
          this.design_li.nativeElement.classList.remove('active');
          this.digital_li.nativeElement.classList.remove('active');
          this.contact_li.nativeElement.classList.add('active');
          break;
        default:
          this.header_li.nativeElement.classList.add('active');
          this.about_li.nativeElement.classList.remove('active');
          this.design_li.nativeElement.classList.remove('active');
          this.digital_li.nativeElement.classList.remove('active');
          this.contact_li.nativeElement.classList.remove('active');
          break;
      }
    }
  
    toggleMenu() {
      this.menu_visible = !this.menu_visible;
      if ( this.menu_visible) {
        this.buttonmenu.nativeElement.classList.add('is-active');
        this.menu.nativeElement.classList.add('is-active');
      } else {
        this.buttonmenu.nativeElement.classList.remove('is-active');
        this.menu.nativeElement.classList.remove('is-active');
      }
    }
    

}
