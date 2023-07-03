<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const carParkUrl = "http://192.168.1.82:1880/config";
let parkList = ref([]);

// onMounted(() => {
//     axios
//         .get(carParkUrl)
//         .then(res => {
//             console.log(res.data.edge[0].parking_config[0].area);
//             parkList.value = res.data.edge[0].parking_config[0].area
//                 .map(item => {
//                     return {
//                         id: item.area_id,
//                         title: item.area_name
//                     }
//                 })
//         })
//         .catch(err => console(err));
// })
const titleValue = ref('');

const props = defineProps({
    id: Number
})

onMounted(() => {
    axios
        .get(carParkUrl)
        .then(res => {
            titleValue.value = res.data.edge[0].parking_config[0].area[props.id].area_name;
        })
        .catch(err => console(err));
})
</script>

<template>
    <div class="bg-center" style="width: 100vh;">
        <q-card flat bordered class="my-card q-ma-xl bg-warning">
            <q-card-section>
                <div class="text-h6 text-dark text-weight-bold">{{ titleValue }}</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-subtitle2 text-dark">
                담당 전화번호: 010-1234-5678<br />
                주소 : 대한민국<br />
                (신주소 : ㅇㅇ로)
                <div class="text-subtitle2 q-mt-sm text-dark text-weight-bold text-right">주차면수 : ㅇㅇㅇ</div>
                <div class="row justify-between">
                    <q-card flat bordered class="my-card q-pa-xs q-mt-xs bg-dark">
                        <div class="text-subtitle2 text-warning text-weight-bold">주차 차량 수</div>
                        <q-separator dark />
                        <div class="text-subtitle2 text-warning text-weight-bold text-right">ㅇㅇ</div>
                    </q-card>
                    <q-card flat bordered class="my-card q-pa-xs q-mt-xs bg-dark">
                        <div class="text-subtitle2 text-warning text-weight-bold">주차 가능 수</div>
                        <q-separator dark />
                        <div class="text-subtitle2 text-warning text-weight-bold text-right">ㅇㅇㅇ</div>
                    </q-card>
                </div>
            </q-card-section>
            <div class="text-subtitle text-dark text-center">1년 누적 주차대수 : ㅇㅇㅇㅇㅇ</div>
        </q-card>
    </div>
</template>

<style>

</style>