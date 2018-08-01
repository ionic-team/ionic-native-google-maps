# ToDataUrlOptions interface

```typescript
let options: ToDataUrlOptions = {
  uncompress: true
};

this.map.toDataURL(options).then((base64: string) => {
  console.log(base64);
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
  <td>uncompress</td>
  <td>boolean</td>
  <td>Sets true if you want to prevent resizing to the screen resolution.</td>
</tr>
</table>
