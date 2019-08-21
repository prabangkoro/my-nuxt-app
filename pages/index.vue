<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-actions>
          <v-btn
            dark
            color="primary"
            nuxt
            to="/inspire"
          >
            Inspire
          </v-btn>
          <v-btn
            dark
            color="primary"
            nuxt
            :to="{
              name: 'user/id',
              params: {
                id: 20
              }
            }"
          >
            User
          </v-btn>
          <v-btn
            dark
            color="primary"
            nuxt
            to="/order"
          >
            My Order
          </v-btn>
          <v-btn
            dark
            color="primary"
            nuxt
            to="/query"
          >
            Query
          </v-btn>
          <v-btn
            dark
            color="primary"
            nuxt
            to="/static"
          >
            Static
          </v-btn>
          <v-btn
            dark
            color="primary"
            nuxt
            to="/assets"
          >
            Assets
          </v-btn>
          <v-btn
            dark
            color="primary"
            nuxt
            to="/store"
          >
            Store
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
