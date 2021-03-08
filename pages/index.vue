<template>
  <div>
    <Header />

    <Content>
      <h1 class="nhsuk-heading-xl">Knee Physio</h1>

      <ContentsList :items="exerciseSections" />

      <p class="nhsuk-body nhsuk-u-margin-bottom-8">
        Each exercise listed below includes a timer to help you keep track of the amount of time you have to hold the
        positions for, as well as the number of repetitions. If an exercise does not include a timer, you do not have to
        hold any position during that exercise.
      </p>

      <div v-for="(exercise, i) in exercises" :key="exercise.name">
        <Exercise
          :title="`${i + 1}. ${exercise.name}`"
          :image="{
            url: exercise.image,
            alt: exercise.name,
            caption: exercise.extra,
          }"
          :instructions="exercise.instructions"
          :reps="exercise.reps"
        />

        <hr
          v-if="i !== exercises.length - 1"
          class="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible"
        />
      </div>
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
