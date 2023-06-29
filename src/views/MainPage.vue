<template>
    <q-layout id="darkTheme" view="hHh lpR fFf">                               <!--웹 전체 background-color-->
  
      <q-drawer class="leftMenu" show-if-above v-model="leftDrawerOpen" side="left" bordered>    <!--left 메뉴에 작성되는 것들-->
        <!-- drawer content -->
        <img src="@/assets/images/logo.png" align-items:center/>
        <div id="primaryTheme">Nuricon</div>
        <div class="menuText">ddd</div>
        <div class="menuText">fff</div>
      </q-drawer>
  
      <q-page-container>                                                        <!--본문에 작성되는 것들-->
        <div class="todayDate">{{ year }}년 {{ month }}월 {{ day }}일</div>
        <router-view />
      </q-page-container>
  
    </q-layout>
</template>
  
<script>
  import { VueElement, ref } from 'vue'
  
  export default {
    setup () {
      const leftDrawerOpen = ref(false)

      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
  
      return {
        leftDrawerOpen,
        today, year, month, day,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
    }
  }
</script>

<style>
  #primaryTheme {
    color: #605CFF;
    font-size: 25px;
    font-weight: 600;
  }
  #darkTheme {
    background-color: #1A202C;
  }
  .leftMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #364153;
  }
  .menuText {
    align-self: flex-start;
  }
  .todayDate {
    padding: 20px;
    color: white;
    font-size: 25px;
    font-weight: 600;
  }
</style>