<template>
  <div id="app">
    <Header />
    <TrialPack />
    <LillydooValue />
    <PackageContent />
    <Testimonials />
    <FreeTest />
    <div class="blowballs"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TrialPack from "@/components/TrialPack/TrialPack.vue";
import Testimonials from "@/components/Testimonials/Testimonials.vue";
import FreeTest from "@/components/FreeTest.vue";
import PackageContent from "@/components/PackageContent/PackageContent.vue";
import LillydooValue from "@/components/LillydooValue/LillydooValue.vue";
export default {
  name: "App",
  components: {
    Header,
    TrialPack,
    LillydooValue,
    PackageContent,
    Testimonials,
    FreeTest
  }
};
</script>

<style lang="scss">
html,
body {
  font-family: $primaryFont, Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  background: $white;
  height: 100%;
  color: $black;
  cursor: auto;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

.blowballs {
  background-image: url(~@/assets/images/pusteblume-pattern-04.png);
  background-repeat: repeat-x;
  background-size: contain;
  width: 100%;
  height: 25%;
  max-height: 254px;
  @media only screen and (min-width: 1280px) {
    height: 300px;
  }
}
</style>
