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
    </div>
  </details>
</template>

<script>
export default {
  props: {
    reps: {
      type: Number,
      required: true,
    },
    holdTime: {
      type: Number,
      required: true,
    },
    restTime: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      time: 0,
      defaultInstruction:
        'When you start the timer the next instruction will be displayed here as well as being spoken to you.',
      nextInstructionText: '',
      nextInstructionSpeech: '',
      prepTime: 20,
      voicePitch: 1.5,
      timer: null,
      finishedTimer: null,
      nextEventTime: 0,
      eventType: 'hold',
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
      return this.prepTime + this.reps * this.holdTime + (this.reps - 1) * this.restTime;
    },
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
          this.nextEventTime += this.holdTime;
          this.setNextInstruction('Perform the exercise.', 'Go');
          break;
        case 'rest':
          this.nextEventTime += this.restTime;
          this.setNextInstruction(`Rest for ${this.restTime} seconds.`, 'Rest');
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
</style>
