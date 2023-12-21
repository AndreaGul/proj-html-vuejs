<script>
export default {
  name: 'AppFooterInfo',
};
</script>

<template>
  <div class="footer-info-container">
    <div class="container footer-info">
      <div class="row text-center">
        <!-- come per le card sopra anche qui mi posso creare un oggetto con alliterno i vari dati dei video da inserire con un ciclo -->
        <div class="col-4">
          <div><img src="/img/logo.png" alt="" /></div>
          <p>
            Ac aliquam neque sagittis diam faucibus vitae purus turpis
            phasellus. Pellentesque consectetur amet purus ultrices mauris.
          </p>
          <ul class="socials-list d-flex justify-content-center list-unstyled">
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
            <li><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
          </ul>
        </div>
        <div class="col-4">
          <ul class="posts-list list-unstyled">
            <li><h5 class="text-uppercase">Recent posts</h5></li>
            <li>
              <font-awesome-icon icon="fa-solid fa-angle-right" /> The best
              protein shake
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-angle-right" /> Ultimate
              cardio workout
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-angle-right" /> New juices
              available now
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-angle-right" /> Tips to find
              training partners
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-angle-right" /> 20 best
              healthy recipes
            </li>
          </ul>
        </div>
        <div class="col-4">
          <ul>
            <li><h5>CONTACT INFORMATIONS</h5></li>
            <li class="company-route">4746 Tipple Road Michigan 48449</li>
            <li><h6>Mobile : 1,800.000-0000</h6></li>
            <li><h6>Email : info@your-company.com</h6></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.footer-info-container {
  background-color: $primary-bg-black;
  .footer-info {
    color: white;
    padding: 140px 0 125px 0;
    p {
      color: $primary-text-light-grey;
      margin: 50px 0 60px 0;
    }
    .socials-list {
      color: $primary-text-red;
      gap: 16px;
      font-size: 22px;
    }
    .posts-list {
      line-height: 50px;
    }

    .company-route {
      margin: 45px 0 32px 0;
      color: $primary-text-light-grey;
    }

    h6 {
      line-height: 12px;
    }
  }
}
</style>
