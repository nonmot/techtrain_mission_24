<template>
    <div class="container px-5 py-24 mx-auto">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">物件を検索する</h1>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                都道府県を選択
            </label>
            <div class="relative">
                <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    v-model="selectedPref"
                    @change="getMunicipalities"
                >
                    <option
                        v-for="pref in prefectures"
                        :key="pref.code"
                        :value="pref.code"
                    >
                        {{ pref.name }}
                    </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <div class="mt-10 px-3" v-if="selectedPref">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                市区町村を選択
            </label>
        </div>
        <div class="shadow p-3 w-full h-40 min-h-full" v-if="municipalities">
                <span
                    class="ml-3"
                    v-for="municipality in municipalities"
                    :key="municipality.id"    
                >
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox">
                        <span class="ml-2">{{ municipality.name }}</span>
                    </label>
                </span>
        </div>

        <div class="flex mt-10 ">
            <button class="mr-3 inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" @click="search()">検索</button>
            <button class="ml-3 inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">詳細条件</button>
        </div>
    </div>
</template>

<script>
import prefectures from '../services/prefectures.json'
import axios from 'axios'

export default {
    data() {
        return {
            prefectures: prefectures, //都道府県の情報
            selectedPref: null,　// 選択された都道府県のコード
            municipalities: null, //市区町村の情報
        }
    },
    
    methods: {
        // 条件を指定して物件を検索
        search() {
            this.$router.push('/result')
        },
        // 市区町村を取得
        getMunicipalities() {
            var code = this.selectedPref
            axios.get("https://www.land.mlit.go.jp/webland/api/CitySearch?area="+code)
            .then(response => {
                this.municipalities = response.data.data
                console.log(response)
            })
        }
    }
}
</script>