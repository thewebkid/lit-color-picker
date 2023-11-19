import { html, fixture, expect } from '@open-wc/testing';
import '../color-picker.js';

describe('ColorPicker', ()=>{

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <color-picker></color-picker>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
  it('should accept an rgba string value and expose proper channel data', async () => {
    const el = await fixture(html`
      <color-picker value='rgba(250 128 114 / 0.65)'></color-picker>
    `);
    // grab parsed color from value attrib
    const {r, g, b, a, hsl, hsv} = el.color;
    // test rgba values
    await expect(r).to.be.eq(250);
    await expect(g).to.be.eq(128);
    await expect(b).to.be.eq(114);
    await expect(a).to.be.eq(0.65);

    // test hsl values
    await expect(hsl.h).to.be.eq(6);
    await expect(hsl.s).to.be.eq(93);
    await expect(hsl.l).to.be.eq(71);

    // test hsv values
    await expect(hsv.h).to.be.eq(6);
    await expect(hsv.s).to.be.eq(54);
    await expect(hsv.v).to.be.eq(98);

  });
  it('should have 7 child channel input elements in correct order', async () => {
    const el = await fixture(html`
      <color-picker value='rgba(250 128 114 / 0.65)'></color-picker>
    `);
    const expectedChannels = ['r', 'g', 'b', 'a', 'h', 's', 'l'];
    const channels = Array.from(el.shadowRoot.querySelectorAll('color-input-channel'));
    channels.forEach((c,i) => {
      expect(c.getAttribute('channel')).to.be.eq(expectedChannels[i]);
    });

  });
});
