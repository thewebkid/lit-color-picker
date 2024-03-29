# \<color-picker>  [![npm version](https://badge.fury.io/js/lit-colorpicker.svg)](https://badge.fury.io/js/lit-colorpicker) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<img src="https://thewebkid.com/lit-colorpicker.png?v=2" width=600>

A rich colorpicker web component. Enables deep visualization into all channels of a color.  

[Live Demo](http://thewebkid.com/modules/lit-colorpicker)

Since this is a [Lit 3 web component](https://lit.dev/), this will work inside any SPA framework. [React integration docs](https://lit.dev/docs/frameworks/react/). Framework-agnostic web components are the future!

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



