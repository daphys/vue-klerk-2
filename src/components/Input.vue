<template>
    <form class="max-w-[928px] m-auto w-full ">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative mb-[18px]"> 
            <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-br-full rounded-tr-full rounded-tl-2xl rounded-bl-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Электронная почта" required>
            <button type="submit" class="text-white absolute right-0 bottom-0.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Подписаться</button>
        </div>
            <div class="flex gap-2 items-center mb-8">
            <label class="relative inline-flex items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <p class="text-sm ">Подписаться на все рассылки</p>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>