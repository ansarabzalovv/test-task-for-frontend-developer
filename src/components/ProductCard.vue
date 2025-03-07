<template>
	<v-card>
		<v-img :src="product.image" height="200px"></v-img>
		<v-card-title>{{ product.name }}</v-card-title>
		<v-card-subtitle>{{ product.price }}₸</v-card-subtitle>
		<v-card-text>{{ product.category }}</v-card-text>
		<v-card-actions>
			<v-btn @click="addToCart(product)">Добавить в корзину</v-btn>
			<v-btn @click="toggleFavorite(product)" icon>
				<v-icon>{{ isFavorite(product) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { useAppStore } from '@/stores/app';

const props = defineProps({
	product: Object
});

const store = useAppStore();
const { addToCart, toggleFavorite, isFavorite } = store;
</script>
