<template>
    <div class="container px-5 py-24 mx-auto">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">物件を検索する</h1>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                都道府県を選択
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>東京</option>
                    <option>千葉</option>
                    <option>神奈川</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <div class="mt-10 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                市区町村を選択
            </label>
        </div>
        <div class="shadow p-3 w-full h-40 min-h-full">
                <span class="ml-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox">
                        <span class="ml-2">千葉市中央区</span>
                    </label>
                </span>
                <span class="ml-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox">
                        <span class="ml-2">千葉市中央区</span>
                    </label>
                </span>
        </div>

        <div class="flex mt-10 ">
            <button class="flex-grow mr-3 text-center inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">検索</button>
            <button class="flex-grow ml-3 text-center inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">詳細条件</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>