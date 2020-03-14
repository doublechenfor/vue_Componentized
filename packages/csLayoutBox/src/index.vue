<template>
  <div>
    <headerBox />
    <div class="layout-wrapper">
      <div class="layout-body">
        <bodyBox />
      </div>
    </div>   
  </div>
</template>
<script lang="ts">
import headerBox from "cs-com-csheaderbox";
import bodyBox from "cs-com-csbodybox";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { headerBox, bodyBox }
})
export default class Layout extends Vue {
  mounted() {}
}
</script>
<style lang="scss" scoped>
.layout-wrapper{
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  background-color: #F4F4F4;
  .layout-body {
    margin-top: 10px;
    width: 82.6%;
    height: 480px;
  }
}
</style>