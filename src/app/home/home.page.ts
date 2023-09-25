import { Component } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView(
      [-7.771366948593787, 110.37479351488611],
      10
    );
    /* Tile Basemap */
    var basemap1 = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="DIVSIG UGM" target="_blank">DIVSIG UGM</a>', //menambahkan nama//
      }
    );

    var basemap2 = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 17,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    var basemap3 = L.tileLayer(
      'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 20,
        attribution:
          'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      }
    );

    basemap2.addTo(this.map);

    var pinkIcon = L.icon({
      iconUrl: '../../assets/s3.png',
      // shadowUrl: '../../assets/marker.png',

      iconSize: [38, 40], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([-7.771366948593787, 110.37479351488611], {icon: pinkIcon,})
      .addTo(this.map)
      .bindPopup('this is my location.')
      .openPopup();
    
    var addMarker = {
      "My Location": marker
    }
    
    var baseMaps = {
      OpenStreetMap: basemap1,
      StadiaMap: basemap2,
      OpenTopoMap: basemap3,
    };

    L.control.layers(baseMaps, addMarker,{ collapsed: true }).addTo(this.map);
  }
}
