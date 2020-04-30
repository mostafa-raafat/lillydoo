<template>
  <div class="testimonial-item">
    <div class="testimonial-img">
      <img :src="testimonialImage" :alt="testimonialImageAlt" />
    </div>
    <div class="testimonial-content">
      <blockquote>
        <p>{{ testimonialText }}</p>
        <p class="quote-author">
          {{ testimonialAuthorName }}
          <a
            :href="testimonialAuthorLink"
            target="_blank"
            rel="noreferrer noopener"
            v-html="testimonialAuthorRole"
          ></a>
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialItem",
  props: {
    testimonialImage: {
      type: String,
      required: true
    },
    testimonialImageAlt: {
      type: String,
      required: false
    },
    testimonialText: {
      type: String,
      required: true
    },
    testimonialAuthorName: {
      type: String,
      required: true
    },
    testimonialAuthorRole: {
      type: String,
      required: true
    },
    testimonialAuthorLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.testimonial-item {
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @include for_breakpoint(max-width, desktop) {
    width: 94%;
  }

  @include for_breakpoint(min-width, retina) {
    width: 66.66667%;
  }

  .testimonial-img {
    width: 18%;
    margin-right: 45px;

    img {
      width: 94%;
    }
  }

  .testimonial-content {
    width: 80%;

    .quote-author {
      font-weight: bold;
      font-family: $secondaryFont, Arial, sans-serif;
    }
  }
}
</style>
