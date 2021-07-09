<template>
  <div class="auth">
    <div class="mobile-top">
      <Header />
      <Toolbar />
    </div>
    <AuthContent />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Toolbar from "../components/Toolbar.vue";
import AuthContent from "../components/AuthContent.vue";

export default {
  name: "Auth",
  components: {
    Header,
    Toolbar,
    AuthContent,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/index.scss";

@media (max-width: 320px) {
  .mobile-top {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
