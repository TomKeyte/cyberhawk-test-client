<template>
  <div>
    <h1>Status</h1>
    <ul>
      <li v-for="(turbines, code) in data" :key="code">
        There are {{ turbines.length }} turbines with problem: {{ code }}
      </li>
    </ul>
    <p class="txt-danger">In total {{ count }} turbines have faults.</p>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    count() {
      return Object.values(this.data).reduce(
        (count, problem) => count + problem.length,
        0
      );
    },
  },
};
</script>

<style>
li {
  font-size: 24px;
}
</style>
