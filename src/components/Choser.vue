<template>
  <div class="flex gap-6 ">
        <div @click="choserState = 1" :class="choserState === 1 ? 'cursor-pointer border-b-2 pb-[18px] text-base text-blueText' : 'mb-[18px] text-base text-grayText2 cursor-pointer'">Рассылки</div>
        <div @click="choserState = 2" :class="choserState === 2 ? 'cursor-pointer border-b-2 pb-[18px] text-base text-blueText' : 'mb-[18px] text-base text-grayText2 cursor-pointer'">Соцсети</div>
        <div @click="choserState = 3" :class="choserState === 3 ? 'cursor-pointer border-b-2 pb-[18px] text-base text-blueText' : 'mb-[18px] text-base text-grayText2 cursor-pointer'">Мессенджеры</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            choserState : 1,
        }
    }
}
</script>

<style>

</style>