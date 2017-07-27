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
      msg: 'Error processing request. Please add more details to locations'
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
