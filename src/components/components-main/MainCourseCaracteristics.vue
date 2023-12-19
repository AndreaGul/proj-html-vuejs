<script>
import AppMainInfo from './AppMainInfo.vue';
import AppMainPresentation from './AppMainPresentation.vue';
import AppMainSocials from './AppMainSocials.vue';

export default {
  name: 'MainCourseCaracteristics',

  components: {
    AppMainPresentation,
    AppMainInfo,
    AppMainSocials,
  },
};
</script>

<template>
  <AppMainInfo />
  <AppMainPresentation />
  <AppMainSocials />
</template>

<style scoped lang="scss"></style>
