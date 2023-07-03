<script setup>
import { date } from 'quasar';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// const parkingUrl = "https://jsonplaceholder.typicode.com/posts";
// const yearUrl = "https://jsonplaceholder.typicode.com/posts";
// let parkingList = ref([]);
// let accumulationList = ref([]);

const carParkUrl = "http://192.168.1.82:1880/config";
let parkList = ref([]);

onMounted(() => {
    axios
        .get(carParkUrl)
        .then(res => {
            parkList.value = res.data.edge[0].parking_config[0].area
                .map(item => {
                    return {
                        id: item.area_id,
                        title: item.area_name
                    }
                })
        })
        .catch(err => console(err));
})

// setInterval(() => {
//     axios
//         .get(parkingUrl)
//         .then(res => {
//             const carParkList = res.data.filter(item => item.id <= 10);
//             parkingList.value = carParkList.map(item => {
//                 return {
//                     id: item.id,
//                     title: `주차장 ${item.id}`,
//                     parkingtotalCnt: item.body.length,
//                     parkedCar: Math.floor(Math.random() * 100)
//                 }
//             });
//         })
//         .catch(err => console(err));
// }, 1000)

// onMounted(() => {
//     axios
//         .get(yearUrl)
//         .then(res => {
//             const yearParked = res.data.filter(item => item.id <= 10);
//             accumulationList.value = yearParked.map(item => {
//                 return {
//                     title: `주차장 ${item.id}`,
//                     accumulation: item.body.length
//                 }
//             });
//         })
//         .catch(err => console(err));
// })
</script>

<template>
    <div class="layout">
        <div class="aside">
            <img src="@/assets/images/logo.png" />
            <div class="text-h5 q-mb-lg text-dark text-weight-bold">mijinB</div>
            <div class="asideText">버튼</div>
        </div>
        <div class="main">
            <div>
                <div class="text-h5 q-pl-xl q-pt-xl text-weight-bold text-white">{{ year }}년 {{ month }}월 {{ day }}일</div>
                <div>
                    <!--카드-->

                    <div class="row q-pt-lg">
                        <q-card flat bordered class="my-card q-ma-xl bg-warning" v-for="item in parkList" :key="item.id">
                            <q-card-section>
                                <div class="text-h6 text-dark text-weight-bold">{{ item.title }}</div>
                            </q-card-section>

                            <q-separator inset />

                            <q-card-section class="text-subtitle2 text-dark">
                                담당 전화번호: 010-1234-5678<br />
                                주소 : 대한민국<br />
                                (신주소 : ㅇㅇ로)<br />
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
                                <div class="text-subtitle text-dark text-center">
                                    1년 누적 주차대수 : ㅇㅇㅇㅇㅇ
                                </div>
                        </q-card>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .layout {
        display: flex;
        height: 100vh;
    }
    .aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        padding: 20px;
        background-color: #F2C037;
    }
    .asideText {
        align-self: flex-start;
        font-size: 15px;
    }
    .main {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        background-color: #1d1d1d;
    }
    /* .mainLayout {
        display:flex;
        flex-direction: column
    } */
    /* .cards {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    } */
    /* .countBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .card {
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        background-color: #605CFF;
        color: white;
    } */
</style>