// Utilities
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAppStore = defineStore('app', () => {
  // Корзина
  const cart = ref([]);

  const addToCart = (product) => {
    const item = cart.value.find(p => p.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter(p => p.id !== id);
  };

  const increaseQuantity = (id) => {
    const item = cart.value.find(p => p.id === id);
    if (item) item.quantity += 1;
  };

  const decreaseQuantity = (id) => {
    const item = cart.value.find(p => p.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(id);
    }
  };

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  // Избранное
  const favorites = ref([]);

  const toggleFavorite = (product) => {
    const index = favorites.value.findIndex(p => p.id === product.id);
    if (index !== -1) {
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push(product);
    }
  };

  const isFavorite = (product) => favorites.value.some(p => p.id === product.id);

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    favorites,
    toggleFavorite,
    isFavorite
  };
});
