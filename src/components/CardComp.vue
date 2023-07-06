<script setup>
const props = defineProps({
    parkId: Number,
    parkName: String,
    stateData: Array,
    stateTotal: Number,
    stateFullCnt: Number,
    stateEmptyCnt: Number
});
</script>

<template>
    <div class="float-left">
        <q-card flat bordered class="my-card q-ma-xl bg-warning" style="width: 50vh;">
            <q-card-section>
                <div class="text-h6 text-dark text-weight-bold">{{ props.parkName }}</div>
                <!--test를 위해 임시추가-->
                <!-- <div>id : {{ props.parkId }}</div> -->
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-subtitle2 text-dark">
                <div class="text-subtitle2 q-mt-sm text-dark text-weight-bold text-right">주차면수 : {{ props.stateTotal }}</div>
                <div class="row justify-between">

                    <q-card flat bordered class="my-card col q-pa-xs q-ma-xs bg-dark">
                        <div class="text-subtitle2 text-warning text-weight-bold text-center">주차 차량 수</div>
                        <q-separator dark />
                        <div class="text-subtitle2 text-warning text-weight-bold text-right">{{ props.stateFullCnt }}</div>
                    </q-card>

                    <q-card flat bordered class="my-card col q-pa-xs q-ma-xs bg-dark">
                        <div class="text-subtitle2 text-warning text-weight-bold text-center">주차 가능 수</div>
                        <q-separator dark />
                        <div class="text-subtitle2 text-warning text-weight-bold text-right">{{ props.stateEmptyCnt }}</div>
                    </q-card>

                </div>
            </q-card-section>
            <div class="text-subtitle text-dark text-weight-bold text-center" v-if="props.stateTotal !== 0">주차된 차량 비율 : {{ Math.round(props.stateFullCnt / props.stateTotal * 100) }}%</div>
        </q-card>
    </div>
</template>

<style>

</style>