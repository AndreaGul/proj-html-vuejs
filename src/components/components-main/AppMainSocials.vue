<script>
export default {
  name: 'AppMainSocials',

  data() {
    return {
      bigImgVideo: '/img/service3.jpg',
      channelLogo: '/img/youtube-channel-logo.jpg',
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
    <div class="col-6 text-container">
      <h4>Tune up your workouts</h4>
      <h2>The best health & fitness advice online</h2>
      <div class="d-flex align-items-center channel-part">
        <div><img :src="channelLogo" alt="img not found" /></div>
        <div>
          <h6>ThemeFusion</h6>
          <div>
            <button class="left-button">
              <font-awesome-icon
                class="font-awesome-youtube"
                icon="fa-brands fa-youtube"
              />
              YouTube</button
            ><button class="right-button">999+</button>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse incidunt
        ea provident est, sed ad error eum, ipsa porro tempore voluptatem
        exercitationem.
      </p>
      <button class="default-button-red">
        <font-awesome-icon icon="fa-brands fa-youtube" /> Visit my YouTube
        channel
      </button>
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

.text-container {
  padding: 136px;
  h4 {
    font-size: 22px;
    color: $primary-button-blue;
    margin-bottom: 55px;
  }
  h2 {
    font-size: 60px;
  }
  .channel-part {
    padding-bottom: 40px;
    color: $primary-text-grey;
    img {
      display: block;
      margin-right: 12px;
    }
    .left-button {
      background-color: $primary-bg-subscribe-btn;
      color: #ffffff;
      border: $primary-bg-subscribe-btn solid 1px;
      .font-awesome-youtube {
        font-size: 18px;
        transform: translate(0, 5%);
      }
    }

    .right-button {
      color: $primary-text-grey;
      border: $primary-text-light-grey solid 1px;
    }
  }
  p {
    font-size: 20px;
    padding-bottom: 40px;
    color: $primary-text-black-purple;
  }
}
</style>
