# HtmlInfoWindow class


```typescript
let htmlInfoWindow = new HtmlInfoWindow();

let frame: HTMLElement = document.createElement('div');
frame.innerHTML = [
  '<h3>Hearst Castle</h3>',
  '<img src="assets/imgs/hearst_castle.jpg">'
].join("");
frame.getElementsByTagName("img")[0].addEventListener("click", () => {
  htmlInfoWindow.setBackgroundColor('red');
});
htmlInfoWindow.setContent(frame, {
  width: "280px",
  height: "330px"
});

htmlInfoWindow.open(marker);
```

---------------------------------------------------------------
## API Reference
---------------------------------------------------------------

## new HtmlInfoWindow()

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
</table>

---------------------------------------------------------------

## Instance method

  - ### setBackgroundColor(color)

    Changes the backgroundColor

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>color</td>
      <td>string</td>
      <td>Html color string</td>
    </tr>
    </table>


  - ### setContent(string | HTMLElement, cssOptions?)

    Set your HTML contents.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>content</td>
      <td>string | HTMLElement</td>
      <td>String containing text or HTML element</td>
    </tr>
    <tr>
      <td>cssOptions</td>
      <td>any</td>
      <td>(optional)CSS styles for the container element of HTMLInfoWindow</td>
    </tr>
    </table>


  - ### open(marker)

    Open the htmlInfoWindow

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>marker</td>
      <td><a href="../marker/README.md">Marker</a></td>
      <td>Marker instance</td>
    </tr>
    </table>

  - ### close()

    Close the htmlInfoWindow
