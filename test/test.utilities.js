import { sendMouse } from '@web/test-runner-commands';

export const clickCenter = async (element) => {
  let { top, left, height, width } = element.getBoundingClientRect();
  top += (height / 2);
  left += (width / 2);
  // click
  return await sendMouse({ type: 'click', position: [Math.round(left), Math.round(top)] });
};
