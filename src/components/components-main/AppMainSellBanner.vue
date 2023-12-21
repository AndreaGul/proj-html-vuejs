<script>
export default {
  name: 'AppMainSellBanner',
};
</script>
<template>
  <div class="sell-banner-container text-center">
    <div class="fade-gradient">
      <div class="container main-container">
        <section>
          <h2>
            "I've failed overan over again in my life. And that is whylsucceed."
          </h2>
          <div class="awesome-separator">
            <font-awesome-icon icon="fa-solid fa-wave-square" />
          </div>
          <p>
            Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In
            lacinia lacus donec sed massa in ipsum eros, tristique. Gravida
            suspendisse etiam in iaculis
          </p>
          <button class="default-button-blu">
            Buy Avada today <font-awesome-icon icon="fa-solid fa-angle-right" />
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.sell-banner-container {
  background-image: url('src/assets/img/banner2-2x.jpg');
  background-size: cover;
  .fade-gradient {
    background: linear-gradient(
      0deg,
      $primary-bg-black 1%,
      $primary-bg-black-trasparent 90%
    );
    padding: 204px 0;

    .main-container {
      width: 55%;

      h4 {
        color: $primary-text-red;
        margin-bottom: 35px;
      }
      h2 {
        color: $primary-text-white;
        font-size: 60px;
        margin-bottom: 50px;
      }

      .awesome-separator {
        color: $primary-bg-yellow;
        font-size: 40px;
      }
      p {
        color: $primary-text-white;
        font-size: 18px;
        font-weight: 500;
        margin: 50px 0 40px 0;
      }
    }
  }
}
</style>
