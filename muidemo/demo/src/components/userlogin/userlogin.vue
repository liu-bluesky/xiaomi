<template>
<div class="userlogin">
  <div class="login-top">
      <div class="h-login">
        <a href="www.mi.com/index.html">小米网</a>
      </div>
  </div>
  <div class="login-banner">
    <a class="login-banner-a" href="www.mi.com/index.html">小米网</a>
    <div class="wrap w">
      <!--登录区域-->
      <div class="wrap-layout">
        <div class="class-login">
          <span class="account">帐号登录</span>
          <span class="line"></span>
          <span class="qr-code">扫码登录</span>
        </div>
        <!--表单提交-->
        <div class="login-user" v-show="loginTypeuser">
          <input type="text" class="user" placeholder="邮箱/手机号码/小米ID" v-model="username">
          <input type="password" class="user-pwd" placeholder="密码" v-model="userpwd">
          <div class="error" v-show="errorbol">
            <span class="iconfont icon-warn"></span>手机号格式不正确
          </div>
          <button @click="login">登录</button>
        </div>
        <div class="login-user" v-show="logintypephone">
          <div class="label-phone">
            <div class="countrycode_value">
              <transition>
                  <span class="territory" v-if="this.$store.state.territory">
                +86
              </span>
              </transition>
            </div>
            <input  type="text" class="phone" placeholder="手机号码" v-model="newinput">
          </div>
          <div class="phone-verification" >
            <input  type="text" class="note" placeholder="短信验证码">
            <div class="getnote">
              <span class="getnotefont" @click="getnotefont">
                获取验证码
              </span>
            </div>

          </div>
          <div class="error" v-show="errorbol">
            <span class="iconfont icon-warn"></span>手机号格式不正确
          </div>
          <button>短信登录</button>
          <!--<div class="ChangeLoginType" >-->
            <!--<span class="login-phone" @click="changelogintype">用户名密码登录</span>-->
          <!--</div>-->
        </div>
        <div class="ChangeLoginType" >
          <span class="login-phone" @click="changelogintype">手机短信登录/注册</span>
          <span v-show="loginTypeuser">
              <span class="user-register">立即注册</span>
              <span>|</span>
              <span class="forgetpwd">忘记密码？</span>
            </span>
        </div>
        <!--表单提交-->
        <!--其他的登录方式-->
        <div class="other">
          <fieldset class="other-login">
            <legend align="center">其他方式登录</legend>
          </fieldset>
          <div class="other-class">
            <a href="" class="qq iconfont icon-qq "></a>
            <a href="" class="weibo iconfont icon-weibo "></a>
            <a href="" class="zfb iconfont icon-zhifubao"></a>
            <a href="" class="wx iconfont icon-weixin"></a>
          </div>
        </div>
        <!--其他的登录方式-->
      </div>
      <!--登录区域-->
    </div>
  </div>
  <!--底部

    简体| 繁体| English| 常见问题| 隐私政策

-->
  <div class="login-foot">
    <div class="foot-link">
      <ul class="font-ul">
        <li class="font-li"><a href="">简体</a></li>
        <li class="font-li"><a href="">繁体</a></li>
        <li class="font-li"><a href="">English</a></li>
        <li class="font-li"><a href="">常见问题</a></li>
        <li class="font-li"><a href="">隐私政策</a></li>
      </ul>
    </div>
    <p class="intro">小米公司版权所有-京ICP备10046444-<span><img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png" alt=""></span>京公网安备11010802020134号-京ICP证110507号</p>
  </div>
  <!--底部-->
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "userlogin",
      data(){
          return{
            loginTypeuser:true,
            logintypephone:false,
            errorbol:false,
            userlogin:'用户名密码登录',
            loginPhone:'手机短信登录/注册',
            newinput:'',
            username:'',
            userpwd:'',
          }
      },
      mounted(){
      },
      created(){
      },

      methods:{
          login(){
            var user = document.querySelector('.user')
            axios.post('/api/users',{
              userName:this.username,
              userPassword:this.userpwd
            }).then((respoonse) =>{
              var users =   respoonse.data.result.list
                console.log(users);
                // console.log(this.username);
                console.log(this.userpwd);
                console.log(users.userPassword);
                if (this.username==users) {
                  localStorage.setItem('user',users)
                  var user = localStorage.getItem('user')
                  this.$store.commit('getloginuser',user)
                  window.location.href='http://localhost:8080/#/'
                } else if (users==false) {
                  user.style.border='1px solid #ff6700'
                  this.errorbol=true
                }
            })
          },
          changelogintype(){
            var loginphone = document.querySelector('.login-phone')
             this.$store.commit('getterritory',this.$store.state.territory)
            this.loginTypeuser = !this.loginTypeuser
            this.logintypephone=!this.logintypephone
            if (this.$store.state.territory){
              loginphone.innerHTML=this.userlogin
            }else {
              loginphone.innerHTML=this.loginPhone
            }

          },
        getnotefont(){
            // 1 2 6 9 0
            var phone = document.querySelector('.phone')
            var countrycode_value = document.querySelector('.countrycode_value')
              var phonerule = new RegExp(/^((13[0-9])|(14[5,7,9])|(15[6-9])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/)
          var bool = phonerule.test(phone.value)
          if (!bool || phone.value.length==0 ){
            countrycode_value.style.border='1px solid #ff6700'
            phone.style.border='1px solid red'
            phone.style.borderLeft='1px solid #e0e0e0'
            this.errorbol=!bool
         }
        },
      },
      watch:{
      newinput:function (newval,oldval) {
        if (newval.length===0 || newval.length === 1){
          var phone = document.querySelector('.phone')
          var countrycode_value = document.querySelector('.countrycode_value')
          countrycode_value.style.border='1px solid #e0e0e0'
          phone.style.border='1px solid #e0e0e0'
          this.errorbol=false
        }
      },
        username:function (nexval,oldval) {
          var user = document.querySelector('.user')

          console.log(oldval);
          console.log(nexval);
          if (nexval.length==0){
            user.style.border='1px solid #e0e0e0'
            this.errorbol=false
          }
        }
    }

    }
