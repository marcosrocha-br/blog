import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './body/left-menu/left-menu.component';
import { HomeComponent } from './body/home/home.component';

import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
