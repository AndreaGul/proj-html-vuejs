<script>
export default {
  name: 'AppMainPlans',
};
</script>

<template>
  <div class="plans-container d-flex justify-content-center">
    <div class="row container">
      <!-- creati un oggetti e inseirisci i dati dinamicamente -->
      <div class="col-4 text-center plans">
        <div>a</div>
        <h4>a</h4>
        <h4>a</h4>
        <p>a</p>
        <h5>a</h5>
      </div>
      <div class="col-4 text-center plans">
        <div>a</div>
        <h4>a</h4>
        <h4>a</h4>
        <p>a</p>
        <h5>a</h5>
      </div>
      <div class="col-4 text-center plans">
        <div>a</div>
        <h4>a</h4>
        <h4>a</h4>
        <p>a</p>
        <h5>a</h5>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.plans-container {
  background-color: $primary-plans-black;
  .plans {
    color: white;
  }
}
</style>
