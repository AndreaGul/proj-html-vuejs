<script>
export default {
  name: 'AppFooterCopyright',
};
</script>

<template>
  <div class="copyright-container">
    <div class="container copyright text-center">a</div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.copyright-container {
  background-color: $primary-bg-black;
  .copyright {
    color: white;
  }
}
</style>
