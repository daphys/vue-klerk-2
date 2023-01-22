<template>
  <div class="sm:py-12 sm:px-6 py-8 px-4 bg-gray rounded-2xl flex flex-col  ">
    <h1 class="sm:mb-6 mb-4 text-2xl font-medium sm:text-center">Выберите рассылки, которые подходят именно вам</h1>
    <Input />
    <news-list />
  </div>
</template>

<script>
import Input from './Input.vue';
import NewsList from './NewsList.vue';
export default {
  components: { NewsList, Input },

}
</script>

<style>

</style>