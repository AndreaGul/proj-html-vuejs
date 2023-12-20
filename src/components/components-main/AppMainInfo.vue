<script>
export default {
  name: 'AppMainInfo',
};
</script>

<template>
  <div class="container-info">
    <div class="container d-flex align-items-center justify-content-between">
      <div>
        <h4>A</h4>
        <h1>A</h1>
        <p>asdasda</p>
        <button>a</button>
        <button>a</button>
      </div>
      <div>
        <button>a</button>
      </div>
    </div>

    <div class="advices-buttons">
      <div>
        <p class="m-0">a</p>
        <p class="m-0">a</p>
      </div>
      <div>
        <p class="m-0">a</p>
        <p class="m-0">a</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-info {
  position: relative;

  background-image: url('/img/slider82x-scaled.jpg');
  background-size: cover;
  .advices-buttons {
    position: absolute;
    top: 50px;
    right: 0;
  }
}
</style>
