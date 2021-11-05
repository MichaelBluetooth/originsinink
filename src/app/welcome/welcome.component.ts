import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {}

  goTo(activeLink: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + activeLink,
    });
  }
}
