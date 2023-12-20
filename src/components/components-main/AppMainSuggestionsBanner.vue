<script>
export default {
  name: 'AppMainSuggestionsBanner',
};
</script>

<template>
  <div class="suggestions-banner-container">
    <div class="gradient-banner">
      <div class="container text-center">
        <button>a</button>
        <h2>a</h2>
        <h5>a</h5>
        <p class="m-0">a</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;
.suggestions-banner-container {
  background-image: url('src/assets/img/banner14-2x.jpg');
  background-size: cover;
  .gradient-banner {
    background: linear-gradient(
      135deg,
      $primary-gradient-rgba-blu,
      $primary-gradient-rgba-red
    );
  }
}
</style>
