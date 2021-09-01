<template>
    <div class="container px-5 mx-auto">
        <h1 class="text-2xl mt-10">架空のアパート</h1>
        <div class="rounded-lg mt-10 px-20 h-auto overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="~images/house.jpg">
        </div>

        <h1 class="text-2xl mt-20">概要</h1>
        <div class="flex">
            <table class="table-fixed flex-grow mt-10">
                <tbody>
                    <tr>
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                        <td class="border px-4 py-2 w-1/4 text-center">間取り</td>
                        <td class="border py-2 px-4 w-1/4">2LDK</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2 text-center">間取り</td>
                        <td class="border py-2 px-4 ">2LDK</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <td class="border px-4 py-2 text-center">間取り</td>
                        <td class="border py-2 px-4">2LDK</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1 class="text-2xl mt-20">地図</h1>
        <google-map />
    </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';

export default {
    components: {
        GoogleMap,
    },
    data() {
        return {

        }
    },

    computed: {
        mapConfig() {
            return {
                center: {
                    lat: 35.68944,
                    lng: 139.69167
                }
            }
        }
    }
}
</script>