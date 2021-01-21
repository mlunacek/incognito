// src/components/Protected.vue
<template>
    <section>
        <div class="columns is-centered">

                <div class="subtitle">
                    Welcome, {{user.username}}, {{user.attributes.email}}
                </div> 

        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'protected',
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
}
</script>