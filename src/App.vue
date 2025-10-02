
<!--suppress VueMissingComponentImportInspection -->
<template xmlns="http://www.w3.org/1999/html">
  <BContainer fluid class="py-4">
    <BRow>
      <BCol>
        {{scheme.name}}
        <b-dropdown no-caret>
          <template #button-content>
            <div class="d-flex me-4">
              <span class="swatch mt-1 me-2" :style="{backgroundColor: scheme[targetKey].css}"></span>
              <div>{{targetKey}}</div>
              <span>...</span>
            </div>
          </template>
          <b-dropdown-item v-for="key in allKeys" :key="key" @click="targetKey=key">
            <div class="d-flex">
              <span class="swatch mt-1 me-2" :style="{backgroundColor: scheme[key].css}"></span>
              <div>{{key}}</div>
            </div>
          </b-dropdown-item>
        </b-dropdown>
        <color-picker
          ref="colorPicker" :value="selectedColor"
          @colorupdated="onColorUpdated"
          @colorpicked="onColorPicked"
        />

        <table>
          <thead>
          <tr>
            <th>variants</th>
            <th v-for="(key, i) in allKeys" :key="`v-${i}`" class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[key].css}"></span>
              {{key}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="i in ordinalList(5)" :key="`p${i}`">
            <td style="text-align: right">{{ i+1 }}</td>
            <td class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[`primary${i+1}`].css}"></span>

            </td>
            <td class="ps-3">
              <span  class="swatch" :style="{backgroundColor: scheme[`secondary${i+1}`].css}"></span>

            </td>
          </tr>
          </tbody>
        </table>
<!--        <b-table-->
      </BCol>
      <BCol>
        <div class="slide">
          <div class="heading">headingBox</div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
import {slideThemes} from './lib/slideTheme.js';
import { BRow, BTable, BThead } from 'bootstrap-vue-next';

export default {
  name: 'App',
  components: { BThead, BTable, BRow },
  data() {
    return {
      selectedColor: '#4682B4',
      showPicker: false,
      targetKey:'primary',
      targetTheme: 'becise',
      allKeys: ['primary', 'secondary', 'slideBg', 'slideText'],
      colorFields: [
        { key: 'format', label: 'Format' },
        { key: 'value', label: 'Value' }
      ]
    }
  },
  computed: {
    variantInfo(){
      return this.allKeys.slice(0,2).map(key => {
        let c = this.scheme[key];
        let { h } = c.hsv;
        return {
          [key]: c,
          [`${key}1`]:Color.parse({h,s:40,v:100}),
          [`${key}2`]:Color.parse({h,s:70,v:100}),
          [`${key}3`]:Color.parse({h,s:100,v:100}),
          [`${key}4`]:Color.parse({h,s:100,v:70}),
          [`${key}5`]:Color.parse({h,s:100,v:40})
        }
      })
    },
    theme(){
      return slideThemes[this.targetTheme];
    },
    scheme(){
      return this.theme.scheme;
    },
    ordinalList(){
      return length => [...Array(length).keys()].map((_, i) => i);
    }

  },
  methods: {
    onColorUpdated(event) {
      const { color } = event.detail
      this.colorObject = color
      this.selectedColor = color.hex
    },
    onColorPicked(event) {
      const { color } = event.detail
      this.colorObject = color
      this.selectedColor = color.hex
      this.showPicker = false
    },

  },

}
</script>

<style lang="scss">
.swatch{
  height:14px;
  width:14px;
  border-radius: 3px;
  display: inline-block;
  box-shadow: inset 0 0 1px #fff, 0 0 1px black;
}
.slide{
  .heading{
    position: absolute;
    top:5%;
    left:5%;
    font-size: 80px;
  }
  height:900px;
  width:1400px;
  box-shadow:  0 0 10px black;
}
</style>
