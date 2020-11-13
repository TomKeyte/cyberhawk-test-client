<template>
  <div class="grid">
    <Overview :data="this.data" />
    <Chart v-if="this.data !== {}" :data="this.data" :loaded="loaded"/>
  </div>
</template>

<script>
import Overview from "./Overview";
import Chart from "./Chart";

export default {
  name: "Information",
  components: {
    Overview,
    Chart,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    loaded: {
      type: Boolean,
    }
  },
};
</script>

<style scoped>
.grid {
  overflow-y: scroll;
  flex-basis: 700px;
}
</style>
