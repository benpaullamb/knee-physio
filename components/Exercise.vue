<template>
  <div>
    <h2 class="nhsuk-heading-l" :id="title.split('. ')[1].toLowerCase().replace(/\s/gi, '-')">{{ title }}</h2>

    <figure class="nhsuk-image">
      <img class="nhsuk-image__img" :src="image.url" :alt="image.alt" />
      <figcaption class="nhsuk-image__caption">{{ image.caption }}</figcaption>
    </figure>

    <details class="nhsuk-details">
      <summary class="nhsuk-details__summary">
        <span class="nhsuk-details__summary-text"> How to perform {{ title.split('. ')[1].toLowerCase() }} </span>
      </summary>
      <div class="nhsuk-details__text">
        {{ instructions }}
      </div>
    </details>

    <Timer
      v-if="reps.hold > 1"
      :initialReps="reps.count"
      :initialHold="reps.hold"
      :initialRest="reps.rest"
      :exercise="title"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    reps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
