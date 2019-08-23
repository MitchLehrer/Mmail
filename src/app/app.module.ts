import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MobileHeaderComponent } from './core/mobile-header/mobile-header.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    DashboardComponent,
    MobileHeaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
