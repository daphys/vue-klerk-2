<template>
  <main class="flex flex-col items-center min-h-screen sm:pb-0 bg-gray-100 sm:p-14">
    <Logo />
    <bread-crumbs />
    <h1 class="sm:text-title text-xxl font-medium sm:mb-8 mb-6 ">Подписки «Клерка»</h1>
    <Choser />
    <Main />
    <img class="mt-12 mb-12" src="./assets/icons/meme.svg" alt="">
  </main>
</template>

<script>
import BreadCrumbs from './components/BreadCrumbs.vue';
import Choser from './components/Choser.vue';
import Logo from './components/Logo.vue';
import Main from './components/Main.vue';

export default {
  components: { Logo, BreadCrumbs, Main, Choser, },
};
</script>
