<template>
  <div class="py-12 px-6  bg-gray rounded-2xl flex flex-col  ">
    <h1 class="mb-6 text-2xl font-medium text-center">Выберите рассылки, которые подходят именно вам</h1>
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