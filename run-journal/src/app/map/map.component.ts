import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapService } from "../service/map.service";
import { IActivity } from "../shared/activity.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private mapService:MapService ) { }

  activity : any;
  activityName : string;
  activityComment : string;
  activityDate : Date;
  activityDistance : number;
  gpx: any;

  ngOnInit() {
    this.activity = this.mapService.getActivity(
      +this.activatedRoute.snapshot.params['id']
    )
  }

  ngAfterViewInit(){
   this.mapService.plotActivity(+this.activatedRoute.snapshot.params['id']);
   this.activityName = this.activity.name;
   this.activityComment = this.activity.comment;
   this.activityDistance = this.activity.distance;
   this.activityDate = this.activity.date;
   this.gpx = this.activity.gpxData;
 }

}
