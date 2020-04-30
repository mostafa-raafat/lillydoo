<template>
  <section class="package-content row h-bright">
    <Title titleText="Dein Testpaket enthält" />
    <div class="package-content__items">
      <template v-for="(packageContentItem, index) in packageContentItemx">
        <PackageContentItem
          :key="index"
          :packageContentImage="packageContentItem.packageContentImage"
          :packageContentImageAlt="packageContentItem.packageContentImageAlt"
          :packageContentName="packageContentItem.packageContentName"
          :packageContentItems="packageContentItem.packageContentItems"
        />
      </template>
    </div>
  </section>
</template>

<script>
import store from "@/store";

import PackageContentItem from "./PackageContentItem.vue";
import Title from "@/components/common/Title.vue";
export default {
  name: "TestimonialItem",
  components: {
    PackageContentItem,
    Title
  },
  data: function() {
    return {
      packageContentSensitiveItems: [
        {
          packageContentImage: require("@/assets/images/wipes/lillydoo-little-blowballs-design-preview-tp.png"),
          packageContentImageAlt: "Lillydoo Windel Design - Little Blowballs",
          packageContentName: "10 Lillydoo Windeln",
          packageContentItems: [
            "0 % Parfüme &amp; Lotionen, 100 % LILLYDOO Schutz",
            "Extra weich und super bequem",
            "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
          ]
        },
        {
          packageContentImage: require("@/assets/images/wipes/sensitive-wipes-15-small.jpg"),
          packageContentImageAlt: "LILLYDOO 15 sensitive Feuchttücher",
          packageContentName: "15 sensitive wet wipes",
          packageContentItems: [
            "0% perfumes & PEGs, 100% biodegradable",
            "Extra thick and compostable cloth"
          ]
        }
      ],
      packageContentNotSensitiveItems: [
        {
          packageContentImage: require("@/assets/images/wipes/lillydoo-little-blowballs-design-preview-tp.png"),
          packageContentImageAlt: "Lillydoo Windel Design - Little Blowballs",
          packageContentName: "10 Lillydoo Windeln",
          packageContentItems: [
            "0 % Parfüme &amp; Lotionen, 100 % LILLYDOO Schutz",
            "Extra weich und super bequem",
            "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
          ]
        },
        {
          packageContentImage: require("@/assets/images/wipes/water-wipes-15-small.png"),
          packageContentImageAlt: "LILLYDOO 15 Feuchttücher mit 99% Wasser",
          packageContentName: "15 Feuchttücher mit 99 % Wasser",
          packageContentItems: [
            "0 % Parfüme &amp; PEGs, 100 % biologisch abbaubar",
            "Natürlich rein, extra mild, Alternative zu &quot;Wasser &amp;Watte&quot;"
          ]
        }
      ]
    };
  },
  computed: {
    packageContentItemx() {
      if (store.state.activeId <= 3) {
        return this.packageContentNotSensitiveItems;
      } else {
        return this.packageContentSensitiveItems;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.package-content {
  width: 100%;
  @include for_breakpoint(max-width, desktop) {
    padding: 1.2rem 0 1.2rem 0;
  }

  &__items {
    display: flex;
    padding-left: 0.938rem;
    padding-right: 0.938rem;
    padding-top: 2rem;

    @include for_breakpoint(max-width, desktop) {
      flex-direction: column;
      padding: 2rem 2% 0 2rem;
    }
  }
}
</style>
