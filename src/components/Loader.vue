<template>
  <div class="centered">
    <div>
      <p>INSPECTING TURBINES</p>
      <div class="lds-dual-ring"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style>
.centered {
  min-width: 100%;
  min-height: calc(100vh - 8em);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--hacker);
  border-color: var(--hacker) transparent var(--hacker) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>