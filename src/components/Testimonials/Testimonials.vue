<template>
  <section class="testimonials row h-dark">
    <Title titleText="Was andere über unsere Windeln sagen" />
    <div class="testimonials-items">
      <template v-for="(testimonialsItem, index) in testimonialsItems">
        <TestimonialItem
          :key="index"
          :testimonialImage="testimonialsItem.testimonialImage"
          :testimonialImageAlt="testimonialsItem.testimonialImageAlt"
          :testimonialText="testimonialsItem.testimonialText"
          :testimonialAuthorName="testimonialsItem.testimonialAuthorName"
          :testimonialAuthorRole="testimonialsItem.testimonialAuthorRole"
          :testimonialAuthorLink="testimonialsItem.testimonialAuthorLink"
        />
      </template>
    </div>
  </section>
</template>

<script>
import TestimonialItem from "./TestimonialItem.vue";
import Title from "@/components/common/Title.vue";
export default {
  name: "App",
  components: {
    TestimonialItem,
    Title
  },
  data: function() {
    return {
      testimonialsItems: [
        {
          testimonialImage: require("@/assets/images/testimonial/testimonial-uwe-gensheimer.png"),
          testimonialImageAlt: "Uwe Gensheimer",
          testimonialText: `"Wir lieben das praktische Windelabo von LILLYDOO, das uns sogar
              bis nach Frankreich versorgt. Dazu bleibt mit diesen Windeln bei
              unserem kleinen Racker – trotz viel Bewegung – alles schön
              trocken."`,
          testimonialAuthorName: "Uwe Gensheimer –",
          testimonialAuthorRole:
            "Kapitän der deutschen Handball-Nationalmannschaft",
          testimonialAuthorLink: "https://www.facebook.com/uwegensheimer/"
        },
        {
          testimonialImage: require("@/assets/images/testimonial/testimonial-nina-bott.png"),
          testimonialImageAlt: "Nina Bott",
          testimonialText: `"Ehrlich gesagt hattet ihr mich schon beim Design – aber seit mein
              Langschläfer auch morgens noch ganz trocken ist, will ich keine
              andere Windel mehr für meinen Lio!"`,
          testimonialAuthorName: "Nina Bott –",
          testimonialAuthorRole: "Schauspielerin",
          testimonialAuthorLink: "http://ninabott.de/"
        },
        {
          testimonialImage: require("@/assets/images/testimonial/testimonial-mari-baby-kind-meer.png"),
          testimonialImageAlt: "Mari – Bloggerin",
          testimonialText: `"Die LILLYDOO Windeln gefallen uns besser als alle anderen
              Windeln, die wir zuvor ausprobiert haben. Und das waren mit drei
              Kindern so einige. Wir sind absolut begeistert!"`,
          testimonialAuthorName: "Mari – Bloggerin",
          testimonialAuthorRole: "Baby, Kind &amp; Meer",
          testimonialAuthorLink: "http://www.babykindundmeer.de/"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.testimonials {
  .testimonials-items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 2rem;
  }
}
</style>
