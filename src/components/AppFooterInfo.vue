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
          <div>a</div>
          <p>a</p>
          <ul class="d-flex justify-content-center">
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
        <div class="col-4">
          <ul>
            <li><h5>a</h5></li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
        <div class="col-4">
          <ul>
            <li><h5>a</h5></li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
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
  }
}
</style>
