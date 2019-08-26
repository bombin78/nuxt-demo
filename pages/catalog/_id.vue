<template>
  <main>
    <h1>{{ product.title }}</h1>
    {{ product.brief }}
    <hr>
    {{ product.price }} руб.
    <hr>
    <button class="btn btn-success" @click="addToCart">
      Добавить в корзину
    </button>
    <div v-if="showCartMessage" class="alert alert-success">
      Товар успешно добавлен в корзину
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showCartMessage: false,
    };
  },
  computed: {
    product() {
      // через параметры роутера здесь доступен id (формируется динамически из названия файла)
      return this.$store.state.products.find(
        (item) => item.id === parseInt(this.$route.params.id, 10),
      );
    },
  },
  async asyncData({ store }) {
    await store.dispatch("LOAD_PRODUCTS");
  },
  methods: {
    async addToCart() {
      await this.$store.dispatch("ADD_TO_CART", this.product);
      this.showCartMessage = true;
    },
  },
  head() {
    return {
      title: this.product.title,
    };
  },
};
</script>
