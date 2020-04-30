<template>
  <div class="title h-text-center">
    <h2>{{ titleText }}</h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    titleText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 10px;

    @media (max-width: 599px) {
      font-size: 1.4rem;
    }
  }
}
</style>
