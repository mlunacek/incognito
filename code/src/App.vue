// src/App.vue
<template>
  <div id='app'>
    <div  class='tabs'>
      <ul>
      <router-link tag="p" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="p" to="/protected" v-if="signedIn">
        <a>Protected</a>
      </router-link>
      <router-link tag="p" to="/profile" v-if="signedIn">
        <a>Profile</a>
      </router-link>
      <li tag="p" to="/auth" v-if="signedIn" @click="signOut">
        <a>Sign Out</a>
      </li>
  
      <router-link tag="p" to="/auth" v-if="!signedIn" >
        <a>Sign In</a>
      </router-link>
 
      </ul>
    </div>


    <router-view></router-view>

    <!-- <div class='sign-out'>
      <amplify-sign-out v-if="signedIn"></amplify-sign-out>
    </div> -->

  </div>
</template>

<script>
import { Auth, Hub } from 'aws-amplify'

export default {
  name: 'app',
  data() {
    return {
      signedIn: false
    }
  },
  beforeCreate() {
    Hub.listen('auth', data => {
      console.log('data:', data)
      const { payload } = data
      if (payload.event === 'signIn') {
        this.signedIn = true
        this.$router.push('/profile')
      }
      if (payload.event === 'signOut') {
        this.$router.push('/auth')
        this.signedIn = false
      }
    })
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.signedIn = true
      })
      .catch(() => this.signedIn = false)
  },
  methods: {

    signOut(event){
      console.log("trying to sign out", event);
      Auth.signOut()
        .then(()=> {
          this.signedIn = false
        }).catch(() => this.signedIn = true)
    },


  }



}
</script>

<style>


</style>
