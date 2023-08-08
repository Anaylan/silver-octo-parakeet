<template>
	<LazyNuxtLayout>
		<LazyNuxtPage />
	</LazyNuxtLayout>
</template>

<script setup lang="ts">
type ITheme = 'light' | 'dark';

const setColorMode = (newTheme : ITheme) => {
	useColorMode().preference = newTheme;
}
</script>
