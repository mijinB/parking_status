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
let parkList = ref([]);
let choiceParkTitle = ref("");

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
</script>

<template>
  <q-layout view="hHh lpR fFf" class="row">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-warning">
        <div class="q-mt-lg text-center">
            <img src="@/assets/images/logo.png" />
            <div class="text-h5 q-mb-xl text-dark text-weight-bold">mijinB</div>
        </div>
        <!--버튼 컴포넌트-->
        <ButtonComp :buttonItems="parkList" @parkTitle="(res) => choiceParkTitle = res" />
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