<template>
  <div class="nav" ref="nav">
    <div class="topbox">
      <div class="top w clearfix">
        <div class="top_left">
          <a href="" class="top_nav-a">小米</a>
        </div>
        <div class="bottom">
          <div class="bom">
            <ul class="bomul " ref="navList">
              <li class="allbomli"><a href="" class="boma"><span class="text">全部商品分类</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">小米手机</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">Redmi 红米</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">电视</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">笔记本</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">家电</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">路由器</span></a></li>
              <li class="bomli"><a href="" class="boma"><span class="text">智能硬件</span></a></li>
              <li class="bomlifuwu"><a href="" class="bomafuwu"><span class="textfuwu">服务</span></a></li>
              <li class="bomlifuwu"><a href="" class="bomashequ"><span class="textfuwu">社区</span></a></li>
            </ul>
          </div>
        </div>
        <div class="top_right">
          <div class="search">
            <input type="text" class="texts">
            <div class="search_hot">
              <span>小米9</span>
              <span>小米9 SE</span>
            </div>
            <span class="search-input iconfont icon-fangdajing"></span>
          </div>
          <div class="product_record">
            <ul class="product_record_ul">
              <li class="product_recordli" v-for="item in defaultworld.defaultWords" :key="item.id">
                <span class="left">{{item.Key}}</span>
                <span class="right">约有{{item.Rst}}件</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div class="item-children" ref="itemchildren">
        <div class="content" ref="content">
          <div class="container" ref="containers">
            <ul class="childrenlist w " >
              <li class="first">
                <div class="firsthot"><span class="newfont">新品</span></div>
                <div class="firstcontent"><img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-320.png" alt="" width="160px" height="110px"></div>
                <div class="firstbom">
                  <p class="topfont">小米9</p>
                  <p class="bomfont">2999元</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: "navs",
    data(){
      return{
        defaultworld:{
          defaultWords:
            [
              {'Key':'小米9','Rst':22},
              {'Key':'Redmi K20 Pro','Rst':4},
              {'Key':'Redmi K20','Rst':10},
              {'Key':'Redmi Note 7','Rst':7},
              {'Key':'Redmi Note 7 Pro','Rst':1},
              {'Key':'小米电视4C','Rst':10},
              {'Key':'电视32英寸','Rst':5},
              {'Key':'笔记本pro','Rst':6},
              {'Key':'小爱音箱','Rst':5},
              {'Key':'净水器','Rst':16}]
        },
        bol:true,
      }
    },
    mounted(){
      this.getFocus()
      this.navbomulli()
    },
    methods:{
      getFocus(){
        var text = document.querySelector('.texts')
        var searchinput = document.querySelector('.search-input')
        var search_hot = document.querySelector('.search_hot')
        var product_record = document.querySelector('.product_record')
        var product_record_li = document.querySelector('.product_record_ul').children
        const textborder = text.style.border
        const searchinputborder = searchinput.style.border
        text.onfocus = ()=>{
          text.style.border='1px solid #ff6700'
          searchinput.style.border='1px solid #ff6700'
          search_hot.style.display='none'
          product_record.style.display='block'
        }
        text.onblur = ()=>{
          text.style.border = textborder
          searchinput.style.border = searchinputborder
          search_hot.style.display='block'
          product_record.style.display='none'
        }
        for(var i=0;i < product_record_li.length;i++){
          product_record_li[i].onmousemove=function () {
            this.style.backgroundColor='#FAFAFA'
          }
          product_record_li[i].onmouseout=function () {
            this.style.backgroundColor='#fff'
          }
        }
      },
      navbomulli(){

          var navList = this.$refs.navList.children //上方的ul li
          var containers = this.$refs.containers.children //下方 ul
          var itemchildren = this.$refs.itemchildren //下方 最大的盒子
        var content = document.querySelector('.content')
        var border = document.querySelector('.border')
        // nav 最外层的盒子border
        for (let i = 1; i < navList.length-2 ; i++) {

          const  index = 0
          navList[i].onmouseover = function () {
            containers[index].style.display = 'block'
            itemchildren.style.display = 'block'
            // border.style.display = 'block'
            // itemchildren.visibility='hidden'all
            itemchildren.style.borderTop= '1px solid #e0e0e0'
            itemchildren.style.height =  '229px'
          }
          containers[index].onmouseover = function () {
            containers[index].style.display = 'block'
            itemchildren.style.display = 'block'
            // border.style.display = 'block'

            itemchildren.style.borderTop= '1px solid #e0e0e0'
            itemchildren.style.height =  '229px'
          }
          itemchildren.onmouseleave = function () {
            // border.style.display = 'none'
            itemchildren.style.borderTop= '0px solid #e0e0e0'
            itemchildren.style.height =  '0'

          }
          navList[i].onmouseout = function () {
            // border.style.display = 'none'
            itemchildren.style.borderTop= '0px solid #e0e0e0'
            itemchildren.style.height =  '0'

          }
          var getStyle = getComputedStyle(content,null).top.substring(-1,4)
          console.log(getStyle);
          // if (Math.abs(getStyle)=== 225 ) {
          //       itemchildren.style.display = 'none'
          //     }

          // itemchildren.onmouseover = function () {
          //   itemchildren.style.display = 'block'
          // }

        }
        // getComputedStyle(content,null).top  element.currentStyle[name]
       /* console.log(Math.abs(getStyle));
        console.log();
        console.log(typeof Math.abs(getStyle));
        console.log(typeof  255);*/


      },

    },


  }
