<template>
  <div class="distance-item">
    The shortest distance is {{distance.distance}} <br>
    Duration is {{distance.duration}} by car
  </div>
</template>
<script>
export default {
  name: 'distance',
  props: ['distance']
}
</script>

<style scoped>
.distance-item {
  color: green;
}
</style>
