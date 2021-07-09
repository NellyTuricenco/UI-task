<template>
  <form id="loginForm" @submit.prevent="handleSubmit">
    <label type="text">Email</label>
    <input type="email" required v-model="email" />

    <label type="text">Password</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    <div class="btn__wrapper">
      <button class="btn">Submit</button>
      <button class="btn" v-on:click="handleReset()">Cancel</button>
    </div>
  </form>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";
      if (!this.passwordError) {
        window.location.href = "/main";
      }
    },
    handleReset() {
      document.getElementById("loginForm").reset();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/index.scss";

#loginForm {
  width: 200px;
  margin: 0 auto;
  @include d-flex(center, center);
  flex-direction: column;
  text-align: right;
  @media (min-width: 1024px) {
    width: 20rem;
  }
}

label {
  margin: 0.8rem 0 0.5rem 0;
  align-self: baseline;
  font-size: $fs-normal;
  color: $light-color;
  @media (min-width: 1024px) {
    margin-top: 1.8rem;
  }
}

input {
  font-size: $fs-normal;
  width: 18rem;
  height: 2rem;
  border-radius: 25px;
  transition: background-color 500ms ease, border 500ms ease;
  @media (min-width: 1024px) {
    width: 20rem;
    height: 2.5rem;
    &:hover {
      background-color: darken($light-color, 30%);
    }
    &:focus {
      outline: none;
      border: 3px solid #3b8ada;
      height: 2.8rem;
    }
  }
  &:focus {
    outline: none;
    border: 2px solid #3b8ada;
    height: 2.2rem;
  }
}
.error {
  font-size: $fs-small;
  font-weight: $fw-bold;
  color: $light-color;
  @media (min-width: 1024px) {
    font-size: $fs-normal;
  }
}

.btn {
  font-size: $fs-normal;
  font-weight: $fw-normal;
  background-color: darken($grey-color, 20%);
  color: $light-color;
  width: 8rem;
  margin-top: 2.5rem;
  height: 2rem;
  border-radius: 25px;
  transition: background-color 300ms ease;
  &:focus {
    background-color: $green-color;
  }
  @media (min-width: 1024px) {
    width: 20rem;
    height: 2.5rem;
  }
  &:first-child {
    margin-left: 1rem;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    background: $green-color;
  }
}
</style>