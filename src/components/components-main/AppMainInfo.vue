<script>
export default {
  name: 'AppMainInfo',
};
</script>

<template>
  <div class="container-info">
    <div class="fade-gradient">
      <div class="container d-flex align-items-center justify-content-between">
        <div>
          <h4>Certified fitness professional</h4>
          <h1>Take control of your health</h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            cupiditate
          </p>
          <button class="default-button-blu">
            <font-awesome-icon icon="fa-brands fa-youtube" /> Visit my YouTube
            channel
          </button>
          <button class="default-button-black">
            Buy Avada today <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
        <div>
          <button>a</button>
        </div>
      </div>

      <div class="advices-buttons">
        <div>
          <p class="m-0">a</p>
          <p class="m-0">a</p>
        </div>
        <div>
          <p class="m-0">a</p>
          <p class="m-0">a</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.container-info {
  background-image: url('/img/slider82x-scaled.jpg');
  background-size: cover;
  .fade-gradient {
    background: linear-gradient(
      90deg,
      $primary-bg-black 40%,
      $primary-bg-black-trasparent 70%
    );
    padding-top: 135px;
    padding-bottom: 204px;
    position: relative;

    h4 {
      color: $primary-text-red;
    }
    h1 {
      color: $primary-text-white;
      font-size: 60px;
    }

    hr {
      color: $primary-bg-yellow;
      width: 150px;
      border-top: 8px solid $primary-bg-yellow;
      border-radius: 5px;
    }

    p {
      color: $primary-text-grey;
      font-size: 18px;
      font-weight: 500;
    }

    .default-button-blu {
      margin-right: 12px;
    }
    .advices-buttons {
      position: absolute;
      top: 50px;
      right: 0;
    }
  }
}
</style>
