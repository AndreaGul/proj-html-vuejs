<script>
export default {
  name: 'AppMainPlans',
};
</script>

<template>
  <div class="general-container d-flex justify-content-center">
    <div class="plans-container d-flex container">
      <!-- creati un oggetti e inseirisci i dati dinamicamente -->
      <div class="text-center plans">
        <div>
          <font-awesome-icon
            class="icon-awesome"
            icon="fa-solid fa-stopwatch"
          />
        </div>
        <h4>Team training</h4>
        <h5>Find a partener</h5>
        <p>
          Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl
          sit fames amet senectus eget sed duis vehicula. Tristique.
        </p>
        <h6>
          Find a partener <font-awesome-icon icon="fa-solid fa-angle-right" />
        </h6>
      </div>
      <div class="text-center plans">
        <div>
          <font-awesome-icon class="icon-awesome" icon="fa-solid fa-dumbbell" />
        </div>
        <h4>Crossfit workout</h4>
        <h5>Push your limits</h5>
        <p>
          Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl
          sit fames amet senectus eget sed duis vehicula. Tristique.
        </p>
        <h6>
          Leam about Crossfit
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </h6>
      </div>
      <div class="text-center plans">
        <div>
          <font-awesome-icon
            class="icon-awesome"
            icon="fa-solid fa-bowl-food"
          />
        </div>
        <h4>Weight loss plan</h4>
        <h5>Shed those ounds</h5>
        <p>
          Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl
          sit fames amet senectus eget sed duis vehicula. Tristique.
        </p>
        <h6>
          Schedule a workout
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </h6>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'src/assets/scss/partial/_variables.scss' as *;

.general-container {
  background-color: $primary-bg-black;
  padding: 120px 0;
  .plans-container {
    gap: 55px;
    .plans {
      width: calc((100% - 110px) / 3);
      color: white;
      border: solid 5px $primary-boreder-blue;
      border-radius: 5px;
      padding: 80px 44px;
      .icon-awesome {
        font-size: 60px;
        margin-bottom: 30px;
      }
      h5 {
        color: $primary-bg-yellow;
      }

      p {
        margin: 54px 0 44px 0;
        color: $primary-text-grey;
        font-weight: 500;
      }
    }
  }
}
</style>
