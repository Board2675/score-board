<template>
  <div id="button">{{text}}</div>
</template>


<script>
export default {
  name: "Button",
  props: {
    text: String
  }
};
</script>


<style scoped>
#buttom {
  background-color: red;
}
</style>