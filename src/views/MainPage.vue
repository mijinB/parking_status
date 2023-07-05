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
const selectPark = ref({
  id: null,
  title: null
})

const ws = ref(null);
const connected = ref(false);
const wsList = ref([]);

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

const onOpen = () => {
  if(!connected.value) {
    ws.value = new WebSocket("ws://192.168.1.82:1880/ws/average");

    ws.value.onopen = () => {
      connected.value = true;
    }

    ws.value.onmessage = (msg) => {   
      const getSocketInfo = JSON.parse(msg.data).value.split(",");
      let setWsList = [];

      setWsList = getSocketInfo.filter(item => {
        const item_id = item.split('/')[0];
        return Number(item_id) === selectPark.value.id;
      })
      
      if (setWsList.length > 0) {
        wsList.value = setWsList;
      }
  }

    ws.value.onclose = () => {
      console.log("연결 끊기");
      connected.value = false;
      ws.value = null;
      wsList.value = [];
    }
  }
}

const onClose = () => ws.value.close();
</script>

<template>
  <q-layout view="hHh lpR fFf" class="row">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-warning">
        <div class="q-mt-lg text-center">
            <img src="@/assets/images/logo.png" />
            <div class="text-h5 q-mb-xl text-dark text-weight-bold">주차장 정보</div>
        </div>
        <!--버튼 컴포넌트-->
        <ButtonComp :buttonItems="parkList" @choicePark="(res) => selectPark = res" />
        <!--test를 위해 임시추가-->
        <div>{{ selectPark }}</div>

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
        <!--Test를 위한 임시 버튼 END-->
        
    </q-drawer>

    <q-page-container class="col bg-dark">
        <!--오늘 날짜-->
        <div class="text-h5 q-pl-xl q-pt-xl text-weight-bold text-white">{{ year }}년 {{ month }}월 {{ day }}일</div>
        <!--카드 컴포넌트-->
        <CardComp :parkId="selectPark.id" :parkName="selectPark.title" />
    </q-page-container>

  </q-layout>
</template>

<style>

</style>