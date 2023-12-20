<script>
import AppHeaderLogo from './AppHeaderLogo.vue';
import AppheaderNavbar from './AppHeaderNavBar.vue';

export default {
  name: 'AppHeader',

  components: {
    AppHeaderLogo,
    AppheaderNavbar,
  },
};
</script>

<template>
  <header>
    <div
      class="header-container container d-flex justify-content-between align-items-center"
    >
      <AppHeaderLogo />
      <AppheaderNavbar />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

header {
  font-family: 'Roboto', sans-serif;
  background-color: $primary-bg-black;
  .header-container {
    padding: 30px 0;
  }
}
</style>
