<template>
  <div class="main-page">
    <div class="main-img">
      <div class="container">
        <div class="txt">
          <p>쏟아지는 이벤트</p>
          <p class="font-weight-bolder">가정의 달 이벤트를 확인해 보세요.</p>
        </div>
        <div class="btn d-flex">
          <v-btn v-if="!$vuetify.breakpoint.xs">로그인하기<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
          <v-btn v-if="$vuetify.breakpoint.xs">이번달 혜택 보기<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
          <v-btn>가입 이벤트<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
        </div>
      </div>
    </div>
    <div class="main-link container">
      <div class="d-flex">
          <router-link class="d-flex link-btn" to="/">
            <div class="icon"><img src="@/assets/images/page/main_icon01.svg" alt=""></div>
            <div class="txt">
              <p>셀프 개통</p>
              <p>비대면 개통 서비스<br>지금 바로 개통해 보세요.</p>
            </div>
            <img src="@/assets/images/common/icon-btnarrow.svg" alt="">       
          </router-link>
          <router-link class="d-flex link-btn" to="/">
            <div class="icon"><img src="@/assets/images/page/main_icon02.svg" alt=""></div>
             <div class="txt">
              <p>무제한 데이터 요금제</p>
              <p>내 생활 패턴에 꼭 맞는<br>요금제를 찾아보세요.</p>
            </div>
            <img src="@/assets/images/common/icon-btnarrow.svg" alt="">     
          </router-link>
        </div>
    </div>
    <div class="main-cont">
      <div class="container">
      <v-tabs v-model="tab" height="40px" hideSlider>
        <v-tab>LG U+</v-tab>
        <v-tab>SKT</v-tab>
        <v-tab>KT</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :transition="false">
                
        </v-window-item>
        <v-window-item :transition="false">
          
        </v-window-item>
        <v-window-item :transition="false">
          
        </v-window-item>
      </v-window>      
    </div>
    </div>    
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        tab: null,
        dialog: false,
      }
    },
  }
</script>
<style lang="scss" scoped>
  .main-img {
    width: 100%;
    height: 325px;
    background: #FFD2E1;

    .container {
      position: relative;
      padding-top: 55px;
      height: 100%;
      background: #FFD2E1 url('~@/assets/images/page/main_img.png') right no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;

      .txt {
            width: 695px;
            margin: 0 auto;
        p {
          font-size: 2.4rem;
        }

        p:first-child {
          color: #399FC7;
        }
      }

      .btn {

        .v-btn {
          background: #fff;
          height: 60px;
          border-radius: 30px;
          padding: 0 16px 0 40px;
          font-size: 1.6rem;
          font-weight: 400;
          justify-content: space-between;

          span {
            background: #FAFAFB;
            width: 28px;
            width: 28px;
            border-radius: 100%;
          }
        }
      }
    }
  }
  .main-link{
    padding: 75px 0;
    >.d-flex{
      justify-content: center;
    }
    .link-btn{
      justify-content: space-between;
      align-items: center;
    }
    .icon{
      border-radius: 30px;
background: #F9F9FA;
width:60px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
    }
    .txt{
      p:first-child{
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 8px;
      }
      p:last-child{
        color: #9799A5;
      }
    }
  }
  .main-cont {
    position: relative;
    background: #FAFAFB;
    padding: 40px 0;

    .v-tab {
      font-size: 1.3rem;
      border-radius: 100px;
      width: 110px;
      font-weight: 500;

      &--active {
        background: #2C2228;
        color: #fff;
        font-weight: 700;

        &::before {
          display: none;
        }
      }

      &:not(.v-tab--active) {
        color: #A0BCC0 !important;
      }

      &::before {
        border-radius: 100px;
      }
    }

    .v-window {
      overflow: hidden;
    }
  }

  @include pc {
    .main-img {
      .btn {
        position: absolute;
        bottom: 40px;

        .v-btn {
          width: 335px;

          +.v-btn {
            margin-left: 24px;
          }
        }
      }
    }
    .link-btn{
        width:340px;
        .txt{
          margin-left:-30px;
        }
        + .link-btn{
          margin-left:24px
        }
      }

    .main-cont {
      .v-window {
      }

    }
  }

  @include mobile {
    .main-img {
      height: auto;

      .container {
        padding: 50px 40px;
        background: #FFD2E1 url('~@/assets/images/page/m_main_img.png') center no-repeat;
        background-size: cover;
      }

      .btn {
        flex-direction: column;
        width: 100%;
        margin-top: 60px;

        .v-btn {
          width: 100%;

          +.v-btn {
            margin-top: 4px;
          }
        }
      }
    }
    .main-link{
      padding: 40px;
      >.d-flex{
        flex-direction: column;
        .link-btn{
          .txt{margin: 0;}
        }
        .link-btn + .link-btn{
          margin:20px 0 0 0;
        }
      }
    }
    .main-cont {
    }

  }

  ::v-deep {
    .v-tabs {
      margin-bottom: 20px;
      .v-item-group{
        background-color: transparent !important;
      }

      .v-slide-group__wrapper {
        display: block;
      }

      .v-slide-group__content {
        width: 336px;
        background: #ECF2F3;
        height: 40px;
        border-radius: 100px;
        margin: 0 auto;
      }
    }


    @include mobile {
      .v-slide-group__content {
        margin: 0 auto;
      }

    }

  }
</style>