<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
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
            <!--카드 컴포넌트-->
        </q-page-container>
  
    </q-layout>
</template>