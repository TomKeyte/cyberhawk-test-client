<template>
  <div id="app">
    <DataTable :data="this.turbineData" />
  </div>
</template>

<script>
import DataTable from "./components/DataTable";
import "./sass/app.scss";

export default {
  name: "App",
  components: {
    DataTable,
  },
  data() {
    return {
      turbineData: null,
      loaded: false,
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        "http://cyberhawkserver-env.eba-utqftrrm.eu-west-2.elasticbeanstalk.com/turbine-data"
      );
      this.turbineData = await response.json();
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
#app {
  display: flex;
}
</style>
