# MarkerLabel interface

```typescript
let labelOptions: MarkerLabel = {
  bold: true,
  fontSize: 15,
  color: "white",
  italic: true
};
let clusterIcons: MarkerClusterIcon[] = [
  {min: 2, max: 100, url: "./assets/blue.png", anchor: {x: 16, y: 16}, label: labelOptions},
  {min: 100, max: 1000, url: "./assets/yellow.png", anchor: {x: 16, y: 16}, label: labelOptions},
  {min: 1000, max: 2000, url: "./assets/purple.png", anchor: {x: 24, y: 24}, label: labelOptions},
  {min: 2000, url: "./assets/red.png",anchor: {x: 32,y: 32}, label: labelOptions}
];

let options: MarkerClusterOptions = {
  markers: dummyData(),
  icons: clusterIcons,
  boundsDraw: true,
  maxZoomLevel: 15
};

this.map.addMarkerCluster(options).then((markerCluster: MarkerCluster) => {

  ...

});
```

## Interface members

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
<tr>
  <td>markers</td>
  <td><a href="../markeroptions/README.md">MarkerOptions</a>[]</td>
  <td>Position list<br>
[<br>
&nbsp;&nbsp;{title: "store A", position: {lat: ..., lng: ...}},<br>
&nbsp;&nbsp;{title: "store B", position: {lat: ..., lng: ...}},<br>
&nbsp;&nbsp;{title: "store C", position: {lat: ..., lng: ...}}<br>
]
</td>
</tr>
<tr>
  <td>icons</td>
  <td><a href="../markerclustericon/README.md">MarkerClusterIcon</a>[]</td>
  <td>Conditions of clustering<br>
[<br>
&nbsp;&nbsp;{icon: "assets/small.png", min: 2, max: 10},<br>
&nbsp;&nbsp;{icon: "assets/middle.png", min: 11, max: 30},<br>
&nbsp;&nbsp;{icon: "assets/large.png", min: 31}<br>
]
</td>
</tr>
<tr>
  <td>boundsDraw</td>
  <td>boolean</td>
  <td>(optional)Draw a rectangle that contains all locations of clustered when you tap on a cluster marker.(default: true)</td>
</tr>
<tr>
  <td>maxZoomLevel</td>
  <td>boolean</td>
  <td>(optional)Maximum zoom level of clustering(default: 15, max: 18)</td>
</tr>
</table>
