# \<color-picker>
<img src="./demo/screenshot.png" width=600>

A weekend ramp up project to learn LIT basics. Maybe I can turn this into a shared npm if I can finish/polish (WCAG, best practices, etc.)

## Installation

```bash
npm i color-picker
```

## Usage

```html
<script type="module">
  import 'color-picker/color-picker.js';
</script>

<label>
  Pick a color
  <input type='color' value='#000000'/>
</label>
<color-picker value="steelblue"></color-picker>
<script>
  window.addEventListener('load', ()=>{
    const button = document.querySelector('input');
    const cp = document.querySelector('color-picker');
    cp.style.display = 'none';
    button.value = cp.color.hex;
    console.log({ cp })
    cp.addEventListener('preview', ({detail:{color}}) => {
      console.log({ picked: color, hex: color.hex, rgb: color.css });
      button.value = color.hex;
    });
    cp.addEventListener('picked', ({detail:{color}}) => {
      button.value = color.hex;
      cp.style.display = 'none';
    });
    button.addEventListener('click', (e)=>{
      e.stopImmediatePropagation();
      e.preventDefault();
      cp.style.display = 'block';
    })
  });
</script>
```

## Events
Fires a 'color-picked' event with a color object in the event detail 

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
