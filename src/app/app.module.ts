import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { VideoSecComponent } from './components/video-sec/video-sec.component';
import { PlansComponent } from './components/plans/plans.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomizeOneComponent } from './components/customize-one/customize-one.component';
import { CustomizeTwoComponent } from './components/customize-two/customize-two.component';
import { CustomizeThreeComponent } from './components/customize-three/customize-three.component';
import { CustomizeFourComponent } from './components/customize-four/customize-four.component';
import { CustomizeFiveComponent } from './components/customize-five/customize-five.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    VideoSecComponent,
    PlansComponent,
    ContactComponent,
    CustomizeOneComponent,
    CustomizeTwoComponent,
    CustomizeThreeComponent,
    CustomizeFourComponent,
    CustomizeFiveComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
