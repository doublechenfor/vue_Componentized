<template>
  <div>
    <headernav/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import headernav from 'cs-com-csheaderbox-nav'
export default Vue.extend({
  name: "headerBox",
  components:{
    headernav
  },
  mounted() {}
});
</script>