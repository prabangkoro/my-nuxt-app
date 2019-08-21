<template>
 <v-layout
  column
 >
   <div>
     User page
   </div>
   <p>ID: {{ $route.params.id }}</p>
   <v-flex>
    <v-btn
      dark
      color="primary"
      nuxt
      to="/"
    >
      Home
    </v-btn>
   </v-flex>
 </v-layout>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
