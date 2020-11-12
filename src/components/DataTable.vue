<template>
  <div>
    <table>
        <tr>
        <th style="width: 150px">Turbine Number</th>
        <th class="txt-left">Message</th>
        </tr>
        <tr v-for="(message, i) in data" :key="i">
        <td class="txt-center">{{ i + 1 }}</td>
        <td :class="{ 'txt-danger': isNaN(message) }">{{ message }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
table {
    display: block;
    max-height: calc(100vh - 4em);
    overflow-y: scroll;
    max-width: 550px;
    margin-right: 30px;

}

th {
    background-color: var(--green);
    color: var(--black);
    padding: 4px 8px;
}

td {
    padding: 0 8px;
}

tr:hover {
    background-color: rgba(0, 255, 102, 0.3);
    transition: background 0.2s;
}
</style>