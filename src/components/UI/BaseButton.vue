<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #810036;
  border-radius: 5px;
  background-color: #810036;
  color: white;
  padding: 0.3rem 1.2rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 0.5rem;
  height: 2.5rem;
}

button:hover,
button:active {
  background-color: #810036;
  border-color: #810036;
}

.flat {
  background-color: transparent;
  color: navy;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #f0cfdc;
}
</style>
