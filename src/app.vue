<template>
  <div>
    <!-- <h2>{{timeCutDown}}</h2> -->
    <layoutBox />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import layoutBox from "cs-com-cslayoutbox";

@Component<any>({
  components: {
    layoutBox
  }
})
export default class App extends Vue {
  timeCutDown: any = "";
  mounted() {
    console.log("haha", this);
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