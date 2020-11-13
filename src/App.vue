<template>
  <div id="app">
    <div class="flex" v-show="loaded">
      <DataTable :data="this.turbineData" />
      <Information :data="this.groupedData" :codes="this.problemCodes" :loaded="loaded"/>
      <Inspector />
    </div>
    <div v-show="!loaded">
      <Loader />
    </div>
  </div>
</template>

<script>
import DataTable from "./components/DataTable";
import Information from "./components/Information";
import Inspector from "./components/Inspector";
import Loader from "./components/Loader";

import { groupData } from "./utilities";

import "./sass/app.scss";

export default {
  name: "App",
  components: {
    DataTable,
    Information,
    Inspector,
    Loader,
  },
  data() {
    return {
      turbineData: [],
      problemCodes: [],
      groupedData: {},
      loaded: false,
    };
  },
  async mounted() {
    try {
      await this.getCodes();
      await this.getData();
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async getCodes() {
      const response = await fetch(
        "http://cyberhawkserver-env.eba-utqftrrm.eu-west-2.elasticbeanstalk.com/turbine-codes"
      );
      const codes = await response.json();
      this.problemCodes = Object.values(codes);
    },
    async getData() {
      const response = await fetch(
        "http://cyberhawkserver-env.eba-utqftrrm.eu-west-2.elasticbeanstalk.com/turbine-data"
      );
      this.turbineData = await response.json();
      this.groupedData = groupData(this.problemCodes, this.turbineData);
    },
  },
};
</script>

<style>
.flex {
  display: flex;
}
</style>
