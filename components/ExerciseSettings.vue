<template>
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">What do you want this exercises settings to be?</h1>
    </legend>

    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="reps">Repetitions</label>
      <input class="nhsuk-input" v-model="reps" id="reps" name="reps" type="number" />
    </div>

    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="hold">Number of seconds to hold the position for</label>
      <input class="nhsuk-input" v-model="hold" id="hold" name="hold" type="number" />
    </div>

    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="rest">Number of seconds to rest for</label>
      <input class="nhsuk-input" v-model="rest" id="rest" name="rest" type="number" />
    </div>

    <div class="settings__save">
      <button @click="save" class="nhsuk-button nhsuk-u-margin-bottom-0 nhsuk-u-margin-right-4">Save</button>
      <span v-if="saved" class="nhsuk-body settings__msg">Saved!</span>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    initialReps: {
      type: Number,
      default: 10,
    },
    initialHold: {
      type: Number,
      default: 10,
    },
    initialRest: {
      type: Number,
      default: 5,
    },
    exercise: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      reps: 0,
      hold: 0,
      rest: 0,

      saved: false,
      savedTimeout: null,
      savedTimeoutDuration: 3000,
    };
  },

  mounted() {
    this.reps = this.initialReps;
    this.hold = this.initialHold;
    this.rest = this.initialRest;
  },

  methods: {
    save() {
      clearTimeout(this.savedTimeout);
      this.savedTimeout = null;

      this.reps = Math.max(1, Math.round(this.reps));
      this.hold = Math.max(1, Math.round(this.hold));
      this.rest = Math.max(1, Math.round(this.rest));

      const settings = {
        reps: Number(this.reps),
        hold: Number(this.hold),
        rest: Number(this.rest),
      };

      window.localStorage.setItem(`settings/${this.exercise}`, JSON.stringify(settings));

      this.$emit('onSettingsChange', settings);

      this.saved = true;

      this.savedTimeout = setTimeout(() => {
        this.saved = false;
      }, this.savedTimeoutDuration);
    },
  },
};
</script>

<style lang="scss">
.settings__save {
  display: flex;
  align-items: center;
}

.settings__msg {
  color: $color_nhsuk-green;
  font-weight: bold;
}
</style>
