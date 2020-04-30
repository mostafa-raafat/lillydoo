<template>
  <section class="landing-header h-text-center">
    <div class="landing-header__info">
      <h1 class="landing-header__title h-text-center">Dein gratis Testpaket</h1>
      <Button
        buttonLink="/de/testpaket#trialbox"
        buttonText="Wähle Deine Größe"
      />
    </div>
  </section>
</template>

<script>
import Button from "@/components/common/Button.vue";
export default {
  name: "Header",
  components: {
    Button
  }
};
</script>

<style scoped lang="scss">
.landing-header {
  display: flex;
  min-height: 35.25rem;
  padding-top: 0;
  padding-bottom: 0;
  background-image: url(~@/assets/images/header/header-trialbox-mobile.jpg);
  background-color: $darkWhite;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @include for_breakpoint(min-width, tablet) {
    background-image: url(~@/assets/images/header/header-trialbox-tablet.jpg);
  }

  @include for_breakpoint(min-width, desktop) {
    background-image: url(~@/assets/images/header/header-trialbox-desktop.jpg);
  }

  @include for_breakpoint(min-width, retina) {
    justify-content: flex-end;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    padding: 2.5rem 1rem 1.5rem 1rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);

    @include for_breakpoint(min-width, retina) {
      padding: 2.5rem 2.5rem 1.5rem 2.5rem;
      width: 21rem;
      margin-right: 3rem;
      align-self: center;
    }

    .landing-header__title {
      margin: 0;
      margin-bottom: 25px;
      font-size: 2.2rem;
      line-height: 1.1;
    }

    .landing-header__button {
      margin-top: 2rem;
    }
  }
}
</style>
