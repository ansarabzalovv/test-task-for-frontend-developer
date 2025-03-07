<template>
	<v-container class="h-100">
		<v-row>
			<v-col md="3">
				<v-card>
					<v-card-title>Фильтры</v-card-title>
					<v-card-text>
						<v-select
							v-model="selectedCategory"
							:items="categories"
							label="Выберите категорию"
							clearable
						></v-select>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col md="9">
				<div class="mb-4 text-h3">Все товары</div>
				<v-row>
					<v-col
						v-for="product in filteredProducts"
						:key="product.id"
						md="4"
					>
						<ProductCard :product="product" />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import useProducts from '@/composables/useProducts';
import ProductCard from '@/components/ProductCard.vue';

const { products, getAllProducts } = useProducts();
const selectedCategory = ref(null);

const categories = computed(() => {
	return [...new Set(products.value.map(p => p.category))];
});

const filteredProducts = computed(() => {
	return selectedCategory.value
		? products.value.filter(p => p.category === selectedCategory.value)
		: products.value;
});

getAllProducts();
</script>
