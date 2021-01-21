<template>
  <div>

      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box" @submit.prevent="login">
            
            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                 <input
                      class="input"
                      type="text"
                      v-model="username"
                      placeholder="username" 
                      id="userName"
                      required
                    />  
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input
                      class="input"
                      type="password"
                      v-model="password"
                      placeholder="*******"
                      id="password"
                      required
                    />  

                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>


            <div class="field">
              <div class="buttons">
              <button class="button is-info">
                Login
              </button>
              <router-link class="button is-ghost" to="/signin/forgotpassword">
                Forgot password?
              </router-link>
              </div>

            </div>
          </form>
          <div class="">{{ error.message }}</div>

        </div>
      </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    email: "",
    error: "",
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", {
          username: this.username,
          password: this.password,
        });
        this.$router.push("/protected");
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.is-ghost{
  border: None;
}
</style>