<template>
  <v-container>
    <v-layout column>
      <v-flex>
        Order Page
      </v-flex>
      <v-flex>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-btn text :to="{ path: '/order' }">
                Order Summary
              </v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-btn text :to="{ path: '/order/on-going' }">
                On Going
              </v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-btn text :to="{ path: '/order/finished' }">
                Finished
              </v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-btn text :to="{ path: '/order/cancelled' }">
                Cancelled
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Order Page'
    }
  }
}
</script>
