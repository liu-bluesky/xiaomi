<template>
  <div class="reping">
    <div class="reping-top">
      <p>热评产品</p>
    </div>
    <div class="reping-bom">
      <ul>
        <li>
          <a href="#" class="reping-img"><img src="https://i1.mifile.cn/a4/xmad_15094337975564_BSRIq.jpg" alt=""></a>
          <p class="reping-p1"><a href="#">外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价 比高。附图，给客服妹子一个大...</a></p>
          <p class="reping-p2"> 来自于 酸小妞～！ 的评价 </p>
          <div class="reping-info">
            <h3 class="reping-h3">
              <a href="#">米家车载空气净化器（USB车充版） 灰色</a>
            </h3>
            <span class="reping-tree">|</span>
            <span class="reping-num">449元</span>
          </div>
          <div class="kong"></div>
        </li>
        <li>
          <a href="#" class="reping-img"><img src="https://i1.mifile.cn/a4/xmad_15094337975564_BSRIq.jpg" alt=""></a>
          <p class="reping-p1"><a href="#">外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价 比高。附图，给客服妹子一个大...</a></p>
          <p class="reping-p2"> 来自于 酸小妞～！ 的评价 </p>
          <div class="reping-info">
            <h3 class="reping-h3">
              <a href="#">米家车载空气净化器（USB车充版） 灰色</a>
            </h3>
            <span class="reping-tree">|</span>
            <span class="reping-num">449元</span>
          </div>
          <div class="kong"></div>
        </li>
        <li>
          <a href="#" class="reping-img"><img src="https://i1.mifile.cn/a4/xmad_15094337975564_BSRIq.jpg" alt=""></a>
          <p class="reping-p1"><a href="#">外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价 比高。附图，给客服妹子一个大...</a></p>
          <p class="reping-p2"> 来自于 酸小妞～！ 的评价 </p>
          <div class="reping-info">
            <h3 class="reping-h3">
              <a href="#">米家车载空气净化器（USB车充版） 灰色</a>
            </h3>
            <span class="reping-tree">|</span>
            <span class="reping-num">449元</span>
          </div>
          <div class="kong"></div>
        </li>
        <li>
          <a href="#" class="reping-img"><img src="https://i1.mifile.cn/a4/xmad_15094337975564_BSRIq.jpg" alt=""></a>
          <p class="reping-p1"><a href="#">外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价 比高。附图，给客服妹子一个大...</a></p>
          <p class="reping-p2"> 来自于 酸小妞～！ 的评价 </p>
          <div class="reping-info">
            <h3 class="reping-h3">
              <a href="#">米家车载空气净化器（USB车充版） 灰色</a>
            </h3>
            <span class="reping-tree">|</span>
            <span class="reping-num">449元</span>
          </div>
          <div class="kong"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "reping"
    }
</script>

<style scoped>
  body,ul,li,p{
    padding: 0;
    margin: 0;
  }
  .reping{
    width: 1226px;
    margin: 0 auto;
  }

  .reping-top{
    height: 58px;
  }
  .reping-top p{
    margin: 0;
    font:200 22px/58px  Microsoft Yahei ;
    color: #333;
  }
  .reping-bom{
    height:415px;
  }
  .reping-bom li{
    width: 296px;
    list-style: none;
    float: left;
    margin-right: 10px;
  }
  .reping-bom li:hover{
    z-index: 2;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    transition: all .2s linear;
    transform:translate3d(0, -2px, 0);
  }
  .reping-img img{
    height: 220px;
    margin: 0 0 28px
  }
  .reping-p1{
    height: 72px;
    margin: 0 28px 22px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    overflow: hidden;
  }
  .reping-p1 a{
    text-decoration: none;
    color: #333;
  }
  .reping-p2{
    height: 18px;
    margin: 0 28px 8px;
    padding: 0 10px 0 0;
    font-size: 12px;
    color: #b0b0b0;
  }
  .reping-info{
    margin: 0 30px;
    overflow: hidden;
  }
  .reping-h3{
    display: inline-block;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    max-width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: bottom;
  }
  .reping-h3 a{
    text-decoration: none;
    color: #333;
  }
  .reping-tree{
    font-size: 12px;
    color: #e0e0e0;
    margin: 0 .25em;
    font-family: sans-serif;
  }
  .reping-num{
    display: inline;
    margin: 0;
    color: #ff6700;
  }
  .kong{
    height: 30px;
  }
</style>
