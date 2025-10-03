<!--suppress VueMissingComponentImportInspection -->
<template xmlns="http://www.w3.org/1999/html">
  <BContainer fluid class="py-4">
    <BRow>
      <BCol>
        {{ scheme.name }}
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
          <tr v-for="(sv,i) in satValAdjust" :key="`p${i}`">
            <td style="text-align: right">{{ i + 1 }}</td>
            <td class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[`primary${i+1}`].css}"></span>

            </td>
            <td class="ps-3">
              <span class="swatch" :style="{backgroundColor: scheme[`secondary${i+1}`].css}"></span>

            </td>
            <td>Sat:
              <b-form-input
                v-if="scheme.usePct"
                type="number" :min="1" :max="100"
                size="sm" :modelValue="sv[2]"
                @input="updateSatVal(i,2, $event)"
              />
              <b-form-input
                v-else
                type="number" :min="1" :max="100"
                size="sm" :modelValue="sv[0]"
                @input="updateSatVal(i, 0, $event)"
              />
            </td>
            <td>Val:
              <b-form-input
                type="number" :min="1" :max="100"
                size="sm" :modelValue="sv[1]"
                @input="updateSatVal(i,1,$event)"
              />
            </td>
          </tr>
          </tbody>
        </table>
        <b-form-checkbox v-model="scheme.usePct">Use Sat Percent Adj instead of fixed</b-form-checkbox>
        <!--        <b-table-->
      </BCol>
      <BCol v-if="renderColors">
        <div style="transform: scale(.75);position: relative;left:-200px;top:-200px">
          <div class="slide" :style="theme.slideRoot">
            <div class="heading" :style="theme.headingBox">headingBox</div>
            <div class="d-flex w-100 slide-content">
              <div class="w-50 p-5">
                <div class="content-box accentBox" :style="theme.accentBox">
                  <div class="accentBoxHeading" :style="theme.accentBox.heading">AccentBoxHeading</div>
                  <div class="accentBoxContent">
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
                  <div class="accentBoxHeading" :style="theme.accentBox2.heading">AccentBox2Heading</div>
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
            <div class="heading" :style="theme.headingBoxBrand">Heading</div>
          </div>
          <div class="slide d-flex" :style="theme.slideRoot">
            <div class="w-50 p-5" :style="theme.brandBox">
              <div class="heading">Panel Text</div>
            </div>
            <div class="w-50 p-5">
              <div class="content-box">
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
import { BFormCheckbox, BFormInput, BRow, BTable, BThead } from 'bootstrap-vue-next';

export default {
  name: 'App',
  components: { BFormCheckbox, BFormInput, BThead, BTable, BRow },
  data() {
    return {
      renderColors: true,
      showPicker: true,
      targetKey: 'primary',
      targetTheme: 'becise',
      allKeys: ['primary', 'secondary', 'slideBg', 'slideText'],
      satValAdjust:[
        [40, 100, -30],
        [70, 100, -15],
        [100, 100, 0],
        [100, 70, 15],
        [100, 40, 30]
      ]
    };
  },
  computed: {
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
        let v = Math.max(20, Math.min(100, parseInt(value)));
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
      this.$nextTick(()=> this.renderColors = true);
    },
    changeTarget(key) {
      this.showPicker = false;
      this.targetKey = key;
      this.$nextTick(()=> this.showPicker = true);
    }
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
  margin: 10px;
  position: relative;
  *{
    font-size: inherit;
  }
  .heading {
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    padding: 4%;
    margin-bottom: 200px;
    //font-size: 80px;
  }
  .slide-content{
    position: relative;
    top:200px;
    .content-box{
      padding: 20px;
    }
  }
  .accentBoxContent{
    padding:20px 40px;
    height: 500px;
    width: 100%;
  }
  .brand-slide{
    .heading{

    }
  }
  height: 900px;
  width: 1400px;
  box-shadow: 0 0 10px black;
}
</style>
