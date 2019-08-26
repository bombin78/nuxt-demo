<template>
  <div class="container">
    <template v-if="error.statusCode === 404">
      <h1>Страница не найдена</h1>
      <p>
        Ошибка 404. Страница удалена или никогда не существовала.
        <nuxt-link to="/">
          Вернуться на главную
        </nuxt-link>
      </p>
    </template>
    <template v-else>
      <h1>Ууупс! Ошибочка вышла</h1>
      <p>Что-то пошло нет так и мы ничего не можем с этим поделать :(</p>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
