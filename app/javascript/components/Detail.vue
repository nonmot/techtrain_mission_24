<template>
    <div class="h-full mt-10 shadow flex p-3 sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200">
        <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900 mb-5">架空のマンション</h2>
            <!-- <h3 class="text-gray-500 mb-3">千葉県千葉市中央区登戸２</h3> -->
            <p class="mb-4">千葉県千葉市中央区登戸２</p>
            <p class="mb-4">西千葉駅徒歩10分</p>
            <span class="inline-flex">
            <router-link to="/detail" target="_blank" class="block ml-auto bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
                詳細を見る
            </router-link>
            </span>
        </div>
    </div>
</template>