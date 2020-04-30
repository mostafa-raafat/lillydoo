<template>
  <section class="free-test row bright">
    <Title titleText="Überzeug Dich selbst" />
    <Button buttonLink="#" buttonText="Jetzt gratis testen" />
  </section>
</template>

<script>
import Title from "@/components/common/Title.vue";
import Button from "@/components/common/Button.vue";
export default {
  name: "FreeTest",
  components: {
    Title,
    Button
  }
};
</script>

<style scoped lang="scss">
.free-test {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: normal;
    margin-bottom: 10px;

    @include for_breakpoint(max-width, desktop) {
      padding-left: 0.938rem;
      padding-right: 0.938rem;
    }

    @include for_breakpoint(max-width, retina) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .button {
    @include for_breakpoint(max-width, desktop) {
      width: 92%;
    }
  }
}
</style>
