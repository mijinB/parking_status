<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CardComp from '@/components/CardComp.vue';
import ButtonComp from '@/components/ButtonComp.vue';

const leftDrawerOpen = ref(false)

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const carParkUrl = "http://192.168.1.82:1880/config";
const parkList = ref([]);
const choiceParkTitle = ref("");

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
    
  // ws.value = new WebSocket("ws://192.168.1.82:1880/ws/average");
  
  // ws.value.onopen = () => {
  //   connected.value = true;
  // }

  // ws.value.onclose = () => {
  //   console.log("연결 끊기");
  //   connected.value = false;
  //   ws.value = null;
  // }

  // ws.value.onmessage = (msg) => {
  //   wsList.value = JSON.parse(msg.data).value.split(',');
  //   // wsIdList.value = JSON.parse(msg.data).value.split(',').map(item => item.split('/')[0])[0];
  //   //wsList.value = msgList.filter(item => item.includes(parkList.value[6].id));
  //   //console.log(wsIdList.value);
  // }
  // wsIdList.value = wsList.value.map(item => item.split('/')[0])[0];
  // console.log(wsIdList.value);
})

// const onClose = () => ws.value.close();

const ws = ref(null);
const connected = ref(false);
const wsList = ref([]);
const wsIdList = ref([]);

const onOpen = () => {
  if(!connected.value) {
    ws.value = new WebSocket("ws://192.168.1.82:1880/ws/average");

    ws.value.onopen = () => {
      connected.value = true;
      console.log(ws.value);
    }

    ws.value.onmessage = (msg) => {
      wsList.value.push(msg.data);
    }

    ws.value.onclose = () => {
      console.log("연결 끊기");
      connected.value = false;
      ws.value = null;
    }
  }
}

const onClose = () => ws.value.close();

//-------------------------------------------------------------------------------------------------

// const ws = ref(null);
// const connected = ref(false);

// const onOpen = () => {
//   if(!connected.value) {
//     ws.value = new WebSocket("ws://192.168.1.82:1880/ws/average");

//     ws.value.onOpen = () => {
//       connected.value = true;
//       console.log(ws.value);
//     }

//     ws.value.onclose = () => {
//       console.log("연결 끊기");
//       connected.value = false;
//       ws.value = null;
//     }
//   }
// }

// const onClose = () => ws.value.close();
</script>

<template>
  <q-layout view="hHh lpR fFf" class="row">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-warning">
        <div class="q-mt-lg text-center">
            <img src="@/assets/images/logo.png" />
            <div class="text-h5 q-mb-xl text-dark text-weight-bold">주차장 정보</div>
        </div>
        <!--버튼 컴포넌트-->
        <ButtonComp :buttonItems="parkList" @parkTitle="(res) => choiceParkTitle = res" />
          
        <!--Test를 위한 임시 버튼-->
        <div v-if="connected">
          <p>WebSocket connected!</p>
          <button @click="onClose">연결끊기</button>
          <ul>
            <li v-for="(item, index) in wsList" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div v-else>
          <button @click="onOpen">연결하기</button>
          <p>WebSocket connecting...</p>
        </div>
        
    </q-drawer>

    <q-page-container class="col bg-dark">
        <!--오늘 날짜-->
        <div class="text-h5 q-pl-xl q-pt-xl text-weight-bold text-white">{{ year }}년 {{ month }}월 {{ day }}일</div>
        <!--카드 컴포넌트-->
        <CardComp :parkName="choiceParkTitle" />
    </q-page-container>

  </q-layout>
</template>

<style>

</style>