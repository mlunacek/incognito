<template>
  <div class="tabs">
    <ul>

      <li class="">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li class="" v-if="!user">
        <router-link to="/signin">
          Login
        </router-link>
      </li>
      <li class="" v-if="!user">
        <router-link to="/signup">
          Sign Up
        </router-link>
      </li>
      <li class="" v-if="user">
        <router-link to="/protected">
          Protected
        </router-link>
      </li>
      <li class="" v-if="user">
        <div class="" @click="logout">Logout</div>
      </li>    

    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  computed: {
    // user: this.$store.dispatch("auth/user");
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>