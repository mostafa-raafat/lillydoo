<template>
  <div class="trial-pack__images">
    <img
      class="trial-pack__oekotex-logo"
      src="~@/assets/images/trialbox/oekotex_green_de.svg"
      alt="Oeko-Tex Certificate"
    />
    <img
      class="trial-pack__lillydoo-paket-images"
      :src="trialPackActiveImage"
    />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "TrialPackImagesSlider",
  props: {
    trialPackIds: {
      type: Object,
      required: true
    }
  },
  computed: {
    trialPackActiveImage() {
      return this.trialPackIds[store.state.activeId];
    }
  }
};
</script>

<style scoped lang="scss">
.trial-pack__images {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 1%;
  height: fit-content;

  .trial-pack__lillydoo-paket-images {
    width: 100%;
    margin-left: 9%;
    @include for_breakpoint(max-width, desktop) {
      margin-left: 0%;
    }
  }

  .trial-pack__oekotex-logo {
    position: absolute;
    width: 24.4%;
    top: 12%;
    left: 4.3%;
    z-index: 10;
    box-shadow: -2px 2px 6px -3px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    margin-left: 9%;
    @include for_breakpoint(max-width, desktop) {
      margin-left: 4.2%;
    }
  }
}
</style>
