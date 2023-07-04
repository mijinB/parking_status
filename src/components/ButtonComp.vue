<script setup>
const props = defineProps({
    buttonItem: String
})
</script>

<template>
    <div class="q-pa-md">
      <q-btn-dropdown
        color="dark"
        rounded
        label="Parking"
      >
        <q-list class="window-center">
          <q-item clickable v-close-popup class="bg-dark">

            <q-item-section>
              <q-item-label class="text-white">{{ props.buttonItem }}</q-item-label>
            </q-item-section>
            
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
</template>