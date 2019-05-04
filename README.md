# dynamic-form

 click-outside-react is an reactjs lightweight library, using to handle clicks outside `React` and `user` components

## Installation

The package can be installed via npm : 
`npm install --save click-outside-react`


## Configuration

**.** In order to use this component, you need to import `{ClickOutside}` in your js file, and then **wrap** the desired component :
```javascript
import { ClickOutside } from 'click-outside-react';
....

function ComponentUsingThis () {
    return (
        .....
        <ClickOutside outsideCall={()=> alert('click outside the red container')}>
            <div
                style={{ height: "500px", width: "500px", backgroundColor: "red" }}
                onClick={() => console.log("CLICKED CONTAINER RED")}
            />
      </ClickOutside>
    )
}

export default ComponentUsingThis;
```

**-** The `ClickOutside` will be removed, if you use **Inspect Element** tool, when inspecting your `HTML` code, you will notice that the html tag doesn't show up, because `ClickOutside` clone the child component, so none other component is added to the **DOM**.

**-** All you `props` and `style` goes on the child component of `ClickOutside`.

**-** Use `outsideCall` to pass reference to method you wanna excute when the user clicks outside your **wraped component**.


## Licence

[MIT](https://opensource.org/licenses/MIT)