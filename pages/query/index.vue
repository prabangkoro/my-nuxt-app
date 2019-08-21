<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-switch v-model="direction" label="Order Direction"></v-switch>
        <p>value: {{ direction }}</p>
      </v-flex>
      <v-flex>
        <v-text-field
          v-model="keywords"
          clearable
          label="Keywords"
          placeholder="Keywords"
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-btn @click="search">
          search
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      direction: false,
      keywords: ''
    }
  },
  fetch () {
    console.log(`fetching data based on updated query`)
  },
  methods: {
    search () {
      const keywords = this.keywords
      this.$router.push({
        name: this.$router.path,
        query: {
          asc: this.direction,
          ...(!!keywords && { keywords })
        }
      })
    }
  },
  watchQuery: [
    'asc'
  ]
}
</script>
