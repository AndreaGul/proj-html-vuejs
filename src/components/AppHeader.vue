<script>
import AppHeaderLogo from './AppHeaderLogo.vue';
import AppheaderNavbar from './AppHeaderNavBar.vue';

export default {
  name: 'AppHeader',

  components: {
    AppHeaderLogo,
    AppheaderNavbar,
  }

  
};
</script>

<template>
  <header >
    <div class="container d-flex justify-content-between">
      <AppHeaderLogo/>
      <AppheaderNavbar/>
    </div>
    
  </header>
  
  
</template>

<style scoped lang="scss">
header {
  background-color: green;
}
</style>
