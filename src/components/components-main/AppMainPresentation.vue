<script>
export default {
  name: 'AppMainPresentation',
};
</script>

<template>
  <div class="general-container">
    <div class="container presentation-container">
      <div class="row card-container">
        <!-- questi elementi posono essere inseriti tramite un ciclo for se io inserisco i dati delle card in un oggetto lo posso struttare per riempirle -->
        <div class="col-4">a</div>
        <div class="col-4">a</div>
        <div class="col-4">a</div>
      </div>
      <div class="text-center">
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus similique labore dolorem, quisquam commodi,
            repellendus modi, quas ea
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <div>a</div>
          <h5>a</h5>
          <p>a</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;
.general-container {
  position: relative;
  height: 200px;
  background: linear-gradient(
    135deg,
    $primary-gradient-blue,
    $primary-gradient-red
  );
  .presentation-container {
    position: absolute;
    top: -82px;
    left: 50%;
    transform: translate(-50%, 0);
    .card-container {
      background-color: red;
      height: 100px;
    }
  }
}
</style>
