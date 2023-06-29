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
            <div id="primaryTheme">Bmijin</div>
            <div class="asideText">ddd</div>
            <div class="asideText">fff</div>
        </div>
        <div class="main">
            <div class="mainLayout">
                <div class="todayDate">{{ year }}년 {{ month }}월 {{ day }}일</div>
                <div class="cards">
                    <!--카드-->

                    <q-card flat bordered class="my-card">
                        <q-card-section>
                            <div class="text-h7">주차장 1 </div>
                        </q-card-section>

                        <q-separator dark inset />

                        <q-card-section class="text-subtitle2">
                            담당 전화번호: 010-1234-5678<br />
                            주소 : 전라북도 전주시<br />
                            (신주소 : ㅇㅇ로)<br />
                            <div class="countBox">
                                <div class="card">
                                    <a style="border-bottom: 1px solid red;">주차 차량 수</a>
                                </div>
                                <div class="card">
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
        background-color: #364153;
    }
    .asideText {
        align-self: flex-start;
        color: #CFD9E0;
        font-size: 15px;
    }
    .main {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        background-color: #1A202C;
    }
    .mainLayout {
        display:flex;
        flex-direction: column
    }
    .todayDate {
        padding-top: 20px;
        padding-left: 110px;
        color: white;
        font-size: 25px;
        font-weight: 600;
    }
    .cards {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    #primaryTheme {
        color: #605CFF;
        font-size: 25px;
        font-weight: 600;
    }
    .countBox {
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
    }

    .my-card {
        margin: 60px;
        border-radius: 12px;
        background-color: #364153;
        color: white;
        font-size: 18px;
        font-weight: 600;
    }
    .text-h7 {
        color: #605CFF;
    }
</style>