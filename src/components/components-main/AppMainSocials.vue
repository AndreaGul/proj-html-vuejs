<script>
export default {
  name: 'AppMainSocials',
};
</script>

<template>
  <div class="row m-0">
    <div class="col-6 big-card-container">
      <div class="big-card">a</div>
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
.big-card-container {
  position: relative;
  .big-card {
    width: 100%;
    position: absolute;
    top: -60px;
    right: 0;

    background-color: red;

    height: 100px;
  }
}
</style>
