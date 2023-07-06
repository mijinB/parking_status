<script setup>
import { onMounted, ref, watch } from 'vue';
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
  title: "주차장을 선택해주세요."
})

const ws = ref(null);
const wsList = ref({
  data: [],
  total: 0,
  fullCnt: 0,
  emptyCnt: 0
});

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

watch(selectPark, (newSelect, oldSelect) => {
  if(oldSelect !== newSelect) {
    wsList.value.data = [];
    wsList.value.total = 0;
    wsList.value.fullCnt = 0;
    wsList.value.emptyCnt = 0;
  }
});

const onOpen = () => {
  if(ws.value == null) {
    ws.value = new WebSocket("ws://192.168.1.82:1880/ws/average");

    ws.value.onopen = () => {
      console.log("연결");
    }

    ws.value.onmessage = (msg) => {   
      const getSocketInfo = JSON.parse(msg.data).value.split(",");
      let setWsList = [];

      setWsList = getSocketInfo.filter(item => {
        const item_id = Number(item.split('/')[0]);
        return item_id === selectPark.value.id;
      })
      
      if (setWsList.length > 0) {
        wsList.value.data = setWsList;
        wsList.value.total = setWsList.length;

        const fullCntList = setWsList.filter(item => item.split(':')[1] === '1');
        
        wsList.value.fullCnt = fullCntList.length;
        wsList.value.emptyCnt = wsList.value.total - wsList.value.fullCnt;
      }
    }

    // ws.value.onclose = () => {
    //   console.log("연결 끊기");
    //   ws.value = null;
    //   wsList.value = [];
    // }
  }
}

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
        <ButtonComp :buttonItems="parkList" @choicePark="(res) => selectPark = res" @click="onOpen" />
        <!--test를 위해 임시추가-->
        <!-- <div>{{ selectPark }}</div>
        <div>주차면수 : {{ wsList.total }} 만차면수 : {{ wsList.fullCnt }} 공석면수 : {{ wsList.emptyCnt }}</div> -->

        <!--Test를 위한 임시 버튼-->
          <!-- <button @click="onClose">연결끊기</button>
          <ul>
            <li v-for="(item, index) in wsList.data" :key="index">
              {{ item }}
            </li>
          </ul> -->
        <!--Test를 위한 임시 버튼 END-->
        
    </q-drawer>

    <q-page-container class="col bg-dark">
        <!--오늘 날짜-->
        <div class="text-h5 q-pl-xl q-pt-xl text-weight-bold text-white">{{ year }}년 {{ month }}월 {{ day }}일</div>
        <!--카드 컴포넌트-->
        <CardComp
          :parkId="selectPark.id"
          :parkName="selectPark.title"
          :stateData="wsList.data"
          :stateTotal="wsList.total"
          :stateFullCnt="wsList.fullCnt"
          :stateEmptyCnt="wsList.emptyCnt"
        />
    </q-page-container>

  </q-layout>
</template>

<style>

</style>