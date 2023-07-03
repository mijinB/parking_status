<script setup>
import { ref } from 'vue'
import CardComp from '@/components/CardComp.vue';

const leftDrawerOpen = ref(false)

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const testId = ref(0);
</script>

<template>
  <q-layout view="hHh lpR fFf" class="row bg-black">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-warning">
        <div class="q-mt-lg text-center">
            <img src="@/assets/images/logo.png" />
            <div class="text-h5 q-mb-xl text-dark text-weight-bold">mijinB</div>
        </div>
        <!--버튼 컴포넌트-->
    </q-drawer>

    <q-page-container class="col bg-dark">
        <!--오늘 날짜-->
        <div class="text-h5 q-pl-xl q-pt-xl text-weight-bold text-white">{{ year }}년 {{ month }}월 {{ day }}일</div>
        <!--카드 컴포넌트-->
        <CardComp :id="testId" />
    </q-page-container>

  </q-layout>
</template>

<style>

</style>