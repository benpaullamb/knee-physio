<template>
  <details class="nhsuk-details">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text"> Timer </span>
    </summary>
    <div class="nhsuk-details__text">
      <span class="timer__instruction nhsuk-body nhsuk-u-margin-bottom-3">{{
        nextInstructionText || defaultInstruction
      }}</span>

      <div class="timer__bar nhsuk-u-margin-bottom-3">
        <span class="nhsuk-body">{{ formatTime(time) }}</span>
        <div class="timer__progress" :style="`grid-template-columns: ${percentElapsed}% ${percentLeft}%;`">
          <div class="timer__elapsed"></div>
          <div class="timer__left"></div>
        </div>
        <span class="nhsuk-body">{{ this.formatTime(totalDuration) }}</span>
      </div>

      <button @click="startTimer" :disabled="timer" class="nhsuk-button">Start</button>
      <button @click="pauseTimer" class="nhsuk-button nhsuk-button--secondary">Pause</button>
      <button @click="resetTimer" class="nhsuk-button nhsuk-button--secondary">Reset</button>

      <a
        @click="isSettingsOpen = !isSettingsOpen"
        class="timer__settings nhsuk-link nhsuk-link--no-visited-state nhsuk-u-margin-bottom-3"
        >{{ isSettingsOpen ? 'Close settings' : 'Change this exercises settings' }}</a
      >

      <ExerciseSettings
        v-if="isSettingsOpen"
        @onSettingsChange="onSettingsChange"
        :initialReps="reps"
        :initialHold="hold"
        :initialRest="rest"
      />
    </div>
  </details>
</template>

<script>
import ExerciseSettings from './ExerciseSettings.vue';

export default {
  props: {
    initialReps: {
      type: Number,
      required: true,
    },
    initialHold: {
      type: Number,
      required: true,
    },
    initialRest: {
      type: Number,
      default: 5,
    },
  },

  components: {
    ExerciseSettings,
  },

  data() {
    return {
      reps: 0,
      hold: 0,
      rest: 0,

      isSettingsOpen: false,

      defaultInstruction:
        'When you start the timer the next instruction will be displayed here as well as being spoken to you.',
      nextInstructionText: '',
      nextInstructionSpeech: '',
      voicePitch: 1.5,

      time: 0,
      prepTime: 20,
      nextEventTime: 0,
      eventType: 'hold',
      timer: null,
      finishedTimer: null,
    };
  },

  computed: {
    percentElapsed() {
      return Math.floor((this.time / this.totalDuration) * 100);
    },

    percentLeft() {
      return 100 - this.percentElapsed;
    },

    totalDuration() {
      return this.prepTime + this.reps * this.hold + (this.reps - 1) * this.rest;
    },
  },

  mounted() {
    let settings = window.localStorage.getItem('settings');
    if (settings) {
      const { reps, hold, rest } = JSON.parse(settings);
      this.reps = reps;
      this.hold = hold;
      this.rest = rest;
    } else {
      this.reps = this.initialReps;
      this.hold = this.initialHold;
      this.rest = this.initialRest;
    }
  },

  methods: {
    startTimer() {
      if (this.timer) {
        return;
      }

      if (this.finishedTimeout) {
        clearTimeout(this.finishedTimeout);
        this.finishedTimeout = null;
      }

      if (this.time === 0) {
        this.setEvent('prep');
      }

      this.timer = setInterval(() => {
        this.time += 1;

        if (this.time === this.totalDuration) {
          this.onTimerFinished();
          return;
        }

        if (this.time === this.nextEventTime) {
          if (this.eventType === 'hold') {
            this.setEvent('rest');
          } else if (this.eventType === 'rest' || this.eventType === 'prep') {
            this.setEvent('hold');
          }
        }
      }, 1000);
    },

    pauseTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },

    resetTimer() {
      this.nextInstructionText = this.defaultInstruction;
      clearInterval(this.timer);
      this.timer = null;
      this.time = 0;
      this.nextEventTime = 0;
    },

    onTimerFinished() {
      this.setNextInstruction('Well done, you have finished this exercise.', 'Finished');
      this.say();
      this.pauseTimer();
      this.finishedTimeout = setTimeout(() => this.resetTimer(), 3000);
    },

    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds - mins * 60;
      const padMins = mins < 10 ? `0${mins}` : mins;
      const padSecs = secs < 10 ? `0${secs}` : secs;
      return `${padMins}:${padSecs}`;
    },

    setEvent(type) {
      this.eventType = type;

      switch (type) {
        case 'prep':
          this.nextEventTime += this.prepTime;
          this.setNextInstruction(`You have ${this.prepTime} seconds to get into position.`);
          break;
        case 'hold':
          this.nextEventTime += this.hold;
          this.setNextInstruction('Perform the exercise.', 'Go');
          break;
        case 'rest':
          this.nextEventTime += this.rest;
          this.setNextInstruction(`Rest for ${this.rest} seconds.`, 'Rest');
          break;
      }

      this.say();
    },

    setNextInstruction(text, speech) {
      this.nextInstructionText = text;
      this.nextInstructionSpeech = speech ? speech : text;
    },

    say() {
      const utterance = new SpeechSynthesisUtterance(this.nextInstructionSpeech);
      utterance.pitch = this.voicePitch;
      speechSynthesis.speak(utterance);
    },

    onSettingsChange({ reps, hold, rest }) {
      this.reps = reps;
      this.hold = hold;
      this.rest = rest;
    },
  },
};
</script>

<style lang="scss">
.timer__instruction {
  display: block;
}

.timer__bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}

.timer__progress {
  height: 6px;
  display: grid;
}

.timer__elapsed {
  background: $color_nhsuk-blue;
}

.timer__left {
  background: $color_nhsuk-grey-3;
}

.timer__settings {
  display: block;
}

.timer__settings:hover {
  cursor: pointer;
}
</style>
