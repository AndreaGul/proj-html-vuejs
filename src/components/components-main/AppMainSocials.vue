<script>
export default {
  name: 'AppMainSocials',

  data() {
    return {
      bigImgVideo: 'public/img/service3.jpg',
    };
  },
};
</script>

<template>
  <div class="row m-0 g-0">
    <div class="col-6 big-card-container">
      <div class="big-card angle-card">
        <img :src="bigImgVideo" alt="Img not found" />
        <button class="play-button">
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
      </div>
    </div>
    <div class="col-6">
      <h5>a</h5>
      <h2>a</h2>
      <div class="d-flex align-items-center">
        <div>a</div>
        <div>
          <p>a</p>
          <div><button>a</button><button>a</button></div>
        </div>
      </div>
      <p>a</p>
      <button>a</button>
    </div>
  </div>
  <div class="container">
    <div class="d-flex justify-content-between">
      <h5>a</h5>
      <h5>a</h5>
    </div>
    <div class="row text-center">
      <!-- come per le card sopra anche qui mi posso creare un oggetto con alliterno i vari dati dei video da inserire con un ciclo -->
      <div class="col-4">
        <div>a</div>
        <h5>a</h5>
        <p>a</p>
      </div>
      <div class="col-4">a</div>
      <div class="col-4">a</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;
.big-card-container {
  .big-card::after {
    content: '';
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $primary-bg-black-ligher-trasparent;
  }
  .big-card {
    width: 100%;
    position: relative;
    top: -60px;
    right: 0;

    background-color: red;
    img {
      width: 100%;
    }

    .play-button {
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
