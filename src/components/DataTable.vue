<template>
  <div id="DataTable">
    <div class="data-configure">
      <label for="FilterHealthy">
        Only show turbines with health problems
        <input id="FilterHealthy" type="checkbox" v-model="hideHealthy" />
      </label>
    </div>
    <table>
      <tr>
        <th style="width: 150px">Turbine Number</th>
        <th class="txt-left">Message</th>
      </tr>
      <tr v-for="data in filteredTurbines" :key="data.id">
        <td class="txt-center">{{ data.id }}</td>
        <td :class="{ 'txt-danger': data.status !== '' }">
          {{ data.status || data.id }}
        </td>
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
  data() {
    return {
      hideHealthy: false,
    };
  },
  computed: {
    filteredTurbines() {
      if (this.hideHealthy) {
        return this.data.filter((turbine) => turbine.status);
      } else {
        return this.data;
      }
    },
  },
};
</script>

<style scoped>
#DataTable {
  flex-grow: 1;
}
table {
  display: block;
  max-height: calc(100vh - 8em);
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

.data-configure {
  margin-bottom: 1em;
  text-align: center;
}
</style>
