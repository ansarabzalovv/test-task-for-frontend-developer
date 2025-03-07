<template>
    <v-container>
      <h1 class="mb-4">Избранное</h1>
      <v-card v-if="favorites.length === 0" class="pa-4">
        <v-card-title>Избранных товаров нет</v-card-title>
      </v-card>
      <v-row v-else>
        <v-col
          v-for="product in favorites"
          :key="product.id"
          md="4"
        >
          <v-card>
            <v-img :src="product.image" height="200px"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }}₸</v-card-subtitle>
            <v-card-actions>
              <v-btn @click="toggleFavorite(product)" color="red">Удалить</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useAppStore } from "@/stores/app";
  
  const store = useAppStore();
  const { favorites, toggleFavorite } = store;
  </script>
  