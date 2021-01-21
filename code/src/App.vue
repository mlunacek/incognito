<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
      <div class="container is-fluid main-container">
        <!-- <div class="notification is-primary">
          This container is <strong>centered</strong> on desktop and larger viewports.
        </div> -->
        <router-view />

    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import { mapActions } from "vuex";

export default {
  mounted() {
    this.authAction();
  },
  components: {
    Nav,
  },
  methods: {
    ...mapActions("auth", ["authAction"]),
  },
};
</script>
<style>
.main-container{
  padding-top: 30px;
}

</style>
