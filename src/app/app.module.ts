import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { RoutingModule }     from './routing/routing.module';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistService } from './artist/artist.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    GalleryComponent,
    TestimonialComponent,
    FooterComponent,
    HomeComponent,
    ArtistComponent,
    WelcomeComponent,
    ContactComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    NgxPageScrollCoreModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