</script>
<style scoped lang="scss">
  .border{
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    display: none;
    z-index: 99999;
  }
  .topbox{
    position: relative;
    z-index: 99999;
    width: 100%;
    height: 0;
    background-color: #fff;
  }
  *{
    margin: 0;
    padding: 0;
    outline-style: none;
    border: 0;
    text-decoration: none;
    list-style: none;
  }
  .xiaomi{
    color: #FF6600;
  }
  html,body{
    color: #333333;
    font-size: 14px;
    width: 100%;
    height: 100%;

  }
  .clearfix::before,.clearfix::after{
    content: '';
    display: table;

  }
  .clearfix::after{
    clear: both;
  }
  .clearfix{
    *zoom: 1;
  }
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1}
  .transform-y{
    transition: all .2s ease;
  }
  .transform-y:hover{
    transform:translateY(-3px);
    box-shadow:0 2px 17px 5px rgba(100,100, 100, 0.3);
  }


  .clearfix::after {
    clear: both;
    padding: 0;
  }
  .clearfix::before, .clearfix::after {
    content: " ";
    display: table;
  }
  .clearfix {
    *zoom: 1;
  }
  .allbomli{
    float: left;
    position: relative;
    visibility: hidden;
    .boma{
      display: block;
      padding: 26px 10px 38px;
      color:#333 ;
      font-size: 16px;
      padding-right: 15px;
      .text{

      }
    }
  }
  .w{
    min-width: 1226px;
    max-width: 1226px;
    margin: 0px auto;
  }
  .bomafuwu, .bomashequ{
    padding: 26px 10px 38px;
    color:#333 ;
    font-size: 16px;
  }
  .bomlifuwu{
    display: inline-block;
  }
  .nav{
    /*background-color: #c48;*/
    position:relative;
    z-index: 999;
    top: 0;
    .top{
      background-color: #fff;
      position:relative;
      align-items: center;
      z-index:999999;
      .top_left{
        position: relative;
        float: left;
        .top_nav-a{
          position: relative;
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #ff6700;
          text-indent: -999px;
        }
        .top_nav-a::before{
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 55px;
          height: 55px;
          background:url("https://s01.mifile.cn/i/mi-logo.png") no-repeat;
        }
      }
      .bottom{
        width: 850px;
        height: 80px;
        top: 10px;
        float: left;
        .bom{
         display: inline-block;
          .bomul{
            padding: 0 0 0 30px;
            .bomli{
              display: inline-block;
              .boma{
                display: inline-block;
                padding: 16px 10px 38px;
                color:#333 ;
                font-size: 16px;
                .text{

                }
              }

            }
            .bomli:hover{
              a{
                color: #ff6700;
              }
            }
          }
        }
      }
      .top_right{
        float: right;
        position: relative;
        bottom: 0;
        cursor: pointer;
        .search{
          input{
            display: inline-block;
          }
            .texts{
              float: left;
              border: 1px solid #e0e0e0;
              width: 223px;
              height: 48px;
              padding: 0 10px;
              transition: all .3s ease;
            }
          .search_hot{
            position: absolute;
            right: 62px;
            top: 50%;
            margin-top: -10px;
            span{
              font-size: 12px;
              background: #eee;
              color: #757575;
              padding: 0 5px;
              transition: all .3s ease;
            }
            span:hover{
              color: white;
              background-color: #ff6700;
            }
          }
            .search-input{
              float: left;
              width: 34px;
              height: 48px;
              padding: 0 8px;
              line-height: 48px;
              text-align: center;
              background-color: #fff;
              border: 1px solid #e0e0e0;
              font-size: 25px;
              color: #616161;
              margin-left: -1px;
              transition: all .3s ease;
            }
          .search-input:hover{
            color: white;
            background-color: #ff6700;
          }
        }
        .search:hover{
          .texts{
            border:1px solid #999;
          }
          .search-input{
            border:1px solid #999;
          }
        }
        .product_record{
          position: absolute;
          display: none;
          top: 50px;
          border: 1px solid #ff6700;
          border-top: 0;
          z-index: 66;
          background-color: #fff;
          .product_recordli{
            height: 18px;
            color: #333;
            width: 213px;
            padding: 6px 15px;
            font-size: 12px;
            line-height: 18px;
            .left{
              float: left;
            }
            .right{
              color: #b0b0b0;
              float: right;
            }
          }

        }
      }
    }

  }
  .item-children{
    position: absolute;
    top:80px;
    width: 100%;
    height: 0px;
    /*height: 10px;*/
    /*height: 229px;*/
    overflow: hidden;
    border-top: 0px solid #e0e0e0;
    transition: all  .8s ease;
    overflow: hidden;
    .content{
      position: relative;
      top: 0px;
      box-shadow: 0 10px 9px -7px rgba(0, 0, 0, 0.2);
      margin-bottom: 9px;
      background-color: #fff;
      .container{
        width: 100%;
        height: 100%;
        .childrenlist{
          .first{
            text-align: center;
            position: relative;
            width: 180px;
            height: 179px;
            padding: 35px 12px 0 12px;
            .firsthot{

              text-align: center;
              position: absolute;
              margin-left: -35px;
              top:0;
              left: 50%;
                .newfont{
                display: inline-block;
                border: 1px solid #ff6700;
                padding: 1px 20px;
                  color:#ff6700;
              }
            }
            .firstcontent{
              margin-bottom: 16px;
            }
            .firstbom{
              line-height: 20px;
              font-size: 12px;
              .topfont{

              }
              .bomfont{
                line-height: 20px;
                color:#ff6700;
                padding-bottom: 20px;
              }
            }
          }
          .first:hover{
          }
          .first::before{
            position: absolute;
            content: '';
            width: 1px;
            height: 100px;
            left:10px;
            top: 60px;
            background-color: #e0e0e0;
          }
        }
      }
    }
  }

</style>
