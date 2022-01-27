import { Component, OnInit } from '@angular/core';
import '@google/model-viewer';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor() { }

  camera_orbit = '45deg 55deg 2.5m';
  src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  ngOnInit() {
  }

}
