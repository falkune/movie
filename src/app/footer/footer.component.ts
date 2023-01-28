import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  windowScrolled!: boolean;
  faArrowUp = faArrowUp;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener("window:scroll", [])

  onWindowScroll() {
    /**
     * this function put the windowScrolled value to true or false depend to the value of
     * window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop and windowScrolled
     */
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  ngOnInit(): void { }

}
