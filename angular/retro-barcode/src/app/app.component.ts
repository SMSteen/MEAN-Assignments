import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  myColors = [
    '#2e5cb8', //blue
    '#666699', //purple
    '#808080', //gray
    '#c6538c', //pink
    '#ffe0b3', //orange
    '#006600', //green
    '#ff3333', //red
    '#b3d9ff', //lt blue
    '#ccccff', //lt purple
    '#00b386', //seafoam
    '#334d4d', //dk sage
    '#003366', //navy
    '#000000', //black
    '#ffff33', //yellow
    '#4d2600', //brown
    '#e6ffb3', //chartruese
    '#ffffff', //white
    '#660000', //brick
    '#0000ff', //electric blue
    '#ff0066', //fuschia
  ]
  myRandomColors = getColor(this.myColors);
}

//helper function to generate array of random colors from a master color list
function getColor(myColors) :string[] {
  let myRandomColors: string[] = [];
  for (let idx = 0; idx < 10; idx++){
    let color: string = myColors[(Math.floor(Math.random() * 19)) + 1]
    console.log(color)
    myRandomColors.push(color);
  }
  return myRandomColors;
}