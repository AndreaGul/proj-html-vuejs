<script>
export default {
  name: 'AppMainSocials',

  data() {
    return {
      bigImgVideo: '/img/service3.jpg',
      channelLogo: '/img/youtube-channel-logo.jpg',
      videos: [
        {
          img: '/img/video1-2x.jpg',
          title: 'Thingh & glute workout',
          note: 'Increase your mobility',
        },
        {
          img: '/img/video2-2x.jpg',
          title: 'lift, firm & perk up',
          note: 'Feel young again',
        },
        {
          img: '/img/video3-2x.jpg',
          title: 'Slim & trim your waist',
          note: 'Shed those extra pounds',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="row m-0 g-0 align-item-center">
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
    <div class="upper-video-text d-flex justify-content-between">
      <h3 class="m-0">Featured playlists</h3>
      <a href="#"
        ><h6 class="m-0">
          View all Videos
          <font-awesome-icon icon="fa-solid fa-angle-right" /></h6
      ></a>
    </div>
    <div class="video-container d-flex text-center">
      <div v-for="video in videos" class="yt-video">
        <div class="vid-img-container angle-card">
          <img :src="video.img" alt="img not found" />
          <button class="play-button">
            <font-awesome-icon
              class="icon-play-button"
              icon="fa-solid fa-play"
            />
          </button>
        </div>
        <h4 class="m-0">{{ video.title }}</h4>
        <p>{{ video.note }}</p>
      </div>
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

.upper-video-text {
  margin-bottom: 46px;
  a {
    text-decoration: none;
    color: #000000;

    h6 {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
.video-container {
  gap: 52px;
  margin-bottom: 160px;
  .yt-video {
    width: calc((100% - 104px) / 3);

    .vid-img-container::after {
      content: '';
      z-index: 5;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $primary-bg-black-ligher-trasparent;
    }
    .vid-img-container {
      width: 100%;
      position: relative;
      margin-bottom: 36px;

      img {
        width: 100%;
        display: block;
      }

      .play-button {
        height: 55px;
        width: 55px;
        font-size: 14px;
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .icon-play-button {
          vertical-align: -0.2rem;
        }
      }
    }
    p {
      margin-top: 14px;
      font-weight: 500;
      color: $primary-text-blue;
    }
  }
}
</style>
