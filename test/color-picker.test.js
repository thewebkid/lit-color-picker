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
    const inputs = Array.from(cp.shadowRoot.querySelectorAll('color-input-channel')).map(
      (e) => e.shadowRoot.querySelector('input')
    );
    inputs.push(cp.shadowRoot.querySelector('input#hex'));

    await expect(cp).shadowDom.to.be.accessible();
    for (const input of inputs) {
      await expect(input).to.be.accessible();
    }
  });

  it('should have 7 buttons that pass the a11y audit', async () => {
    const cp = await fixture(html`
      <color-picker value=blue></color-picker>
    `);
    const buttons = Array.from(cp.shadowRoot.querySelectorAll('.button'));
    await expect(buttons.length).to.be.eq(7);
    // 2 mode toggle, 1 clipboard dialog toggle, 3 clipboard format, 1 ok
    for (const btn of buttons) {
      await expect(btn).to.be.accessible();
    }
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
    const dlg = cp.shadowRoot.querySelector('dialog');
    const dialogActions = () =>
      ['Hex', 'Rgb', 'Hsl'].map((s) => cp.shadowRoot.getElementById(`copy${s}`));
    const expectedValues = [
      cp.color.hex,
      cp.color.css,
      cp.color.toString('hsl'),
    ];
    const valuesMatch = () =>
      dialogActions().every((a, i) => a.querySelector('input').value === expectedValues[i]);

    await expect(dlg.open).to.be.eq(false);
    await clickCenter(cp.shadowRoot.querySelector('.button.copy'));
    await cp.updateComplete;

    await expect(dlg.open).to.be.eq(true);
    await expect(valuesMatch()).to.be.eq(true);
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
    await cp.updateComplete;
    await hslc.updateComplete;

    // posLeft/posTop are the sample point; offsetLeft is 8px less due to
    // the in-flow centering margin on <movable-el>.
    const me = hslc.shadowRoot.querySelector('movable-el');
    expect(Number(me.posLeft)).to.be.eq(offsetWidth / 2);
    expect(Number(me.posTop)).to.be.eq(offsetHeight / 2);

    const { s, l } = cp.color.hsl;
    expect(s).to.be.eq(50);
    expect(l).to.be.eq(50);
  });

  it('should fire color-change on channel edits and color-pick on OK', async () => {
    const cp = await fixture(html`
      <color-picker value='red'></color-picker>
    `);
    const changes = [];
    cp.addEventListener('color-change', (e) => changes.push(e.detail));
    let picked = null;
    cp.addEventListener('color-pick', (e) => {
      picked = e.detail;
    });

    const h = Array.from(cp.shadowRoot.querySelectorAll('color-input-channel'))[4];
    h.shadowRoot.querySelector('input').value = 180;
    h.valueChange();
    await cp.updateComplete;

    await expect(changes.length).to.be.greaterThan(0);
    await expect(changes.at(-1).source).to.be.eq('channel');
    await expect(changes.at(-1).color.hex).to.be.eq('#00FFFF');
    await expect(cp.value).to.be.eq('#00FFFF');
    await expect(cp.getAttribute('value')).to.be.eq('#00FFFF');

    cp.shadowRoot.querySelector('.ok .button').click();
    await expect(picked?.color.hex).to.be.eq('#00FFFF');
    await expect(picked?.source).to.be.eq('channel');
  });

  it('should keep Color free of hsx / fromHSLCanvas flags', async () => {
    const cp = await fixture(html`
      <color-picker value='#532579'></color-picker>
    `);
    const hslc = cp.shadowRoot.querySelector('hsl-canvas');
    await clickCenter(hslc.shadowRoot.querySelector('canvas'));
    await cp.updateComplete;

    expect(cp.color.hsx).to.be.eq(undefined);
    expect(cp.color.fromHSLCanvas).to.be.eq(undefined);
    expect(cp.model.hsx).to.be.ok;
    expect(cp.model.source).to.be.eq('canvas');
  });

  it('should keep the preview color after releasing a circle drag', async () => {
    const cp = await fixture(html`
      <color-picker value='rgb(250, 128, 113)'></color-picker>
    `);
    const hslc = cp.shadowRoot.querySelector('hsl-canvas');
    await hslc.updateComplete;
    await cp.updateComplete;

    const canvas = hslc.shadowRoot.querySelector('canvas');
    const me = hslc.shadowRoot.querySelector('movable-el');
    const cRect = canvas.getBoundingClientRect();
    const start = me.getBoundingClientRect();

    // Drag the knob toward the right edge, slightly down (high sat, lower L).
    const startX = Math.round(start.left + start.width / 2);
    const startY = Math.round(start.top + start.height / 2);
    const endX = Math.round(cRect.left + cRect.width - 4);
    const endY = Math.round(cRect.top + 40);

    await sendMouse({ type: 'move', position: [startX, startY] });
    await sendMouse({ type: 'down', position: [startX, startY] });
    await sendMouse({ type: 'move', position: [endX, endY] });
    await cp.updateComplete;

    const duringDrag = {
      r: cp.color.r,
      g: cp.color.g,
      b: cp.color.b,
      hex: cp.color.hex,
    };

    // pointerup synthesizes a click on the knob; pre-fix that click used
    // offsetX/Y relative to the 16px circle and snapped to near-white.
    await sendMouse({ type: 'up', position: [endX, endY] });
    await cp.updateComplete;
    await hslc.updateComplete;

    expect(cp.color.hex).to.be.eq(duringDrag.hex);
    expect(cp.color.r).to.be.eq(duringDrag.r);
    expect(cp.color.g).to.be.eq(duringDrag.g);
    expect(cp.color.b).to.be.eq(duringDrag.b);
    // Sanity: drag should have left a saturated (not near-white) color.
    expect(cp.color.r - cp.color.g).to.be.greaterThan(50);
  });

  it('should preserve hue when dragging to grayscale (s=0)', async () => {
    const cp = await fixture(html`
      <color-picker value='#232E86'></color-picker>
    `);
    const hslc = cp.shadowRoot.querySelector('hsl-canvas');
    await hslc.updateComplete;
    await cp.updateComplete;

    expect(cp.color.hsl.h).to.be.eq(233);

    const l = cp.color.hsl.l;
    const y = hslc.size - (l / 100) * hslc.size;
    hslc.pickCoord({ offsetX: 0, offsetY: y });
    await cp.updateComplete;

    expect(cp.value).to.not.include('NAN');
    expect(Number.isFinite(cp.color.r)).to.be.true;
    expect(Number.isFinite(cp.color.g)).to.be.true;
    expect(Number.isFinite(cp.color.b)).to.be.true;
    expect(cp.model.hsx.s).to.be.eq(0);
    expect(cp.model.hsx.h).to.be.eq(233);

    const hInput = [...cp.shadowRoot.querySelectorAll('color-input-channel')]
      .find((el) => el.channel === 'h')
      .shadowRoot.querySelector('input');
    expect(hInput.value).to.be.eq('233');
  });

  it('should ignore non-finite canvas coordinates (no #0ANANN poison)', async () => {
    const cp = await fixture(html`
      <color-picker value='#232E86'></color-picker>
    `);
    const hslc = cp.shadowRoot.querySelector('hsl-canvas');
    await hslc.updateComplete;
    const before = cp.color.hex;

    hslc.pickCoord({ offsetX: 0, offsetY: undefined });
    await cp.updateComplete;

    expect(cp.color.hex).to.be.eq(before);
    expect(cp.value).to.be.eq(before);
    expect(cp.value).to.not.include('NAN');
    expect(Number.isFinite(cp.color.g)).to.be.true;
  });

  it('should keep the circle clamped on-canvas when dragged past the edge', async () => {
    const cp = await fixture(html`
      <color-picker value='#232E86'></color-picker>
    `);
    const hslc = cp.shadowRoot.querySelector('hsl-canvas');
    await hslc.updateComplete;
    await cp.updateComplete;

    const canvas = hslc.shadowRoot.querySelector('canvas');
    const me = hslc.shadowRoot.querySelector('movable-el');
    const cRect = canvas.getBoundingClientRect();
    const start = me.getBoundingClientRect();
    const size = hslc.size;

    const startX = Math.round(start.left + start.width / 2);
    const startY = Math.round(start.top + start.height / 2);
    // Way past the left / top of the canvas (would reach the H/S fields if unclamped).
    const endX = Math.round(cRect.left - 120);
    const endY = Math.round(cRect.top - 80);

    await sendMouse({ type: 'move', position: [startX, startY] });
    await sendMouse({ type: 'down', position: [startX, startY] });
    await sendMouse({ type: 'move', position: [endX, endY] });
    await sendMouse({ type: 'up', position: [endX, endY] });
    await cp.updateComplete;
    await hslc.updateComplete;

    expect(Number(me.posLeft)).to.be.at.least(0);
    expect(Number(me.posLeft)).to.be.at.most(size);
    expect(Number(me.posTop)).to.be.at.least(0);
    expect(Number(me.posTop)).to.be.at.most(size);
    expect(cp.model.hsx.s).to.be.at.least(0);
    expect(cp.model.hsx.l).to.be.at.least(0);
    expect(cp.value).to.not.include('NAN');
  });
});
