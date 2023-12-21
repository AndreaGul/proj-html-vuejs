<script>
export default {
  name: 'AppMainSponsor',
  data() {
    return {
      sponsors: [
        {
          img: '/img/sponsor-1-2x.png',

          paragraf:
            'Tristique aliquam in nullam habitasse nunc, amet vel consectetur Tristique aliquam in nullam habitasse nunc, amet vel consectetur',
          note: 'Visit Yoga Studio',
        },
        {
          img: '/img/sponsor-2-2x.png',
          paragraf:
            'Tristique aliquam in nullam habitasse nunc, amet vel consectetur Tristique aliquam in nullam habitasse nunc, amet vel consectetur',
          note: 'Join Fitness Center',
        },
        {
          img: '/img/sponsor-3-2x.png',
          paragraf:
            'Tristique aliquam in nullam habitasse nunc, amet vel consectetur Tristique aliquam in nullam habitasse nunc, amet vel consectetur',
          note: 'Learn about FC',
        },
        {
          img: '/img/sponsor-4-2x.png',
          paragraf:
            'Tristique aliquam in nullam habitasse nunc, amet vel consectetur Tristique aliquam in nullam habitasse nunc, amet vel consectetur',
          note: 'Visit Power Gym',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="d-flex text-center sponsor-container">
      <div v-for="sponsor in sponsors" class="sigle-sponsor">
        <div class="sponsor-img-container">
          <img :src="sponsor.img" alt="img not found" />
        </div>
        <div class="awesome-separator">
          <font-awesome-icon icon="fa-solid fa-wave-square" />
          <font-awesome-icon icon="fa-solid fa-wave-square" />
        </div>
        <p>{{ sponsor.paragraf }}</p>
        <a href="#" class="link-sponsor-note"
          ><h5>
            {{ sponsor.note }}
            <font-awesome-icon
              class="angle-awesome-icon"
              icon="fa-solid fa-angle-right"
            /></h5
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;
.sponsor-container {
  gap: 45px;
  margin: 125px 0 160px 0;

  .sigle-sponsor {
    width: calc((100% - 135px) / 4);

    .sponsor-img-container {
      width: 100%;
      margin-bottom: 30px;

      img {
        width: 50%;
        transform: translate(50%, 0);
        display: block;
      }
    }
    .awesome-separator {
      color: $primary-text-celest;
      font-size: 20px;
    }

    p {
      margin: 35px 0 45px 0;
    }

    .angle-awesome-icon {
      font-size: 16px;
    }

    .link-sponsor-note {
      text-decoration: none;
      color: #000000;
    }
  }
}
</style>
