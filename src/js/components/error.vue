<template>
  <div class="error-message">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'error',
  data () {
    return {
      msg: 'Error processing request. Please try again later'
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
