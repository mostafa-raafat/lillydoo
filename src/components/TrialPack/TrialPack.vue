<template>
  <section class="trial-pack row h-bright">
    <TrialPackImagesSlider :trialPackIds="trialPackIds" />
    <TrialPackChooseSize />
  </section>
</template>

<script>
import TrialPackChooseSize from "./TrialPackChooseSize.vue";
import TrialPackImagesSlider from "./TrialPackImagesSlider.vue";
export default {
  name: "TrialPack",
  components: {
    TrialPackChooseSize,
    TrialPackImagesSlider
  },
  data: function() {
    return {
      trialPackIds: {
        1: require("@/assets/images/trialbox/lillydoo-testpaket-10.jpg"),
        2: require("@/assets/images/trialbox/lillydoo-testpaket-20.jpg"),
        3: require("@/assets/images/trialbox/lillydoo-testpaket-30.jpg"),
        4: require("@/assets/images/trialbox/lillydoo-testpaket-40.jpg"),
        5: require("@/assets/images/trialbox/lillydoo-testpaket-50.jpg")
      }
    };
  }
};
</script>

<style scoped lang="scss">
.trial-pack {
  display: flex;
  padding-bottom: 2rem;

  @include for_breakpoint(max-width, desktop) {
    flex-direction: column;
  }
}
</style>
