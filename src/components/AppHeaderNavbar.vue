<script>
export default {
  name: 'AppheaderNavbar',
};
</script>

<template>
  <div class="navbar text-color-grey d-flex align-items-center">
    <ul class="d-flex list-unstyled m-0 align-items-center">
      <li><a class="focused" href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Videos</a></li>
      <li><a href="#">Blog</a></li>
      <li class="d-flex align-items-center">
        <p class="m-0"><a href="#">Store</a></p>
        <div><a class="yellow-box" href="#">new</a></div>
      </li>
      <li>
        <button class="default-button-blu">Schedule a workout</button>
      </li>
      <li>
        <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
        /></a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.navbar {
  ul {
    gap: 40px;
    font-weight: 600;
    .yellow-box {
      margin-left: 10px;
      color: #000000;
      background-color: $primary-bg-yellow;
      padding: 4px 7px;
      border-radius: 2px;
      font-size: 14px;
      font-weight: 400;
    }

    a {
      text-decoration: none;
      color: $primary-text-grey;
    }
    .focused {
      color: $primary-text-white;
    }
  }
}
</style>