</script>

<style scoped lang="scss">
  .territory{
    animation: bounce-in 1s  ease;
  }
  @keyframes bounce-in {
    0% {
      transform: translateX(-55px);
      transition: all .5s ease;

    }
    100% {

      transition: all .5s ease;
    }
  }
  .w{
    min-width: 1130px;
    max-width: 1130px;
    margin: 0 auto;
  }
.userlogin{
  /*head部分*/
  .login-top{
    width: 1130px;
    margin: 0 auto;
    .h-login{
      width: 200px;
      height: 98px;
      background-image: url("https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png");
      background-repeat: no-repeat;
      a{
        text-indent: -9999em;
        display: block;
        height: 98px;
      }
    }
  }
  /*登录注册*/
  .login-banner{
    width: 100%;
    height: 588px;
    background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f838fdcd77715410b441f2f56d8f10cd.jpg");
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 98px;
    background-position:top center ;
    .login-banner-a{
      text-indent: -9999em;
      display: block;
      height: 588px;
    }
    display: flex;
    justify-content: right;
    .wrap{
      display: flex;
      align-items: center;
      .wrap-layout{
        position: absolute;
       left: 50%;
        margin-left: 155px;
        width: 410px;
        min-height: 524px;
        background-color: #fff;
        .class-login{
          padding: 27px 0  24px ;
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          text-align: center;
          cursor: pointer;
          .line{
            width: 1px;
            height: 24px;
            margin: 0 35px 0 42px;
            border: 1px solid #e0e0e0;
          }
          .account{
            color:#f56600;
          }
          .qr-code:hover{
            color:#f56600;

          }
        }

        .login-user{
          position: relative;
          top: 10px;
          left: 31px;
          margin: 0 auto;
          width: 410px;
          button{
            width: 350px;
            height: 50px;
            margin-top: 10px;
            margin-bottom: 9px;
            background-color: #ff6700;
            color: white;
            cursor:pointer;
          }
          input{
            margin-bottom: 14px;
            width: 316px;
            height: 22px;
            line-height: 22px;
            padding: 13px 16px 13px 14px;
            border: 1px solid #e0e0e0;
          }
          input::placeholder{
            color: #3b3b3b;
            font-weight: normal;
          }
        }
        .ChangeLoginType{
          span{
            cursor: pointer;
          }
          width: 348px;
          height: 20px;
          color: #999;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          margin-top: 10px;
          .login-phone{
            color: #ff6700;
          }
          .user-register:hover{color: #ff6700;}
          .forgetpwd:hover{color: #ff6700;}
        }
        /*其他登录*/
        .other{
          margin-top: 133px;
          .other-login{
            margin: 0 auto;

            width: 348px;
            color: #bbb;
            border-top: 1px solid #e0e0e0;
          }

          .other-class{

            display: flex;
            justify-content: center;
            padding-top: 14px;
            a{
              font-size: 30px;
              margin: 0 17px;
            }
            .qq{
              color: #0288d1;
            }
            .weibo{
              color: #d32f2f;
            }
            .zfb{
              color: #0ae;
            }
            .wx{
              color: #00d20d;
            }
          }
        }

      }
    }

    .label-phone{
      width: 348px;
      display: flex;
      .countrycode_value{
        overflow: hidden;
        display: inline-block;
        flex: 2;
        border: 1px solid #e0e0e0;
        height: 48px;
        margin-right: -1px;
        text-align: center;
        .territory{
          display: inline-block;
          line-height: 50px;
        }
      }
      .phone{
        width: 100%;
        flex: 8;
      }
    }
    .phone-verification{
      width: 348px;
      display: flex;
      .note{
        flex: 4;
        width: 100%;
      }
      .getnote{
        flex: 2;
        text-align: center;
        display: inline-block;
        border: 1px solid #e0e0e0;
        height: 48px;
        line-height: 48px;
        margin-left: -1px;
        cursor: pointer;
        color: #003ab5;
      }

    }
    .error{
      color: #ff6700;
    }
  }
  /*登录注册*/
    /*底部*/
  .login-foot{

    position: relative;
    height: 80px;
    bottom:-556px;
    z-index: 4;
    background-color: #fff;
    padding-top: 100px;
    .foot-link{
      display: flex;
      justify-content: center;
      width: 100%;
      .font-ul{
        overflow: hidden;
        .font-li{
          padding: 0 13px;
          border-left: 1px solid #757575;
          float: left;
          margin-left: -1px;
          a{
            color:  #757575;
          }
          a:hover{
            color: #333333;
          }
        }
        .font-li:nth-child(1){
          a{
            color:  #333333;
          }
        }

      }
    }
    .intro{
      padding: 10px 0;
      text-align: center;
      color:  #757575;
    }
  }
    /*底部*/
}
</style>
