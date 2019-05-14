```html
<div class="whatever" id="beef">
  <h1 id="header">Hey</h1>
  <p></p>
</div>
```

```js
{
  type: "div",
  props: {className: "whatever", id: "beef"},
  children: [
    {
      type: "h1",
      props: {id: "header"}
      children: [
        "Hey"
      ]
    },
    {
      type: "p",
      props: {},
      children: []
    }
  ]
}
```