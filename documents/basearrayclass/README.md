# BaseArrayClass

```typescript
let mvcArray: BaseArrayClass<any> = new BaseArrayClass<any>();

mvcArray.on('insert_at', (index: number, element: any) => {
  console.log(`[insert: ${index}]`, index, element);
});

mvcArray.push({
  'title': "1",
  'position': { 'lat': ..., 'lng': ...},
  'dbId': "db_1"
});

mvcArray.push({
  'title': "2",
  'position': { 'lat': ..., 'lng': ...},
  'dbId': "db_2"
});

mvcArray.push({
  'title': "3",
  'position': { 'lat': ..., 'lng': ...},
  'dbId': "db_3"
});

```

---------------------------------------------------------------
## API Reference
---------------------------------------------------------------


  ## new BaseArrayClass<T>(initialData?)

  <table>
  <tr>
    <th>Params</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>initialData</td>
    <td>T[] | any</td>
    <td>(optional)initialData</td>
  </tr>
  </table>

  ------------------------------------------------------------------------


  ## Instance method

  - ### empty(noNotify?)

    Adds an event listener.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>Set true to prevent remove_at events.</td>
    </tr>
    </table>


  - ### forEach(fn)

    Iterate over each element, calling the provided callback.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function(element: T, index?: number) => void</td>
      <td>your code</td>
    </tr>
    </table>


  - ### forEachAsync(fn)

    Iterate over each element, calling the provided callback.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function(element: T, callback: () => void) => void</td>
      <td>your code</td>
    </tr>
    </table>

    :arrow_right: `Promise<void>`

  - ### map(fn)

    Iterate over each element, then Returns a new value.
    Then you can get the results of each callback.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function(element: T, index: number) => any)</td>
      <td>your code</td>
    </tr>
    </table>

    :arrow_right: `any[]`

  - ### mapAsync(fn)

    Iterate over each element, calling the provided callback.
    Then you can get the results of each callback.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function((element: T, callback: (newElement: any) => void) => void)</td>
      <td>your code</td>
    </tr>
    </table>

    :arrow_right: `Promise<any[]>`

  - ### mapSeries(fn)

    Same as `mapAsync`, but keep the execution order.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function((element: T, callback: (newElement: any) => void) => void)</td>
      <td>your code</td>
    </tr>
    </table>

    :arrow_right: `Promise<any[]>`


  - ### filter(fn)

    The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function(element: T, index: number) => boolean</td>
      <td>your code</td>
    </tr>
    </table>

    :arrow_right: `T[]`



  - ### filterAsync(fn)

    The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>fn</td>
      <td>Function(element: T, callback: (result: boolean) => void) => void</td>
      <td>your code</td>
    </tr>
    </table>

    :arrow_right: `Promise<T[]>`

  - ### getArray()

    Returns a reference to the underlying Array.

    :arrow_right: `T[]`

  - ### getAt(index)

    Returns the element at the specified index.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td>array index</td>
    </tr>
    </table>

    :arrow_right: `T`


  - ### getLength()

    Returns the number of the elements.

    :arrow_right: `number`


  - ### indexOf(element)

    The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>element</td>
      <td>T</td>
      <td>the element you want to search</td>
    </tr>
    </table>

    :arrow_right: `number`


  - ### reverse()

    The reverse() method reverses an array in place.


  - ### sort()

    The sort() method sorts the elements of an array in place and returns the array.


  - ### insertAt(index, element, noNotify?)

    Inserts an element at the specified index.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td>array index</td>
    </tr>
    <tr>
      <td>element</td>
      <td>T</td>
      <td>new element</td>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional)Set true to prevent insert_at event.</td>
    </tr>
    </table>


  - ### pop(noNotify?)

    Removes the last element of the array and returns that element.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional)Set true to prevent remove_at event.</td>
    </tr>
    </table>

    :arrow_right: `T`

  - ### push(element, noNotify?)

    Adds one element to the end of the array and returns the new length of the array.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>element</td>
      <td>T</td>
      <td>new element</td>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional)Set true to prevent remove_at event.</td>
    </tr>
    </table>

    :arrow_right: `T`

  - ### removeAt(index, noNotify?)

    Removes an element from the specified index.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td>array index</td>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional)Set true to prevent remove_at event.</td>
    </tr>
    </table>

    :arrow_right: `T`


  - ### setAt(index, element, noNotify?)

    Removes an element from the specified index.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td>array index</td>
    </tr>
    <tr>
      <td>element</td>
      <td>T</td>
      <td>new element</td>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional)Set true to prevent remove_at event.</td>
    </tr>
    </table>
