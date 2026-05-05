import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './shared/components/one/one.component';
import { TwoComponent } from './shared/components/two/two.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { MobileDashboardComponent } from './shared/components/mobile-dashboard/mobile-dashboard.component';
import { MobileCardComponent } from './shared/components/mobile-card/mobile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    PostDashboardComponent,
    PostCardComponent,
    MobileDashboardComponent,
    MobileCardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
