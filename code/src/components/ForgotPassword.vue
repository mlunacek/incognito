<template>
  <div>

      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">

          <form class="box" v-if="!confirmPassword" @submit.prevent="reset">
            <h3>Please enter your email to reset your password.</h3>

            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                 <input
                      class="input"
                      type="text"
                      v-model="username"
                      placeholder="username" 
                      id="username"
                      required
                    />  
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <button class="button is-info">
                Reset
              </button>
            </div>
          </form>
          <div class="">{{ error.message }}</div>

        <form class="box" v-if="confirmPassword" @submit.prevent="resetPassword">
            <h3>Please enter your email to reset your password.</h3>

            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                 <input
                      class="input"
                      type="text"
                      v-model="username"
                      placeholder="username" 
                      id="username"
                      required
                    />  
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label for="" class="label">Code</label>
              <div class="control has-icons-left">
                <input
                      class="input"
                      type="text"
                      v-model="code"
                      placeholder=""
                      id="code"
                      required
                    />  

                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
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
              <button class="button is-info">
                Submit
              </button>
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
    confirmPassword: false,
    code: "",
    password: "",
    error: "",
  }),
  methods: {
    async reset() {
      try {
        await this.$store.dispatch("auth/forgotPassword", {
          username: this.username,
        });
        this.confirmPassword = true;
      } catch (error) {
        this.error = error;
      }
    },
    async resetPassword() {
    console.log("here", this.username, this.code, this.password)
      try {
        await this.$store.dispatch("auth/forgotPasswordSubmit", {
          username: this.username,
          code: this.code,
          new_password: this.password
        });
        await this.$store.dispatch("auth/login", {
          username: this.username,
          password: this.password
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
</style>