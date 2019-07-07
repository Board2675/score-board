<template>
<div id="card"> 
	<p>{{ name }}</p>
	<p>{{ points }}</p>
</div>
</template>


<script>
export default {
  name: "HelloWorld",
  props: {
		name: String,
		points: String
  }
};
</script>


<style scoped>

h1, h2, h3, h4, h5, h6, p, a, div, button {
  color: #000000d0;
}

#card {
	padding: 32px;
	border-radius: 8px;
	background-color: #F4F4FC;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	display: inline-block;
}
</style>
