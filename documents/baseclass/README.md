# BaseClass

---------------------------------------------------------------
## API Reference
---------------------------------------------------------------

## new BaseClass()

<table>
<tr>
  <th>Params</th>
  <th>Type</th>
  <th>Details</th>
</tr>
</table>

------------------------------------------------------------------------


## Instance method

  - ### addEventListener(eventName)

    Adds an event listener.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>eventName</td>
      <td>string</td>
      <td>event name</td>
    </tr>
    </table>

    :arrow_right: `Observable<any>`


  - ### addEventListenerOnce(eventName)

    Adds an event listener that works once.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>eventName</td>
      <td>string</td>
      <td>event name</td>
    </tr>
    </table>

    :arrow_right: `Promise<any>`

  - ### on(eventName)

    The same as `addEventListener`.

  - ### one(eventName)

    The same as `addEventListenerOnce`.


  - ### get(key)

    Gets a value

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>key</td>
      <td>string</td>
      <td>key name</td>
    </tr>
    </table>

    :arrow_right: `any`



  - ### set(key, value, noNotify?)

    Sets a value with key

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>key</td>
      <td>string</td>
      <td>The key name for the value. `(key)_changed` will be fired when you set value through this method.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>any</td>
      <td>any value</td>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional) True if you want to prevent firing the `(key)_changed` event.</td>
    </tr>
    </table>


  - ### bindTo(key, target, targetKey?, noNotify?)

    Bind a key to another object

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>key</td>
      <td>string</td>
      <td>The property name you want to observe.</td>
    </tr>
    <tr>
      <td>target</td>
      <td>BaseClass</td>
      <td>The target object you want to observe.</td>
    </tr>
    <tr>
      <td>targetKey</td>
      <td>string</td>
      <td>(optional)The property name you want to observe. If you omit this, the `key` argument is used.</td>
    </tr>
    <tr>
      <td>noNotify</td>
      <td>boolean</td>
      <td>(optional) True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.</td>
    </tr>
    </table>

  - ### empty()

    Clears all stored values

  - ### destroy()

    Executes `off()` and `empty()`


  - ### removeEventListener(eventName?, listener?)

    Remove event listener(s)<br>
    The `removeEventListener()` has three usages:<br>
    - removeEventListener("eventName", listenerFunction);
      This removes one particular event listener
    - removeEventListener("eventName");
      This removes the event listeners that added for the event name.
    - removeEventListener();
      This removes all listeners.

    <table>
    <tr>
      <th>Params</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>eventName</td>
      <td>string</td>
      <td>(optional)event name</td>
    </tr>
    <tr>
      <td>listener</td>
      <td>function</td>
      <td>(optional)Event listener</td>
    </tr>
    </table>


  - ### off(eventName?, listener?)

    The same as `removeEventListener`.
