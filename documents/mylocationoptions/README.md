# MyLocationOptions interface

```typescript
let options: MyLocationOptions = {
  enableHighAccuracy: true
};

LocationService.getMyLocation(options).then((location: MyLocation) => {
  console.log(location);
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
  <td>enableHighAccuracy</td>
  <td>boolean</td>
  <td>Set true if you want to try to use GPS mandatory.<br>
In false, the plugin try to use GPS and network.<br>
(default: false)
</td>
</tr>
</table>
