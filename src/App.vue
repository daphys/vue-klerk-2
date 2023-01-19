<template>
  <main class="flex flex-col items-center min-h-screen bg-gray-100 p-14">
    <Logo />
    <bread-crumbs />
    <h1 class="sm:text-title text-xxl font-medium mb-8 ">Подписки «Клерка»</h1>
    <Main />
    <img class="mt-12" src="./assets/icons/meme.svg" alt="">
  </main>
</template>

<script>
import BreadCrumbs from './components/BreadCrumbs.vue';
import Logo from './components/Logo.vue';
import Main from './components/Main.vue';

export default {
  components: { Logo, BreadCrumbs, Main, },
};
</script>
