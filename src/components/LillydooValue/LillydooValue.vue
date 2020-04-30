<template>
  <section class="lillydoo-value row h-dark">
    <Title titleText="Wie es funktioniert" />
    <div class="lillydoo-value__trial-steps">
      <template v-for="(lillydooValueStep, index) in lillydooValueSteps">
        <LillydooValueStep
          :key="index"
          :stepImage="lillydooValueStep.stepImage"
          :stepTitle="lillydooValueStep.stepTitle"
          :stepDescription="lillydooValueStep.stepDescription"
          :learnMore="lillydooValueStep.learnMore"
        />
      </template>
    </div>
  </section>
</template>

<script>
import LillydooValueStep from "./LillydooValueStep.vue";
import Title from "../common/Title.vue";
export default {
  name: "App",
  components: {
    LillydooValueStep,
    Title
  },
  data: function() {
    return {
      lillydooValueSteps: [
        {
          stepImage: require("@/assets/images/cart-summary/lillydoo-your-trialbox-icon.svg"),
          stepTitle: "Dein Testpaket",
          stepDescription:
            "Wir schenken Dir die Produkte,<br />Du übernimmst nur das Porto."
        },
        {
          stepImage: require("@/assets/images/cart-summary/lillydoo-your-flexibility-icon.svg"),
          stepTitle: "Deine Flexibilität",
          stepDescription:
            "Erfahre hier mehr über das <br />LILLYDOO Windel-Abo.",
          learnMore: {
            link: "/de/windel-abo",
            value: "Erfahre hier mehr über das <br />LILLYDOO Windel-Abo."
          }
        },
        {
          stepImage: require("@/assets/images/cart-summary/lillydoo-your-subscription-icon.svg"),
          stepTitle: "Deine Monatsbox",
          stepDescription:
            "Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oderweitere Produkte hinzufügen."
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.lillydoo-value {
  width: 100%;
  .lillydoo-value__trial-steps {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1.4rem;
    width: 100%;
    padding-top: 2rem;
    @include for_breakpoint(max-width, desktop) {
      flex-direction: column;
    }
  }
}
</style>
