<template>
  <div class="wrapper">
      <div class="left-nav">
          
      </div>
      <div class="center-nav">
          <bodypanel/>
      </div>
      <div class="right-nav">

      </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import bodypanel from 'cs-com-csbodypanel'
export default Vue.extend({
  name: "bodyBox",
  components:{
      bodypanel,
  }
});
</script>
<style lang="scss" scoped>
.wrapper{
    width: 100%;
    min-width: 990px;
    height: 100%;
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-rows: 100%;
    .left-nav,.right-nav{
        height: 480px;
        background-color: #ffffff;
    }
    .center-nav{
        width: 100%;
        height: 100%;
    }
    .left-nav{
        padding-right: 10px;
    }
    .right-nav{
        padding-left: 10px;
    }
}
</style>