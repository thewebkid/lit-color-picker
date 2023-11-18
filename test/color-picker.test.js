import { html, fixture, expect } from '@open-wc/testing';
import '../color-picker.js';

describe('ColorPicker', ()=>{

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <color-picker></color-picker>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
})
