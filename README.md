# \<color-picker>  [![npm version](https://badge.fury.io/js/lit-colorpicker.svg)](https://badge.fury.io/js/lit-colorpicker) [![tests](https://img.shields.io/github/actions/workflow/status/thewebkid/lit-color-picker/test.yml?branch=master&label=tests)](https://github.com/thewebkid/lit-color-picker/actions/workflows/test.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<img src="https://thewebkid.com/lit-colorpicker.png?v=2" width=600>

A rich colorpicker web component. Enables deep visualization into all channels of a color.  

[Live Demo](http://thewebkid.com/modules/lit-colorpicker)

Since this is a [Lit 3 web component](https://lit.dev/), this will work inside any SPA framework. [React integration docs](https://lit.dev/docs/frameworks/react/). Framework-agnostic web components are the future!

## Installation

```bash
npm i lit-colorpicker lit lit-movable
```

`lit` and `lit-movable` are peer dependencies (same Lit instance as your app).

## Usage

```html
<script type="module">
  import 'lit-colorpicker';
  window.addEventListener('load', () => {
    const button = document.querySelector('input');
    const cp = document.querySelector('color-picker');
    cp.style.display = 'none';
    button.value = cp.color.hex;

    cp.addEventListener('color-change', ({ detail: { color, source } }) => {
      console.log({ preview: color, hex: color.hex, rgb: color.css, source });
      button.value = color.hex;
    });
    cp.addEventListener('color-pick', ({ detail: { color } }) => {
      button.value = color.hex;
      cp.style.display = 'none';
    });
    button.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      cp.style.display = 'block';
    });
  });
</script>

<label>
  Pick a color
  <input type='color' value='#000000'/>
</label>
<color-picker value="steelblue"></color-picker>
```

## Events

| Event | When | `detail` |
|-------|------|----------|
| `color-change` | Any live mutation (drag, channel, hex input, `value` / `color` set) | `{ color, space, source }` |
| `color-pick` | User clicks **OK** | `{ color, space, source }` |

`color` is a [`modern-color`](https://www.npmjs.com/package/modern-color) instance. `space` is `'hsl'` or `'hsv'`. `source` is one of `'canvas' | 'hue' | 'channel' | 'input' | 'external'`.

The `value` attribute is reflected (hex, or CSS color when alpha &lt; 1).

```js
import { ColorPicker, COLOR_CHANGE, COLOR_PICK } from 'lit-colorpicker';
```

## Theming
Set the following css variables to set a custom theme:
```css
color-picker {
  --font-fam: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue";
  --bg-color: rgb(30 41 59);
  --label-color: #ccc;
  --form-border-color: #495057;
  --input-active-border-color: #86b7fe;
  --input-bg: #020617;
  --input-active-bg: #4682B4;
  --input-color: #ccc;
  --input-active-color: #333;
  --input-active-box-shadow: 0 2px 5px #ccc;
  --button-active-bg: #0C5B9D;
  --button-active-color: white;
  --outer-box-shadow: 0 4px 12px #111;
}
```

Run the demo to use the dynamic theme picker.

## Run local
Recommended so you can use the theme chooser. Uses vite. Will run on node 16+ - but will complain about compatibility if you are stuck on node 16 like me. Ignore these. It's fine.
```bash
git clone https://github.com/thewebkid/lit-color-picker.git
cd cd ./lit-color-picker
npm i
npm dev
```

## Run Tests 
```bash
npm test
```



