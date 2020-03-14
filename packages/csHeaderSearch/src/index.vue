<template>
  <div class="wrapper">
    <div class="searchbox">
      <input />
      <svgIcon iconClass="camera-rear" />
    </div>
    <div class="searchbtn">
      <svgIcon iconClass="search" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import svgIcon from "cs-com-csicons-svg";

export default Vue.extend({
  name: "headersearch",
  components: {
    svgIcon
  }
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 38.1%;
  min-width: 490px;
  height: 32px;
  border: 2px solid #e1251b;
  display: grid;
  grid-template-columns: 88.02% 12%;
  grid-template-rows: 100%;
  justify-content: center;
  position: absolute;
  .searchbox {
    min-width: 350px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px 44px 2px 17px;
    input {
      width: 100%;
      height: 26px;
      border: none;
    }
    svg {
      position: absolute;
      right: 12.5px;
      width: 19px;
      height: 15px;
      color: #a6a6a7;
    }
  }
  .searchbtn {
    width: 100%;
    height: 32px;
    background-color: #e1251b;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #ffffff;
      stroke: #ffffff;
      width: 20px;
      height: 21px;
    }
  }
}
</style>