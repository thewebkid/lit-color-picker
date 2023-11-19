// noinspection ES6MissingAwait

import { html, fixture, expect } from '@open-wc/testing';
import '../color-picker.js';

describe('ColorPicker', () => {

  it('passes the a11y audit', async () => {

    const el = await fixture(html`
      <color-picker></color-picker>
    `);

    await expect(el).shadowDom.to.be.accessible();

  });
  it('should accept an rgba string value and expose proper channel data', async () => {
    const cp = await fixture(html`
      <color-picker value='rgba(250 128 114 / 0.65)'></color-picker>
    `);
    // grab parsed color from value attrib
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
    //done();
  });
  it('should have 7 child channel input elements in correct order', async () => {
    const cp = await fixture(html`
      <color-picker value='rgba(250 128 114 / 0.65)'></color-picker>
    `);
    const expectedChannels = ['r', 'g', 'b', 'a', 'h', 's', 'l'];
    const channels = Array.from(cp.shadowRoot.querySelectorAll('color-input-channel'));
    channels.forEach((c, i) => {
      expect(c.getAttribute('channel')).to.be.eq(expectedChannels[i]);
    });
    //done();
  });
  it('should render a clickable hue slider', async () => {
    const cp = await fixture(html`
      <color-picker value='steelblue'></color-picker>
    `);

    const hueBar = cp.shadowRoot.querySelector('hue-bar');
    const {width} = hueBar.getBoundingClientRect();

    expect(hueBar).to.be.accessible();
    const computedHue = (offsetX) => {
      let ratio = 360 / width;
      return Math.max(0, Math.min(359, Math.round(offsetX * ratio)));
    };

    for (let offsetX = 1; offsetX < width; offsetX += 7) {
      hueBar.selectHue({ offsetX });
      let actualHue = cp.color.hsl.h;
      let expectedHue = computedHue(offsetX);
      expect(actualHue).to.be.eq(expectedHue);
    }
  });

  it('should update rgb channels when hsl mutations occur', async () => {
    const cp = await fixture(html`
      <color-picker value='red'></color-picker>
    `);
    const [r, g, b, _, h] = Array.from(cp.shadowRoot.querySelectorAll('color-input-channel'));

    //check initial root channel values
    const inputEl = c => c.shadowRoot.querySelector('input');
    expect(cp.color.r).to.be.eq(Number(inputEl(r).value));
    expect(cp.color.g).to.be.eq(Number(inputEl(g).value));
    expect(cp.color.b).to.be.eq(Number(inputEl(b).value));

    //180deg hue change
    inputEl(h).value = 180;
    h.valueChange();

    //check for appropriate new rgb vals
    expect(cp.color.r).to.be.eq(0);
    expect(cp.color.g).to.be.eq(255);
    expect(cp.color.b).to.be.eq(255);

  });
});
