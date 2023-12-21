<script>
export default {
  name: 'AppMainArticles',

  data() {
    return {
      videos: [
        {
          img: '/img/blog1-2x.jpg',

          title: 'The best protein shake',
          note: 'By admin I November 26th, 201g I Gym',
        },
        {
          img: '/img/blog2-2x.jpg',

          title: 'Ultimate cardio workout',
          note: 'By admin I November 26th, 20T I Gym',
        },
        {
          img: '/img/blog3-2x.jpg',

          title: 'New juices available now',
          note: 'By admin I November 26th, 201g I Gym',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container general-aticles-container">
    <div class="upper-video-text d-flex justify-content-between">
      <h3 class="m-0">Latest articles</h3>
      <a href="#"
        ><h6 class="m-0">
          Read all articles
          <font-awesome-icon icon="fa-solid fa-angle-right" /></h6
      ></a>
    </div>
    <div class="articles-container d-flex">
      <div v-for="video in videos" class="article">
        <div class="article-img-container">
          <img :src="video.img" alt="img not found" />
        </div>
        <h4 class="m-0">{{ video.title }}</h4>
        <p>{{ video.note }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.general-aticles-container {
  padding: 130px 0;
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
  .articles-container {
    gap: 52px;

    .article {
      width: calc((100% - 104px) / 3);

      .article-img-container {
        width: 100%;
        cursor: pointer;
        margin-bottom: 36px;

        img {
          width: 100%;
          display: block;
        }
      }
      p {
        margin-top: 14px;

        color: $primary-text-black-purple;
      }
    }
  }
}
</style>
