<template>
  <div class="header">
    <div class="header__wrapper">
      <img src="./images/user.jpg" />
      <span>Lorem ipsum dolor sit ametsum ipsum 123456</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/styles/index.scss";

.header {
  margin-top: 0;
  text-align: right;
  &__wrapper {
    position: relative;
    border-top: 1px solid $grey-color;
    margin-top: 0.7rem;
    padding: 0.2rem;
    width: 100%;
    height: 10vh;
    @include d-flex(flex-start, center);
    @media (min-width: 1024px) {
      border-top: none;
      width: 20%;
      height: 10vh;
      @include d-flex(center, center);
    }
    & span {
      width: 130px;
      font-size: 12px;
      font-weight: $fw-normal;
      color: $green-color;
      @media (min-width: 1024px) {
        font-size: $fs-small;
        width: 25rem;
      }
    }
    & img:after {
      position: absolute;
      pointer-events: none;
      border: 1px solid black;
    }
  }
}
</style>