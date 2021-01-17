// src/components/Profile.vue
<template>
    <div>
        <section class="">
            <div class="container is-fluid">

                <div class="subtitle">
                    Welcome, {{user.username}}
                </div> 
                
            </div>
        </section>
    </div>

</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Profile',
  data() {
    return {
      user: {}
    }
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
      })
      .catch(() => console.log('not signed in...'))
  }
}
</script>