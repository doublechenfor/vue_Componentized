<template>
  <div>
    <headernav />
    <headersearch />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import headernav from "cs-com-csheaderbox-nav";
import headersearch from "cs-com-csheaderbox-search";
export default Vue.extend({
  name: "headerBox",
  components: {
    headernav,
    headersearch
  },
  mounted() {}
});
</script>