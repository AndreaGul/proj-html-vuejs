<script>
import AppMainInfo from './components-main/AppMainInfo.vue';
import AppMainPresentation from './components-main/AppMainPresentation.vue';
import AppMainSocials from './components-main/AppMainSocials.vue';
import AppMainNewsLetter from './components-main/AppMainNewsLetter.vue';
import AppMainPlans from './components-main/AppMainPlans.vue';
import AppMainArticles from './components-main/AppMainArticles.vue';
import AppMainSellBanner from './components-main/AppMainSellBanner.vue';
import AppMainSponsor from './components-main/AppMainSponsor.vue';
import AppMainSuggestions from './components-main/AppMainSuggestions.vue';

export default {
  name: 'AppMain',

  components: {
    AppMainPresentation,
    AppMainInfo,
    AppMainSocials,
    AppMainNewsLetter,
    AppMainPlans,
    AppMainArticles,
    AppMainSellBanner,
    AppMainSponsor,
    AppMainSuggestions,
  },
};
</script>

<template>
  //considerare la possibilita di ragruppare dei componenti per greare dei
  sottogruppi
  <AppMainInfo />
  <AppMainPresentation />
  <AppMainSocials />
  <AppMainNewsLetter />
  <AppMainPlans />
  <AppMainArticles />
  <AppMainSellBanner />
  <AppMainSponsor />
  <AppMainSuggestions />
</template>

<style scoped lang="scss"></style>
