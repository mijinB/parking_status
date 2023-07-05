<script setup>
import { ref } from 'vue';
const choicePark = ref({
  id: null,
  title: null
});
const buttonLabel = ref("주차장을 선택해주세요.");

const props = defineProps({
    buttonItems: Array
})

const emit = defineEmits(['choicePark']);

const getChoicePark = (itemId, itemTitle) => {
  choicePark.value = {
    id: itemId,
    title: itemTitle
  };
    emit('choicePark', choicePark.value);

    buttonLabel.value = itemTitle;
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
          <q-item clickable v-close-popup class="bg-dark" v-for="item in props.buttonItems" :key="item.id" @click="getChoicePark(item.id, item.title)">

            <q-item-section>
              <q-item-label class="text-white">{{ item.title }}</q-item-label>
            </q-item-section>
            
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
</template>