import {css} from 'lit';
export const transparentChex = css`height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
      background-repeat: repeat, repeat;
      background-position: 0 0, 6px 6px;
      background-size: 12px 12px, 12px 12px;`

export const formControl = css`display: inline-block;
      width: 69px;
      padding: .325rem .5rem;
      font-size: .9rem;
      font-weight: 400;
      line-height: 1.5;
      color: #ccc;
      appearance: none;
      background-color: #020617;
      background-clip: padding-box;
      border: 1px solid #495057;
      border-radius: 3px;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;`
export const focusedFormControl = css`color: #333;
      background-color: rgb(148 163 184);
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 2px 5px #ccc;`
