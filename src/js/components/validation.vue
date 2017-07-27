<template>
  <div class="error-message">
  {{msg}}
  </div>
</template>
<script>
export default {
  name: 'validation',
  data () {
    return {
      msg: 'All fields are required'
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
