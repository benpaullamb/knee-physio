<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled';
  },
};
</script>

<style></style>
