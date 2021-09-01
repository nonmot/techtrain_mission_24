<template>
    <GmapMap
        :center="{lat:35.6263997, lng:140.1013924}"
        :zoom="15"
        :options="{
            zoomControl: true
        }"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
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
            info: [{
                name: 'スーパー',
                position: {lat: 35.6219452, lng: 140.1025231}
            }]
        }
    }
}
</script>