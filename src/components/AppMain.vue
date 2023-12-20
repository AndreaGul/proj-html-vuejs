<script>
import MainCourseCaracteristics from './components-main/MainCourseCaracteristics.vue';
import AppMainNewsLetter from './components-main/AppMainNewsLetter.vue';
import AppMainPlans from './components-main/AppMainPlans.vue';
import AppMainArticles from './components-main/AppMainArticles.vue';
import AppMainSellBanner from './components-main/AppMainSellBanner.vue';
import AppMainSponsor from './components-main/AppMainSponsor.vue';
import AppMainSuggestions from './components-main/AppMainSuggestions.vue';

export default {
  name: 'AppMain',

  components: {
    MainCourseCaracteristics,
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
  <main>
    <!-- come devo tener conto della responsivita' -->
    <!-- considerare la possibilita di ragruppare dei componenti per greare dei
  sottogruppi -->
    <MainCourseCaracteristics />

    <AppMainNewsLetter />
    <AppMainPlans />
    <AppMainArticles />
    <AppMainSellBanner />
    <AppMainSponsor />
    <AppMainSuggestions />
  </main>
</template>

<style scoped lang="scss"></style>
