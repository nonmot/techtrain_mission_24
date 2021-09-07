<template>
    <GmapMap
        :center="{lat:35.6263997, lng:140.1013924}"
        :zoom="15"
        :options="{
            zoomControl: true
        }"
        map-type-id="terrain"
        style="width: 100%; height: 400px;"
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            @click="center=m.position"
        />
        <GmapInfoWindow
            v-for="(i, index) in info"
            :key="index"
            :position="i.position"
            :opened="clicked"
            >
            <p>{{i.name}}</p>
        </GmapInfoWindow>
    </GmapMap>
</template>

<script>
export default {
    data() {
        return {
            markers: [{
                position: {lat: 35.6263997, lng:140.1013924}
            }],
            info: [
                {
                    name: '西友西千葉店',
                    position: {lat: 35.6219452, lng: 140.1025231}
                },
                {
                    name: '西千葉駅',
                    position: {lat: 35.62270637, lng: 140.10318415}
                },
                {
                    name: 'ファミリーマート西千葉駅前店',
                    position: {lat: 35.6233176, lng: 140.1034995}
                }
            ]
        }
    }
}
</script>

<style scoped>
    .google-map {
        width: 100%;
    }
</style>