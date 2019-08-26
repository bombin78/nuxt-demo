<template>
  <div>
    Товаров в корзине: {{ cartItemsCount }} на сумму {{ cartTotalPrice }} руб.
    <nuxt-link v-if="cartItemsCount > 0" to="/cart">
      Перейти в корзину
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartBlock",
  computed: {
    ...mapGetters(["cartItemsCount", "cartTotalPrice"]),
  },
  async mounted() {
    await this.$store.dispatch("LOAD_CART");
  },
};
</script>

<style scoped>

</style>
