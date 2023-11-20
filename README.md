# \<color-picker>  [![npm version](https://badge.fury.io/js/lit-colorpicker.svg)](https://badge.fury.io/js/lit-colorpicker) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<img src="https://thewebkid.com/lit-colorpicker.png" width=600>

A color-picker web component (built with Lit 3). This initial version is experimental. 

[Live Demo](http://thewebkid.com/modules/lit-colorpicker)

## Installation

```bash
npm i lit-colorpicker
```

## Usage

```html
<script type="module">
  import 'color-picker/color-picker.js';
  window.addEventListener('load', ()=>{
    const button = document.querySelector('input');
    const cp = document.querySelector('color-picker');
    cp.style.display = 'none';
    button.value = cp.color.hex;
    console.log({ cp })
    cp.addEventListener('colorupdated', ({detail: {color}}) => {
      console.log({ preview: color, hex: color.hex, rgb: color.css });
      button.value = color.hex;
    });
    cp.addEventListener('colorpicked', ({detail: {color}}) => {
      button.value = color.hex;
      cp.style.display = 'none';
    });
    button.addEventListener('click', (e)=>{
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
Fires a 'colorpicked' (when click OK) and 'colorupdated' (any mutation) event with a color object in the event detail. Standard CustomEvent implementation. 

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

## Local Dev Server  `vite`

```bash
npm dev
```

To run a local development server that serves the working example + theme-chooser located in `./index.html`



## Run Tests 
```bash
npm test
```



