<script setup>
const props = defineProps({
    parkId: Number,
    parkName: String
})
</script>

<template>
    <div class="float-left">
        <q-card flat bordered class="my-card q-ma-xl bg-warning">
            <q-card-section>
                <div class="text-h6 text-dark text-weight-bold">{{ props.parkName }}</div>
                <!--test를 위해 임시추가-->
                <div>id : {{ props.parkId }}</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-subtitle2 text-dark">
                담당 전화번호: 010-1234-5678<br />
                주소 : 대한민국<br />
                (신주소 : ㅇㅇ로)
                <div class="text-subtitle2 q-mt-sm text-dark text-weight-bold text-right">주차면수 : ㅇㅇㅇ</div>
                <div class="row justify-between">

                    <q-card flat bordered class="my-card col q-pa-xs q-ma-xs bg-dark">
                        <div class="text-subtitle2 text-warning text-weight-bold text-center">주차 차량 수</div>
                        <q-separator dark />
                        <div class="text-subtitle2 text-warning text-weight-bold text-right">ㅇㅇ</div>
                    </q-card>

                    <q-card flat bordered class="my-card col q-pa-xs q-ma-xs bg-dark">
                        <div class="text-subtitle2 text-warning text-weight-bold text-center">주차 가능 수</div>
                        <q-separator dark />
                        <div class="text-subtitle2 text-warning text-weight-bold text-right">ㅇㅇㅇ</div>
                    </q-card>

                </div>
            </q-card-section>
            <div class="text-subtitle text-dark text-center">1년 누적 주차대수 : ㅇㅇㅇㅇㅇ</div>
        </q-card>
    </div>
</template>

<style>

</style>