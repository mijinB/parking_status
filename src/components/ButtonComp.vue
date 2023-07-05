<script setup>
import { ref } from 'vue';
const choiceParkTitle = ref("");
const buttonLabel = ref("주차장을 선택해주세요.");

const props = defineProps({
    buttonItems: Array
})

const emit = defineEmits(['parkTitle']);

const choicePark = (title) => {
    choiceParkTitle.value = title;
    emit('parkTitle', choiceParkTitle.value);

    buttonLabel.value = title;
    console.log(buttonLabel.value);
}
</script>

<template>
    <div class="q-pa-xs">
      <q-btn-dropdown
        color="dark"
        rounded
        :label="buttonLabel"
      >
        <q-list class="window-center">
          <q-item clickable v-close-popup class="bg-dark" v-for="item in props.buttonItems" :key="item.id" @click="choicePark(item.title)">

            <q-item-section>
              <q-item-label class="text-white">{{ item.title }}</q-item-label>
            </q-item-section>
            
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
</template>