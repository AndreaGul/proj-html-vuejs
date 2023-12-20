<script>
export default {
  name: 'AppheaderNavbar',
};
</script>

<template>
  <div class="navbar text-color-grey d-flex align-items-center">
    <ul class="d-flex list-unstyled m-0 align-items-center">
      <li class="text-color-white">Home</li>
      <li>Services</li>
      <li>About</li>
      <li>Videos</li>
      <li>Blog</li>
      <li class="d-flex align-items-center">
        <p class="m-0">Store</p>
        <div class="yellow-box">new</div>
      </li>
      <li><button>as</button></li>
      <li><a href="#">a</a></li>
      <li><a href="#">a</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.navbar {
  ul {
    gap: 40px;

    .yellow-box {
      margin-left: 10px;
    }
  }
}
</style>
