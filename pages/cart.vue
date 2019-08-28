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
      <form action="" @submit.prevent="makeOrder">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input
            id="name"
            v-model="$v.name.$model"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': $v.name.$error }"
            type="text"
          >
        </div>
        <div class="form-group">
          <label for="phone">Ваш телефон</label>
          <input
            id="phone"
            v-model="$v.phone.$model"
            name="phone"
            class="form-control"
            :class="{ 'is-invalid': $v.phone.$error}"
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
import { required } from "vuelidate/lib/validators";

export default {
  name: "Cart",
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
      async makeOrder() {
          if (this.$v.$invalid) {
              this.$v.$touch();
          } else {
            const result = await this.$store.dispatch('MAKE_ORDER', {
                name: this.name,
                phone: this.phone,
            });
            if(result.hasError){
                alert(result.message);
            } else {
                alert("Ваш заказ принят");
            }
          }
      },
  },
  validations: {
    name: {
      required,
    },
    phone: {
      required,
    },
  },
};
</script>

<style scoped>

</style>
