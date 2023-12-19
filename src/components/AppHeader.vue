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
header {
  background-color: green;
  .header-container {
    padding: 30px 0;
  }
}
</style>
