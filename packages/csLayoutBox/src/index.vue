<template>
  <div>
    <headerBox />
  </div>
</template>
<script lang="ts">
import headerBox from "cs-com-csheaderbox";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { headerBox }
})
export default class Layout extends Vue {
  mounted() {}
}
</script>