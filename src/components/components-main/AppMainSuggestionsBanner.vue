<script>
export default {
  name: 'AppMainSuggestionsBanner',
};
</script>

<template>
  <div class="suggestions-banner-container">
    <div class="gradient-banner">
      <div class="container text-center">
        <button class="play-button">
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
        <h2>Crossfit workout of the day</h2>
        <h5>November 15thP019</h5>
        <p class="m-0">View all videos</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;
.suggestions-banner-container {
  background-image: url('src/assets/img/banner14-2x.jpg');
  background-size: cover;
  background-position: center bottom;
  color: $primary-text-white;

  .gradient-banner {
    background: linear-gradient(
      135deg,
      $primary-gradient-rgba-blu,
      $primary-gradient-rgba-red
    );
    padding: 150px 0 190px 0;
    h2 {
      font-size: 60px;
      margin: 32px 0 40px 0;
    }
    h5 {
      color: $primary-bg-yellow;
      font-size: 30px;
      margin-bottom: 26px;
    }

    p {
      font-weight: 500;
    }
  }
}
</style>
