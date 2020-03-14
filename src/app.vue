<template>
  <div>
    <!-- <h2>{{timeCutDown}}</h2> -->
    <layoutBox />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import layoutBox from "cs-com-cslayoutbox";
import headerBox from "cs-com-csheaderbox";

@Component<any>({
  components: {
    layoutBox,
    headerBox
  }
})
export default class App extends Vue {
  timeCutDown: any = "";
  mounted() {
    // this['$comment'].show({ commentBoxStatus: true, stars: 5 });
    // setTimeout(() => {
    //   this['$comment'].hide();
    // }, 2000);
    // let DateInstance = new Date('2020/11/22 8:8:8');
    // this.timeCutDown = this['$cutDowmTime'].getCountDown(DateInstance);
    // console.log("this.time", this.timeCutDown);
    // setTimeout(() => {
    //   this['$cutDowmTime'].clearIntervalTime(**);
    // }, 3000);
  }
}
</script>
<style lang="scss">
html,body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; } 
body, button, input, select, textarea { font:14px} 
h1, h2, h3, h4, h5, h6{ font-size:100%; } 
address, cite, dfn, em, var { font-style:normal; } 
code, kbd, pre, samp { font-family:couriernew, courier, monospace; } 
small{ font-size:12px; } 
ul, ol { list-style:none; } 
a { text-decoration:none; } 
a:hover { text-decoration:underline; } 
sup { vertical-align:text-top; } 
sub{ vertical-align:text-bottom; } 
legend { color:#000; } 
fieldset, img { border:0; } 
button, input, select, textarea { font-size:100%; } 
table { border-collapse:collapse; border-spacing:0; } 
</style>