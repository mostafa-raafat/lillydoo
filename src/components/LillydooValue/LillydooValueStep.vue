<template>
  <div class="lillydoo-value__step h-text-center">
    <img :src="stepImage" :alt="stepImageAlt" />
    <h4>{{ stepTitle }}</h4>
    <p v-html="stepDescription"></p>
    <p class="lillydoo-value__learn-more" v-if="learnMore">
      <a :href="learnMore.link" target="_blank" v-html="learnMore.value"></a>
    </p>
  </div>
</template>

<script>
export default {
  name: "LillydooValueStep",
  props: {
    stepImage: {
      type: String,
      required: true
    },
    stepImageAlt: {
      type: String,
      required: false
    },
    stepTitle: {
      type: String,
      required: true
    },
    stepDescription: {
      type: String,
      required: true
    },
    learnMore: {
      type: Object,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
.lillydoo-value__step {
  width: 33.3%;
  @include for_breakpoint(max-width, desktop) {
    width: 100%;
    margin: 3% 0;
  }
  img {
    width: 70px;
    margin-bottom: 15px;
    @include for_breakpoint(max-width, desktop) {
      width: 20%;
    }
  }
  .lillydoo-value__learn-more {
    padding-top: 30px;
  }
}
</style>
