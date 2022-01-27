import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mecuris';
  camera_orbit = '45deg 55deg 2.5m';
  src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
}
