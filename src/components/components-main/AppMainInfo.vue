<script>
export default {
  name: 'AppMainInfo',
};
</script>

<template>
  <div class="container-info">
    <div class="fade-gradient">
      <div
        class="main-container container d-flex align-items-center justify-content-between"
      >
        <section>
          <h4>Certified fitness professional</h4>
          <h1>Take control of your health</h1>
          <hr class="hr-separator" />
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
        </section>
        <div>
          <button class="play-button">
            <font-awesome-icon icon="fa-solid fa-play" />
          </button>
        </div>
      </div>

      <div class="advices-buttons">
        <button class="advices-button">
          <h2 class="m-0">
            <font-awesome-icon icon="fa-solid fa-campground" />
          </h2>
          <p class="m-0">Demos</p>
        </button>
        <button class="advices-button">
          <h2 class="m-0 sale-prize">$39</h2>
          <p class="m-0">On Sale</p>
        </button>
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

    .main-container {
      h4 {
        color: $primary-text-red;
      }
      h1 {
        color: $primary-text-white;
        font-size: 60px;
      }

      p {
        color: $primary-text-grey;
        font-size: 18px;
        font-weight: 500;
      }

      .default-button-blu {
        margin-right: 12px;
      }

      .play-button {
        margin: 0 100px;
      }
    }

    .advices-buttons {
      position: absolute;
      top: 50px;
      right: 14px;
      color: $primary-text-dark-blue;

      .advices-button {
        text-align: center;
        display: block;
        width: 70px;
        height: 70px;
        background-color: #ffffff;
        border: none;
        border-radius: 4px;
        margin-bottom: 6px;
        color: $primary-text-dark-blue;
        font-weight: 500;

        .sale-prize {
          color: $primary-text-green-fluo;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
