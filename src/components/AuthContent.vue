<template>
  <div class="content">
    <div class="blur">
      <div class="text__wrapper">
        <div class="image__wrapper">
          <img src="./images/user.jpg" />
        </div>
        <span>Lorem ipsum dolor sit amet consectetur</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, officia
      </p>
      <LogInForm />
    </div>
  </div>
</template>

<script>
import LogInForm from "./LogInForm.vue";
export default {
  components: {
    LogInForm,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/index.scss";

.content {
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  background-image: url(images/mobileBackgroundImage.png);
  background-size: cover;
  @include d-flex(center, center);
  @media (min-width: 1024px) {
    background-image: url(images/authBackgroundImage.png);
  }
}
.text__wrapper {
  padding: 0.8rem;
  margin: 0 1.7rem;
  @include d-flex(flex-start, center);
  position: relative;
  border-bottom: 3px solid $light-color;
  border-top: none;
  color: $light-color;
  font-size: $fs-normal;
  font-weight: $fw-bold;
  @media (min-width: 1024px) {
    margin: 0 15rem;
    font-size: $fs-big;
  }
  & span {
    margin: 0;
    margin-right: 1rem;
    width: 190px;
    @media (min-width: 1024px) {
      width: 35rem;
    }
  }
  & image__wrapper {
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
  }
}
p {
  font-size: $fs-normal;
  color: $light-color;
  margin: 1.5rem auto;
  text-align: center;
  @media (min-width: 1024px) {
    margin-top: 3rem;
  }
}
.blur {
  width: 100%;
  min-height: 80vh;
  background-image: $lg;
  backdrop-filter: blur(0.5px);
}
</style>