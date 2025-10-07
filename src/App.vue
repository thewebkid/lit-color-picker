<!--suppress VueMissingComponentImportInspection -->
<template xmlns="http://www.w3.org/1999/html">
  <BContainer fluid class="py-4">
    <BRow>
      <BCol>
        <b-dropdown no-caret>
          <template #button-content>
            <div class="d-flex me-4">

              <div>{{ theme.name }}</div>
              <span>...</span>
            </div>
          </template>
          <b-dropdown-item
            v-for="(name,i) in Object.keys(slideThemes)" :key="`theme${i}`"
            @click="swapTheme(name)"
          >{{name}}</b-dropdown-item>
        </b-dropdown>
        <b-dropdown no-caret>
          <template #button-content>
            <div class="d-flex me-4">
              <span v-if="renderColors" class="swatch mt-1 me-2" :style="{backgroundColor: scheme[targetKey].css}"></span>
              <div>{{ targetKey }}</div>
              <span>...</span>
            </div>
          </template>
          <b-dropdown-item v-for="key in allKeys" :key="key" @click="changeTarget(key)">
            <div class="d-flex">
              <span class="swatch mt-1 me-2" :style="{backgroundColor: scheme[key].css}"></span>
              <div>{{ key }}</div>
            </div>
          </b-dropdown-item>
        </b-dropdown>
        <color-picker
          v-if="showPicker"
          ref="colorPicker" :value="scheme[targetKey].hex"
          @colorchanged="onColorUpdated"
        />

        <table v-if="renderColors">
          <thead>
          <tr>
            <th>variants</th>
            <th v-for="(key, i) in allKeys" :key="`v-${i}`" class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[key].css}"></span>
              {{ key }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="n in 8" :key="`p${n}`">
            <td style="text-align: right">{{ n }}</td>
            <td class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[`primary${n}`].css}"></span>

            </td>
            <td class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[`secondary${n}`].css}"></span>

            </td>

          </tr>
          </tbody>
        </table>

      </BCol>
      <BCol v-if="renderColors">
        <div style="transform: scale(.75);position: relative;left:-200px;top:-300px">
          <div class="slide" :style="theme.slideRoot">
            <div class="heading" :style="theme.headingBox">
              <div class="headingText">headingBox</div>
            </div>
            <div class="d-flex w-100 slide-content">
              <div class="w-50 p-5">
                <div class="content-box accentBox" :style="theme.accentBox">
                  <div class="heading accentBoxHeading" :style="theme.accentBox.heading">AccentBoxHeading</div>
                  <div class="accentBoxContent">
                    <ul>
                      <li>Content 1</li>
                      <li>Content 2</li>
                      <li>Content 3</li>
                    </ul>
                    <div class="separator" :style="theme.separator"></div>
                  <ul>
                    <li>Content 1</li>
                    <li>Content 2</li>
                    <li>Content 3</li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="w-50 p-5">
                <div class="content-box accentBox2" :style="theme.accentBox2">
                  <div class="heading accentBoxHeading" :style="theme.accentBox2.heading">AccentBox2Heading</div>
                  <div class="accentBoxContent">
                    <ul>
                      <li>Content 1</li>
                      <li>Content 2</li>
                      <li>Content 3</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="slide brand-slide" :style="theme.brandSlide">
            <div class="heading">Heading</div>

          </div>
          <div class="slide d-flex" :style="theme.slideRoot">
            <div class="w-50 p-5" :style="theme.brandBox">
              <div class="heading">Panel Text</div>
              <div style="position:absolute;top:222px">I am content</div>
            </div>
            <div class="w-50 p-5">
              <div class="content-box">
                <ul>
                  <li>Content 1</li>
                  <li>Content 2</li>
                  <li>Content 3</li>
                </ul>
                <div class="separator" :style="theme.separator"></div>
                <ul>
                  <li>Content 1</li>
                  <li>Content 2</li>
                  <li>Content 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
import { slideThemes } from './lib/slideTheme.js';
import { BDropdownItem, BFormCheckbox, BFormInput, BRow, BTable, BThead } from 'bootstrap-vue-next';


export default {
  name: 'App',
  components: { BDropdownItem, BFormCheckbox, BFormInput, BThead, BTable, BRow },
  data() {
    return {
      renderColors: true,
      showPicker: true,
      targetKey: 'primary',
      targetTheme: 'artera',
      allKeys: ['primary', 'secondary', 'slideBg', 'slideText'],
      primaryShades:[],
      secondaryShades:[]
    };
  },
  computed: { slideThemes() { return slideThemes} ,
    theme() {
      return slideThemes[this.targetTheme];
    },
    scheme() {
      return this.theme.scheme;
    },
    ordinalList() {
      return length => [...Array(length).keys()].map((_, i) => i);
    }

  },
  methods: {
    updateSatVal(i,j,value) {
      this.renderColors = false;

      this.$nextTick(()=> {
        const min = j === 2 ? -99 : 20;
        let v = Math.max(min, Math.min(100, parseInt(value)));
        this.satValAdjust[i][j] = v;
        this.scheme.updateVariantFormula(this.satValAdjust);
        this.renderColors = true;
      });
    },
    onColorUpdated(event) {
      const { color } = event.detail;
      console.log({ color,event });
      this.renderColors = false;

      if (this.targetKey === 'primary') {
        this.scheme.setPrimary(color);
      }else if (this.targetKey === 'secondary') {
        this.scheme.setSecondary(color);
      }else {
        this.scheme[this.targetKey] = color;
      }
      this.primaryShades = this.scheme.primary.getShades(10);
      const formats = ['rgb','hsl','hsv']
      //console.log(this.primaryShades.map(c=>
        //formats.map(f=>c.toString(f)).join(',')).join('\n'));
      this.secondaryShades = this.scheme.secondary.getShades(10);
      this.$nextTick(()=> this.renderColors = true);
    },
    changeTarget(key) {
      this.showPicker = false;
      this.targetKey = key;
      this.$nextTick(()=> this.showPicker = true);
    },
    swapTheme(theme) {
      this.renderColors = false;
      this.targetTheme = theme;
      this.$nextTick(()=> this.renderColors = true);
    }
  },
  mounted() {
    //console.log(slideThemes);
  },
  watch:{
    'scheme.usePct':{
      handler(v){
        this.renderColors = false;
        this.scheme.updateVariantFormula(this.satValAdjust);
        this.$nextTick(()=> this.renderColors = true);
      }
    }
  }

};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inter:300,400,500,700');
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700');
@import "./lib/slideboxmodel.scss";
.swatch {
  height: 14px;
  width: 14px;
  border-radius: 3px;
  display: inline-block;
  box-shadow: inset 0 0 1px #fff, 0 0 1px black;
}
input.form-control {
  display: inline-block;
  &[type="number"] {
    width: 60px;
  }
}
.slide {
  font-family: var(--fontFamily);
  div, ul, li, span, *{
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--textColor);
  }
  .heading {
    font-size: var(--headingFontSize);
    color: var(--headingColor);
    font-weight: var(--headingFontWeight);
    .headingText{
      position: relative;
      &:before{
        content: '';
        position: absolute;
        height: var(--headingLineHeight);
        width: 100%;
        left: 0;
        bottom: var(--headingLineOffY);
        background: var(--headingLine);
      }
    }
  }
  .separator{
    background-color: var(--separatorColor);
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--pseudoBg);
    //z-index: -1;
  }
  /*.accentBoxContent{
  }*/
  /*.brand-slide{
    .heading{

    }
  }*/
  height: 900px;
  width: 1400px;
  box-shadow: 0 0 10px black;
}
</style>
