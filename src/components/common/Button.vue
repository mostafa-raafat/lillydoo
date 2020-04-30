<template>
  <a :href="buttonLink" class="button">{{ buttonText }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  border-radius: 0;
  border-style: solid;
  border-width: 0;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  background-color: $primaryColor;
  border-color: #99dfdd;
  color: $white;
  transition: background-color 0.3s ease-out;
  font-family: $primaryFont, Arial, sans-serif;
  font-size: 0.9rem;
  height: 45px;
  min-width: 14rem;
  line-height: 2.9;
  text-transform: uppercase;
  display: block;
}
</style>
