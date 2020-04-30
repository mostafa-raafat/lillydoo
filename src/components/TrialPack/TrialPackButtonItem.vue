<template>
  <div
    class="trial-pack__button-item"
    v-bind:class="{
      'trial-pack__button-item--active': trialPackId === trialPackActiveId
    }"
    v-on:click="selectedId(trialPackId)"
  >
    <p>{{ trialPackId }}</p>
    <span>{{ trialPackWeight }}</span>
  </div>
</template>
<script>
import store from "@/store";

export default {
  name: "TrialPackButtonItem",
  props: {
    trialPacksize: {
      type: String,
      required: true
    },
    trialPackWeight: {
      type: String,
      required: true
    },
    trialPackId: {
      type: Number,
      required: true
    }
  },
  computed: { trialPackActiveId: () => store.state.activeId },
  methods: {
    selectedId(activeId) {
      store.commit("selectedId", activeId);
    }
  }
};
</script>
<style lang="scss" scoped>
.trial-pack__button-item {
  border: 1px solid #7c7c7c;
  text-align: center;
  width: 30%;
  padding: 7px 5px 2px 5px;
  color: #7c7c7c !important;
  margin-right: 10px;

  @include for_breakpoint(max-width, desktop) {
    padding: 10px 5px 5px 5px;
    margin-bottom: 10px;
    width: 27.9%;
  }

  @include for_breakpoint(max-width, desktop) {
    width: 26%;
  }

  p {
    font-size: 1.1rem;
    line-height: 1;
    margin: 0;
  }

  span {
    line-height: 1;
    font-size: 0.74rem;
  }

  &:hover {
    background-color: $primaryColor;
    border-color: $primaryColor;
    color: $white !important;
    cursor: pointer;
  }
  &--active {
    background-color: $primaryColor;
    border-color: $primaryColor;
    color: $white !important;
    cursor: pointer;
  }
}
</style>
