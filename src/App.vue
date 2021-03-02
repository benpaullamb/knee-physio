<template>
	<div id="app">
		<section class="timer"></section>

		<section class="info">
			<div class="info__container">
				<exercise-image
					v-for="(exercise, i) in exercises"
					:key="exercise.name"
					:title="`#${i + 1} ${exercise.name}`"
					:image="exercise.image"
					:reps="exercise.reps"
					:instructions="exercise.instructions"
				/>
			</div>
		</section>
	</div>
</template>

<script>
import ExerciseImage from './components/ExerciseCard.vue';
import exercises from './exercises.json';

export default {
	name: 'App',
	components: {
		ExerciseImage,
	},
	data() {
		return {
			exercises,
		};
	},
};
</script>

<style>
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: sans-serif;
}

.info {
	display: flex;
	justify-content: center;
}

.info__container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto auto;
	gap: 2rem;
}
</style>
