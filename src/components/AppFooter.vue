<script>
import AppFooterInfo from './AppFooterInfo.vue';
import AppFooterCopyright from './AppFooterCopyright.vue';

export default {
  name: 'AppFooter',

  components: {
    AppFooterInfo,
    AppFooterCopyright,
  },
};
</script>

<template>
  <AppFooterInfo />
  <AppFooterCopyright />
</template>

<style scoped lang="scss"></style>
