// noinspection ES6MissingAwait,JSUnresolvedReference

import { html, fixture, expect } from '@open-wc/testing';
import '../index.js';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import { clickCenter } from './test.utilities.js';

describe('ColorPicker', () => {

  it('root and all inputs pass the a11y audit', async () => {

    const cp = await fixture(html`
      <color-picker></color-picker>
    `);
    const inputs = Array.from(await cp.shadowRoot.querySelectorAll('color-input-channel'))
      .map(e => e.shadowRoot.querySelector('input'));
    inputs.push(cp.shadowRoot.querySelector('input#hex'));

    await expect(cp).shadowDom.to.be.accessible();
    // todo: understand the Axe is already running error
    // the console warnings only appear on this test. wth
    inputs.forEach(async (input) => {
      await expect(input).to.be.accessible();
    });

  });
  it('should have 7 buttons that pass the a11y audit', async () => {
    const cp = await fixture(html`
      <color-picker value=blue></color-picker>
    `);
    const buttons = Array.from(await cp.shadowRoot.querySelectorAll('.button'));
    await expect(buttons.length).to.be.eq(7);
    //2 mode toggle, 1 clipboard dialog toggle, 3 clipboard format, 1 ok
    buttons.forEach(async (btn) => {
      await expect(btn).to.be.accessible();
    });
  });
  it('should change to hsv when clicked', async () => {
    const cp = await fixture(html`
      <color-picker value=yellow></color-picker>
    `);
    const hsvButton = Array.from(await cp.shadowRoot.querySelectorAll('.hsl-mode .button'))[0];
    //test hsl mode before user click
    await expect(cp.isHsl).to.be.eq(true);
    await expect(hsvButton.classList.contains('active')).to.be.eq(false);
    await clickCenter(hsvButton);
    //test hsl mode after user click
    await expect(cp.isHsl).to.be.eq(false);
    await expect(hsvButton.classList.contains('active')).to.be.eq(true);
  });

  it('should accept an rgba string value and expose proper channel data', async () => {
    const cp = await fixture(html`
      <color-picker value='rgba(250 128 114 / 0.65)'></color-picker>
    `);
    // grab parsed color from color prop
    const {r, g, b, a, hsl, hsv} = cp.color;
    // test rgba values
    expect(r).to.be.eq(250);
    expect(g).to.be.eq(128);
    expect(b).to.be.eq(114);
    expect(a).to.be.eq(0.65);

    // test hsl values
    expect(hsl.h).to.be.eq(6);
    expect(hsl.s).to.be.eq(93);
    expect(hsl.l).to.be.eq(71);

    // test hsv values
    expect(hsv.h).to.be.eq(6);
    expect(hsv.s).to.be.eq(54);
    expect(hsv.v).to.be.eq(98);
  });

  it('should have 7 child channel input elements in correct order', async () => {
    const cp = await fixture(html`
      <color-picker value='rgba(250 128 114 / 0.65)'></color-picker>
    `);
    const expectedChannels = ['r', 'g', 'b', 'a', 'h', 's', 'l'];
    const channels = Array.from(cp.shadowRoot.querySelectorAll('color-input-channel'));
    channels.forEach(async (c, i) => {
      await expect(c.getAttribute('channel')).to.be.eq(expectedChannels[i]);
    });
  });
  it('should render a clickable hue slider', async () => {
    const cp = await fixture(html`
      <color-picker value='steelblue'></color-picker>
    `);

    const hueBar = cp.shadowRoot.querySelector('hue-bar');
    const {width} = hueBar.getBoundingClientRect();

    await expect(hueBar).to.be.accessible();
    const computedHue = (offsetX) => {
      let ratio = 360 / width;
      return Math.max(0, Math.min(359, Math.round(offsetX * ratio)));
    };
    // spoof mouse events
    for (let offsetX = 1; offsetX < width; offsetX += 7) {
      hueBar.selectHue({ offsetX });
      let actualHue = cp.color.hsl.h;
      let expectedHue = computedHue(offsetX);
      await expect(actualHue).to.be.eq(expectedHue);
    }
  });


  it('should update rgb channels when hsl mutations occur', async () => {
    const cp = await fixture(html`
      <color-picker value='red'></color-picker>
    `);
    const [r, g, b, _, h] = Array.from(cp.shadowRoot.querySelectorAll('color-input-channel'));

    //check initial root channel values
    const inputEl = c => c.shadowRoot.querySelector('input');
    await expect(cp.color.r).to.be.eq(Number(inputEl(r).value));
    await expect(cp.color.g).to.be.eq(Number(inputEl(g).value));
    await expect(cp.color.b).to.be.eq(Number(inputEl(b).value));

    //180deg hue change
    inputEl(h).value = 180;
    h.valueChange();

    //check for appropriate new rgb vals
    await expect(cp.color.r).to.be.eq(0);
    await expect(cp.color.g).to.be.eq(255);
    await expect(cp.color.b).to.be.eq(255);

  });
  it('should parse valid color strings pasted into the hex textbox', async () => {
    const cp = await fixture(html`
      <color-picker value='red'></color-picker>
    `);
    const hex = cp.shadowRoot.querySelector('#hex');
    clickCenter(hex);
    hex.focus();
    // select all manually
    await sendKeys({
      down: 'Control'
    });
    await sendKeys({
      press: 'KeyA'
    });
    await sendKeys({
      up: 'Control'
    });
    // type a namedColor
    await sendKeys({ type: 'salmon' });
    //fire blur
    await sendMouse({type: 'click', position: [0, 0]});
    await expect(cp.color.hex).to.be.eq('#FA8072');
  });
  it('should toggle copy dialog with correct values when copy button pressed', async () => {
    const cp = await fixture(html`
      <color-picker value='green'></color-picker>
    `);
    let dialogActions = () => ['Hex', 'Rgb', 'Hsl'].map(s => cp.shadowRoot.getElementById(`copy${s}`));
    let expectedValues = ['#008000', 'rgba(0,128,0,1)', 'hsl(120, 100%, 25%)'];
    const visibleAndValid = () => dialogActions().every((a, i) => {
      let v = a.querySelector('input').value;
      const valid = v === expectedValues[i];
      return a.offsetParent !== null && valid;
    });
    const hidden = () => dialogActions().every(a => a.offsetParent === null);
    await expect(hidden()).to.be.eq(true);
    const copyButton = cp.shadowRoot.querySelector('.button.copy');
    await clickCenter(copyButton);
    await expect(visibleAndValid()).to.be.eq(true);
  });

  it('should have a hsl-canvas element that responds to clicks', async () => {
    const cp = await fixture(html`
      <color-picker value='#532579'></color-picker>
    `);
    const hslc = cp.shadowRoot.querySelector('hsl-canvas');
    await expect(hslc).shadowDom.to.be.accessible();
    const canvas = hslc.shadowRoot.querySelector('canvas');
    const { offsetHeight, offsetWidth } = canvas;
    await clickCenter(canvas);

    //ensure movable circle properly repositioned
    const me = hslc.shadowRoot.querySelector('lit-movable');
    expect(me.offsetLeft).to.be.eq(offsetWidth / 2);
    expect(me.offsetTop).to.be.eq(offsetHeight / 2);

    const { s, l } = cp.color.hsl;
    // parent saturation and luminosity channels should be at 50
    expect(s).to.be.eq(50);
    expect(l).to.be.eq(50);

  });
});
