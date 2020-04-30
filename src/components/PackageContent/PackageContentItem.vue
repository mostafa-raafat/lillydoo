<template>
  <div class="package-content__item">
    <div class="package-content__trial-img">
      <img :src="packageContentImage" :alt="packageContentImageAlt" />
    </div>
    <div class="package-content__trial-info">
      <h4>{{ packageContentName }}</h4>
      <ul>
        <li
          v-for="(packageContentItem, index) in packageContentItems"
          :key="index"
          v-html="packageContentItem"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialItem",
  props: {
    packageContentImage: {
      type: String,
      required: true
    },
    packageContentImageAlt: {
      type: String,
      required: false
    },
    packageContentName: {
      type: String,
      required: true
    },
    packageContentItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.package-content__item {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @include for_breakpoint(max-width, desktop) {
    align-items: flex-start;
    padding-bottom: 1.5rem;
  }

  .package-content__trial-img {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    margin-block-start: 0.5em;

    @include for_breakpoint(max-width, desktop) {
      margin: 0;
    }

    img {
      width: 100%;
    }
  }

  .package-content__trial-info {
    width: 60%;
    margin-left: 1.1rem;

    h4 {
      text-transform: uppercase;
      font-family: "cera_pro_medium", Arial, sans-serif;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    ul {
      font-family: "cera_pro_regular", Arial, sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 0.8rem;
      line-height: 1.4;
      list-style-position: outside;
      padding: 0;
      margin-left: 0.9rem;
    }
  }
}
</style>
