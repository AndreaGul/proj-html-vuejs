<script>
export default {
  name: 'AppMainPresentation',

  data() {
    return {
      profileImg: '/img/profile-img.jpg',
      services: [
        {
          img: '/img/service1.jpg',
          title: 'Crossfit Workout',
          note: 'Push your limits',
        },
        {
          img: '/img/service2.jpg',
          title: 'New gym apparel',
          note: 'Look good, feel good',
        },
        {
          img: '/img/service3.jpg',
          title: 'team training',
          note: 'Find a partener',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="general-container">
    <div class="container presentation-container">
      <div class="d-flex card-container">
        <!-- questi elementi posono essere inseriti tramite un ciclo for se io inserisco i dati delle card in un oggetto lo posso struttare per riempirle -->
        <div v-for="service in services" class="p-0 angle-card shadow">
          <div class="img-container">
            <img :src="service.img" :alt="service.title" />

            <div class="text-container">
              <div class="awesome-separator">
                <font-awesome-icon icon="fa-solid fa-wave-square" />
                <font-awesome-icon icon="fa-solid fa-wave-square" />
              </div>
              <h5>{{ service.title }}</h5>
              <p>{{ service.note }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center text-part">
        <p>
          "How you respond to the challenge in the second half will determine
          what you become after the game, whether you are a winner or a loser."
        </p>

        <div class="awesome-separator">
          <font-awesome-icon icon="fa-solid fa-wave-square" />
          <font-awesome-icon icon="fa-solid fa-wave-square" />
        </div>
        <div
          class="profile-info d-flex justify-content-center align-items-center"
        >
          <div class="profile-img">
            <img :src="profileImg" alt="img not foud" />
          </div>
          <h4 class="profile-name">Brand Johnson</h4>
          <h4>Las Vegas</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;
.general-container {
  background: linear-gradient(
    135deg,
    $primary-gradient-blue,
    $primary-gradient-red
  );
  .presentation-container {
    position: relative;
    top: -82px;

    .card-container {
      gap: 55px;

      .angle-card:hover {
        transform: scale(1.1);
      }
      .angle-card {
        width: calc((100% - 110px) / 3);
        cursor: pointer;
        .awesome-separator {
          color: #ffffff;
          font-size: 20px;
        }
        .img-container::before {
          content: '';
          z-index: 1;
          background: linear-gradient(
            0deg,
            $primary-bg-black 0,
            $primary-bg-black-trasparent 50%
          );
          position: absolute;
          height: 100%;
          width: 100%;
        }
        .img-container {
          width: 100%;
          position: relative;

          img {
            width: 100%;
          }

          .text-container {
            position: absolute;
            z-index: 10;
            left: 40px;
            bottom: 40px;

            h5 {
              color: $primary-text-white;
              font-size: 24px;
              font-weight: 600;
            }
            p {
              color: $primary-bg-yellow;
              font-size: 20px;
              font-weight: 600;
            }
          }
        }
      }
    }

    .text-part {
      padding: 150px 165px 210px 165px;
      p {
        color: $primary-text-white;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 50px;
      }

      .profile-info {
        gap: 18px;
        .profile-img {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 100%;
            display: block;
            object-fit: cover;
          }
        }
        .profile-name {
          color: $primary-text-white;
        }
        h4 {
          color: $primary-text-grey;
        }
      }
    }
  }
}
</style>
