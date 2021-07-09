<template>
  <div class="toolbar">
    <h5 class="toolbar__title">Lorem, ipsum dolor</h5>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/styles/index.scss";

.toolbar {
  margin: 0.2rem;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  text-align: right;
  border-radius: 25px;
  background-color: $grey-color;

  @media (min-width: 1024px) {
    margin: 0;
    border-radius: 0px;
    box-shadow: inset 0px 3px 8px 0 #808080ef;
  }
  &__title {
    display: none;
    @media (min-width: 1024px) {
      display: block;
      padding-right: 2.4rem;
      font-weight: $fw-normal;
      font-size: $fs-small;
    }
  }
}
</style>