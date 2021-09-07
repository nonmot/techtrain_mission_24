<template>
    <div class="mt-20 px-3 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">検索条件</h2>
        <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">検索エリア</label>
            <input type="text" value="千葉県千葉市中央区" readonly id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">詳細条件</label>
            <div class="bg-white p-3 border border-gray-300 rounded">
                <span
                    v-for="i in 5"
                    :key="i"
                    class="ml-2"
                >
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox" checked>
                        <span class="ml-1">バストイレ別</span>
                    </label>
                </span>
            </div>
        </div>
        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">この条件を保存する</button>
    </div>
</template>