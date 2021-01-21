<template>
  <div>

      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box" v-if="!confirmPassword" @submit.prevent="signUp">
            
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
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                      class="input"
                      type="text"
                      v-model="email"
                      placeholder="email"
                      id="email"
                      required
                    />  

                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <button class="button is-link">
                SignUp
              </button>
            </div>
          </form>
          <div v-if="error" class="">{{ error.message }}</div>
        </div>
      </div>


      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box" v-if="confirmPassword" @submit.prevent="confirmSignUp">
            <h3>Please check your email and enter confirmation code.</h3>

            <div class="field">
              <label for="" class="label">Code</label>
              <div class="control has-icons-left">
                <input
                      class="input"
                      type="password"
                      v-model="code"
                      placeholder="*******"
                      id="code"
                      required
                    />  

                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <button class="button is-link">
                Confirm Signup
              </button>
            </div>
          </form>
          <div v-if="error" class="">{{ error.message }}</div>
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
    confirmPassword: false,
    code: "",
  }),
  methods: {
    async signUp() {
      if (!this.email || !this.password) {
        return;
      }
      try {
        await this.$store.dispatch("auth/signUp", {
          username: this.username,
          password: this.password,
          email: this.email,
        });
        this.confirmPassword = true;
      } catch (error) {
        this.error = error;
      }
    },
    async confirmSignUp() {
      if (!this.username || !this.code) {
        return;
      }
      try {
        const { username, password, code } = this;
        await this.$store.dispatch("auth/confirmSignUp", {
          username,
          code,
        });
        await this.$store.dispatch("auth/login", {
          username,
          password,
        });
        this.$router.push("/protected");
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>