import { IActivity } from "./activity.model";

export const SAVED_ACTIVITIES : IActivity[] = [
  {
    'id':1,
    'name':'Biking Trail Of Life',
    'date': new Date('06/01/2017'),
    'distance': 6.2,
    'comment': 'Nice day to bubble',
    'gpxData': '../../assets/gpx/1.gpx'
  },
  {
    'id':2,
    'name':'Walk in the park',
    'date': new Date('06/05/2017'),
    'distance': 3.2,
    'comment': 'Quite windy but not bad',
    'gpxData': '../../assets/gpx/2.gpx'
  },
  {
    'id':3,
    'name':'Day out with the BOO',
    'date': new Date('06/25/2017'),
    'distance': 4.1,
    'comment': 'Obviously a nice day',
    'gpxData': '../../assets/gpx/3.gpx'
  },
  {
    'id':4,
    'name':'Bad day in Town',
    'date': new Date('06/29/2017'),
    'distance': 1.2,
    'comment': 'Was just a kind of frustrating day',
    'gpxData': '../../assets/gpx/4.gpx'
  }
]
