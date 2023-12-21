<script>
export default {
  name: 'AppMainNewsLetter',
};
</script>

<template>
  <div class="container-news-letter">
    <div class="fade-gradient">
      <div class="container">
        <div class="main-container">
          <section>
            <h4>Join our mailing list today</h4>
            <h2>Insider offers & flash sales in you inbox every week.</h2>
            <hr class="hr-separator" />
            <div class="interaction-container">
              <input
                class="default-input-white"
                type="text"
                placeholder="Insert your email...*"
              />

              <button class="default-button-blu">Subscribe</button>
            </div>

            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus
              dolor sit amet, consectetur adipiscing elit sed porttitor lectus.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.container-news-letter {
  background-image: url('src/assets/img/banner1-2x.jpg');
  background-size: cover;
  .fade-gradient {
    background: linear-gradient(
      90deg,
      $primary-bg-black 50%,
      $primary-bg-black-trasparent 80%
    );
    padding-top: 135px;
    padding-bottom: 204px;

    .main-container {
      width: 70%;
      h4 {
        color: $primary-text-red;
        margin-bottom: 35px;
      }
      h2 {
        color: $primary-text-white;
        font-size: 60px;
        margin-bottom: 50px;
      }

      p {
        color: $primary-text-grey;
        font-size: 18px;
        font-weight: 500;
      }

      .interaction-container {
        margin: 55px 0 44px 0;
        .default-input-white {
          width: 70%;
        }
        .default-button-blu {
          margin-left: 35px;
          width: calc(30% - 35px);
        }
      }
    }
  }
}
</style>
