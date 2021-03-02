<template>
	<div class="card">
		<div class="card__top">
			<img
				:src="image"
				alt="Image of a cartoon woman performing a knee exercise"
				class="card__image"
			/>
		</div>
		<div class="card__body">
			<h6 class="card__title">{{ title }}</h6>
			<span class="card__subtitle"
				>Repeat {{ reps.count }} times, hold for {{ reps.hold }} seconds</span
			>
			<p class="card__content">{{ instructions }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Object,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
.card {
	max-width: 344px;
	max-height: 510px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
}

.card:hover {
	cursor: pointer;
}

.card__top {
	height: 194px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background: #e4e6ea;
}

.card__image {
	max-width: 100%;
	max-height: 194px;
}

.card__body {
	padding: 1rem 1.5rem 1rem 1rem;
}

.card__title {
	margin-bottom: 1rem;
	font-size: 24px;
}

.card__subtitle {
	margin-bottom: 0.5rem;
	display: block;
	font-size: 16px;
	font-weight: bold;
}

.card__content {
	margin-bottom: 1rem;
	font-size: 16px;
}
</style>
