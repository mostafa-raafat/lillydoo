<template>
  <div class="trial-pack__choose-size">
    <h2 class="trial-pack__title">Entdecke unsere Hautfreundlichkeit</h2>
    <div class="trial-pack__button-container">
      <p class="trial-pack__sub-title">Wähle Deine Größe</p>
      <div class="trial-pack__button-slider">
        <template v-for="(trialPackButtonItem, index) in trialPackButtonItems">
          <TrialPackButtonItem
            :key="index"
            :trialPacksize="trialPackButtonItem.trialPacksize"
            :trialPackWeight="trialPackButtonItem.trialPackWeight"
            :trialPackId="trialPackButtonItem.trialPackId"
          />
        </template>
      </div>
    </div>
    <p>
      Teste jetzt unsere hautfreundlichen Windeln und erhalte unsere
      Feuchttücher mit 99 % Wasser zu Größe 1 - 3 oder die Sensitiven
      Feuchttücher zu Größe 4 - 5.
    </p>
    <ul class="trial-pack__product-list">
      <li>Wir zahlen die Produkte, Du nur den Versand.</li>
      <li class="primary-color">
        Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro
        Lieferung.
      </li>
      <li>
        Preise inkl. MwSt., ggf. zzgl.
        <a
          href="/de/zahlung-und-versand"
          target="_blank"
          rel="noreferrer noopener"
          >Versandkosten</a
        >
      </li>
    </ul>
    <Button buttonLink="#" buttonText="In den Warenkorb legen" />
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import TrialPackButtonItem from "./TrialPackButtonItem.vue";
export default {
  name: "TrialPackChooseSize",
  components: {
    Button,
    TrialPackButtonItem
  },
  data() {
    return {
      trialPackButtonItems: [
        {
          trialPacksize: "10",
          trialPackWeight: "(2-5 KG)",
          trialPackId: 1
        },
        {
          trialPacksize: "20",
          trialPackWeight: "(4-8 KG)",
          trialPackId: 2
        },
        {
          trialPacksize: "30",
          trialPackWeight: "(6-10 KG)",
          trialPackId: 3
        },
        {
          trialPacksize: "40",
          trialPackWeight: "(9-14 KG)",
          trialPackId: 4
        },
        {
          trialPacksize: "50",
          trialPackWeight: "(11-16 KG)",
          trialPackId: 5
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.trial-pack__choose-size {
  width: 83%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2% 1.7rem 15%;

  @include for_breakpoint(max-width, desktop) {
    width: 92%;
    padding: 6% 4% 0 4%;
  }

  .trial-pack__title {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 10px;
    font-weight: normal;
    margin-top: 0.5rem;
  }

  .trial-pack__button-container {
    width: 100%;

    .trial-pack__sub-title {
      text-transform: uppercase;
      margin-top: 0;
    }

    .trial-pack__button-slider {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;

      @include for_breakpoint(max-width, desktop) {
        justify-content: flex-start;
        flex-flow: wrap;
        margin: 0;
      }
    }
  }

  .trial-pack__product-list {
    font-family: $primaryFont, Arial, sans-serif;
    font-size: 0.85rem;
    line-height: 1.4;
    list-style-position: outside;
    padding: 0;
    margin: 0 0 2rem 1.1rem;
  }
  .button {
    width: 100%;
    margin: 15px 0;
  }
}
</style>
