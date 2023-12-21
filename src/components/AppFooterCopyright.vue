<script>
export default {
  name: 'AppFooterCopyright',
};
</script>

<template>
  <div class="copyright-container">
    <div class="container copyright text-center">
      © Copyright 2012 - 2020 | Avada theme by
      <span class="lighted">ThemeFusion</span> | All rights reserved | Powered
      by <span class="lighted">WordPres</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.copyright-container {
  background-color: $primary-bg-black;
  border-top: solid 1px $primary-text-dark-grey;
  padding: 48px 0 43px 0;
  .copyright {
    color: $primary-text-grey;
    font-weight: 500;
    .lighted {
      color: $primary-text-white;
    }
  }
}
</style>
