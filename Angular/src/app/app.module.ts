import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { MainComponent } from './landing-page/main/main.component';
import { TabsComponent } from './landing-page/header/tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './landing-page/main/about/about.component';
import { StaffComponent } from './landing-page/main/staff/staff.component';
import { StaffImageComponent } from './landing-page/main/staff/staff-image/staff-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderTabsComponent } from './main-header/main-header-tabs/main-header-tabs.component';
import { NewsService } from './shared/services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TabsComponent,
    AboutComponent,
    StaffComponent,
    StaffImageComponent,
    AboutPageComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainHeaderTabsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
