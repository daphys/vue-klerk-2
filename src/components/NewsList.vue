<template>
    <div class="gap-6 sm:grid sm:grid-rows-2 sm:grid-flow-col flex flex-col items-center">
        
  <div v-for="(news, id) in newsSet" :key="id" class="sm:p-6 py-6 px-4 justify-between bg-white rounded-2xl shadow-main flex gap-6 items-start ">
    <div>
        <div class="flex sm:mb-0 mb-[12px] align-center justify-between">
            <div>
                <p style="font-size : 13px" class="text-grayText">{{ news.short }}</p>
                <p class=" text-xl sm:mb-2">{{ news.title }}</p>
            </div>
            <img class="sm:hidden block" width="40" height="40" :src="`src/assets/pics/${news.img}.svg`" alt="">
        </div>
        <p class="mb-4 text-grayText text-sm" v-html="news.desc" />
        <div class="mb-4 flex flex-col gap-2">
            <div class="flex gap-2" v-for="(plus,id) in news.plusSet" :key="id">
                <img src="../assets/icons/check.svg" alt="">
                <div class="text-sm">
                    {{ plus }}
                </div>
        </div>
    </div>
        <div class="flex gap-2 items-end">
            <label class="relative inline-flex items-center  cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-[#EEEEEE] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <p class="text-sm">Уже получает {{news.peopleCount}} человек</p>
        </div>
    </div>
    <img class="sm:block hidden" :src="`src/assets/pics/${news.img}.svg`" alt="">
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsSet : [
                {   
                    short : "Перед рассветом",
                    title : 'Утренний бухгалтер',
                    img : "skrepka",
                    desc : "Самые важные новости и события за день. <br/> Кратко, по делу, структурировано.",
                    peopleCount : '59 342',
                    switchState : true,
                    plusSet : [
                        'Новости для бухгалтеров, ИП и директора',
                        'Подборка статей за день'
                    ]
                },
                {   
                    short : "Раз в две недели",
                    title : 'Ножницы скидок',
                    img : "scissors",
                    desc : "Подборка самых выгодных и полезных <br/> спецпредложений от надежных компаний.",
                    peopleCount : '92 118',
                    switchState : true,
                    plusSet : [
                        'Акции и скидки от лидеров рынка',
                        'Те, кто подписался – экономят много денег '
                    ]
                },
                {   
                    short : "После заката",
                    title : 'Ночной бухгалтер',
                    img : "skrepka2",
                    desc : "Самая краткая газета о налогах и бухучете в <br/> мире — современная рассылка для чтения.",
                    peopleCount : '37 480',
                    switchState : true,
                    plusSet : [
                        'Анализ, оценка и только самое главное',
                        'Лучшие комменты юзеров в обзоре'
                    ]
                },
                {   
                    short : "По мере появления анонсов",
                    title : 'Чемодан вебинаров',
                    img : "free",
                    desc : "Подборка с анонсами бесплатных вебинаров <br /> на самые топовые темы при участии экспертов.",
                    peopleCount : '92 082',
                    switchState : true,
                    plusSet : [
                        'Никогда не пришлем платные вебинары',
                        'Подборка топовых тем для вебинаров'
                    ]
                },
            ]
        }
    }
}
</script>

<style>

</style>