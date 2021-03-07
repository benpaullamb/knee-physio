<template>
  <div>
    <h2 class="nhsuk-heading-l" :id="title.split('. ')[1].toLowerCase().replace(/\s/gi, '-')">{{ title }}</h2>

    <figure class="nhsuk-image">
      <img class="nhsuk-image__img" :src="image" :alt="imageAlt" />
      <figcaption class="nhsuk-image__caption">{{ caption }}</figcaption>
    </figure>

    <details class="nhsuk-details">
      <summary class="nhsuk-details__summary">
        <span class="nhsuk-details__summary-text"> How to perform {{ title.split('. ')[1].toLowerCase() }} </span>
      </summary>
      <div class="nhsuk-details__text">
        {{ instructions }}
      </div>
    </details>
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
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
