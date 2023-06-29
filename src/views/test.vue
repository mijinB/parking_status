<script>
export default {
    setup() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        return {
            today, year, month, day,
        }
    }
}
</script>

<template>
    <div class="layout">
        <div class="aside">
            <img src="@/assets/images/logo.png" />
            <div class="text-h5 text-weight-bold text-dark">Bmijin</div>
            <div class="asideText">ddd</div>
            <div class="asideText">fff</div>
        </div>
        <div class="main">
            <div>
                <div class="text-h5 q-pl-xl q-pt-md text-weight-bold text-white">{{ year }}년 {{ month }}월 {{ day }}일</div>
                <div>
                    <!--카드-->

                    <q-card flat bordered class="my-card q-ma-xl bg-warning">
                        <q-card-section>
                            <div class="text-h6 text-weight-bold text-dark">주차장 1 </div>
                        </q-card-section>

                        <q-separator dark inset />

                        <q-card-section class="text-subtitle2 text-dark">
                            담당 전화번호: 010-1234-5678<br />
                            주소 : 전라북도 전주시<br />
                            (신주소 : ㅇㅇ로)<br />
                            <div>
                                <div>
                                    주차 차량 수
                                    <q-separator dark inset />
                                    dd
                                </div>
                                <div>
                                    잔여 공간 수
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                    

                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .layout {
        display: flex;
        height: 100vh;
    }
    .aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        padding: 20px;
        background-color: #F2C037;
    }
    .asideText {
        align-self: flex-start;
        font-size: 15px;
    }
    .main {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        background-color: #1d1d1d;
    }
    /* .mainLayout {
        display:flex;
        flex-direction: column
    } */
    /* .cards {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    } */
    /* .countBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .card {
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        background-color: #605CFF;
        color: white;
    } */
</style>