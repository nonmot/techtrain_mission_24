<template>
    <div class="container px-5 py-5 mx-auto grid grid-cols-4">
        <div class="col-span-3">
            <h1 class="text-2xl">検索結果</h1>

            <div class="p-4">
                <detail />
                <detail />
                <detail />
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