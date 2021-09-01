<template>
    <div class="container px-5 mt-10 mx-auto grid grid-cols-4">
        <div class="col-span-3">
            <h1 class="px-4 text-2xl">検索結果:102件</h1>

            <div class="p-4 mt-5">
                <detail v-for="i in 20"  :key="i"/>
            </div>

            <pagination />
        </div>
        <div class="col-span-1">
            <current-condition />
        </div>
    </div>
</template>

<script>
import Detail from '../components/Detail.vue'
import CurrentCondition from '../components/CurrentCondition.vue'
import Pagination from '../components/Pagination.vue'

export default {
    components: {
        Detail,
        CurrentCondition,
        Pagination,
    }
}
</script>