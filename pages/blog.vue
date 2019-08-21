<template>
  <div>
    blog page content
  </div>
</template>

<script>
export default {
  layout: 'blog',
  asyncData () {
    console.log(`asyncData called,,,,`)
  },
  fetch () {
    console.log(`fetch called,,,`)
  }
}
</script>
