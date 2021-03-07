<template>
  <nav class="nhsuk-contents-list" role="navigation" aria-label="Sections in this guide">
    <h2 class="nhsuk-u-visually-hidden">Contents</h2>
    <ol class="nhsuk-contents-list__list">
      <li v-for="item in items" :key="item.text" class="nhsuk-contents-list__item">
        <NuxtLink class="nhsuk-contents-list__link nhsuk-link--no-visited-state" :to="item.link">{{
          item.text
        }}</NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
