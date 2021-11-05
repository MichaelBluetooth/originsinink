import { Component, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  isCollapsed: boolean = true;
  currentFragmentOrRoute: string = '';

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.router.events.subscribe((e) => {
      if (e['url'] && e['url'].indexOf('history') > -1) {
        this.currentFragmentOrRoute = 'history';
      }
    });

    this.route.fragment.subscribe((frag) => {
      if (frag) {
        this.currentFragmentOrRoute = frag;
        this.goTo(frag);
      }
    });
  }

  goTo(activeLink: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + activeLink,
    });
    this.isCollapsed = true;
  }

  isActive(name: string): boolean {
    return (
      name === this.currentFragmentOrRoute ||
      (name.toLowerCase() === 'home' && this.currentFragmentOrRoute === '')
    );
  }
}
