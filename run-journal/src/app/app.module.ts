import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from "./service/activity.service";
import { MapService } from "./service/map.service";
import { appRoutes } from "../routes";

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActivityService,MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
