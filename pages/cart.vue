<template>
  <div class="card">
    <div class="card-body">
      <h1>Корзина товаров</h1>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr v-for="item in $store.state.cart" :key="item.product.id">
            <td>
              {{ item.product.title }}
            </td>
            <td>
              {{ item.product.price }} руб.
            </td>
            <td>
              {{ item.quantity }}
            </td>
            <td>
              {{ item.product.price * item.quantity }} руб.
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" style="text-align: right">
              <strong>Итого: {{ $store.getters.cartTotalPrice }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
      <form action="">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input
            v-validate="'required'"
            @blur="$validator.validate('name')"
            data-vv-name="name"
            data-vv-as="ваше имя"
            id="name"
            class="form-control"
            type="text"
          >
        </div>
        <div class="form-group">
          <label for="phone">Ваш телефон</label>
          <input
            v-validate="'required'"
            @blur="$validator.validate('phone')"
            data-vv-name="phone"
            data-vv-as="ваш телефон"
            id="phone"
            class="form-control"
            type="text"
          >
        </div>
        <button class="btn btn-primary">
          Оформить заказ
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped>

</style>
