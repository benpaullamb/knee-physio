<template>
  <div>
    <Header />

    <Content>
      <h1 class="nhsuk-heading-xl">Knee Physio</h1>

      <ContentsList :items="exerciseSections" />

      <Exercise
        v-for="(exercise, i) in exercises"
        :key="exercise.name"
        :title="`${i + 1}. ${exercise.name}`"
        :image="exercise.image"
        :imageAlt="exercise.name"
        :caption="exercise.extra"
        :instructions="exercise.instructions"
      />
    </Content>

    <Footer />
  </div>
</template>

<script>
import exercises from '~/assets/exercises.json';

export default {
  data() {
    return {
      exercises,
    };
  },

  computed: {
    exerciseSections() {
      return this.exercises.map((exercise) => {
        return {
          text: exercise.name,
          link: `#${exercise.name.toLowerCase().replace(/\s/gi, '-')}`,
        };
      });
    },
  },
};
</script>

<style></style>
