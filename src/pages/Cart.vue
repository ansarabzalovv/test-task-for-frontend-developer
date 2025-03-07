<template>
    <v-container>
      <h1 class="mb-4">Корзина</h1>
      <v-card v-if="cart.length === 0" class="pa-4">
        <v-card-title>Корзина пуста</v-card-title>
      </v-card>
      <v-row v-else>
        <v-col
          v-for="product in cart"
          :key="product.id"
          md="4"
        >
          <v-card>
            <v-img :src="product.image" height="200px"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }}₸</v-card-subtitle>
            <v-card-text>Количество: {{ product.quantity }}</v-card-text>
            <v-card-actions>
              <v-btn @click="increaseQuantity(product.id)">+</v-btn>
              <v-btn @click="decreaseQuantity(product.id)">-</v-btn>
              <v-btn @click="removeFromCart(product.id)" color="red">Удалить</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="mt-4 pa-4">
        <v-card-title>Итоговая сумма: {{ totalPrice }}₸</v-card-title>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { useAppStore } from "@/stores/app";
  
  const store = useAppStore();
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice } = store;
  </script>
  