<template>
  <div id="inspector">
    <h2>Select a turbine to view status</h2>
    <select @change="handleChange">
      <option v-for="i in turbineIds" :key="i" :value="i">{{ i }}</option>
    </select>

    <p :class="{ 'txt-danger': fault }">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Inspector",
  data() {
    return {
      message: "",
      fault: false,
    };
  },
  computed: {
    turbineIds() {
      const arr = [...Array(101).keys()];
      arr.shift();
      return arr;
    },
  },
  async mounted() {
    this.inspectTurbine(1);
  },
  methods: {
    async handleChange(event) {
      const selected = event.target.options[event.target.selectedIndex].value;
      this.inspectTurbine(selected);
    },
    async inspectTurbine(idx) {
      try {
        const response = await fetch(
          "http://cyberhawkserver-env.eba-utqftrrm.eu-west-2.elasticbeanstalk.com/turbine-data/" +
            idx
        );
        const result = await response.json();
        if (result.status) {
          this.message = `Fault with turbine ${result.id}: ${result.status}`;
          this.fault = true;
        } else {
          this.fault = false;
          this.message = `Turbine ${result.id} is healthy`;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
#inspector {
  text-align: center;
  flex-grow: 1;
  flex-basis: 350px;
}

select {
  display: inline-block;
  font-size: 18px;
  border: none;
  outline: none;
  text-align: center;
}
</style>
