import {Component} from '@angular/core';
import {Artist} from './artist';

@Component({
  selector: 'artist-details',
  templateUrl: 'partials/artistdetails.html',
  inputs: ['artist'],
  styleUrls: ['css/app-details.css']
})

export class ArtistDetailsComponent{}
