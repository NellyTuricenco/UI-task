<template>
  <div class="main">
    <div class="mobile-top">
      <Header />
      <Toolbar />
    </div>
    <MainContent />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MainContent from "../components/MainContent.vue";
import Toolbar from "../components/Toolbar.vue";

export default {
  name: "Main",
  components: {
    Header,
    Toolbar,
    MainContent,
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/styles/index.scss";

.mobile-top {
  display: flex;
  flex-direction: column-reverse;
}

@media (min-width: 1024px) {
  .toolbar {
    display: none;
  }
}
</style>