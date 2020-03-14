<template>
  <div class="wrapper">
    <div class="header-box">
        <div class="header-tips">
            <ul>
                <li>
                    <svgIcon iconClass="cursor" />
                    <a href="">湖北</a>
                </li>
            </ul>
        </div>
      <div class="header-nav">
        <a href>你好,请登录</a>
        <a href style="color:red;">免费注册</a>
        <div class="headerul-box">
            <ul>
            <li v-for="(item,index) in navArray" :key="index">
                <a href="">{{item.title}}</a>
                <svgIcon iconClass="chevron-down" />
            </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import svgIcon from 'cs-com-csicons-svg'
export default Vue.extend({
  name: "headernav",
  props: {},
  components:{
      svgIcon
  },
  data() {
    return {
      navArray: [
        { title: "我的订单", tree: 0 },
        { title: "我的双酱", tree: 1 },
        { title: "双酱会员", tree: 0 },
        { title: "企业采购", tree: 1 },
        { title: "客户服务", tree: 1 },
        { title: "网站导航", tree: 1 },
        { title: "手机双酱", tree: 0 }
      ]
    };
  }
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 30px;
  background-color: #e3e4e5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #A6A6A7;
  font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
  .header-box {
    width: 82.6%;
    min-width: 990px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .header-nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .headerul-box {
            li{
                padding: 0px 7px;
                border-left:1px solid #CCCCCC;
            }
      }
    }
    .header-tips{
        li{
            border:none
        }
    }
    ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            img{
                width: 12px;
                height: 12px;
            }
        }
    a{
          color: #A6A6A7;
          text-decoration: none;
          margin-right: 8px;
      }
      a:hover{
          color:red;
      }
  }
  svg{
      color:#999999;
      width: 16px;
      height: 16px;
  }
}
</style>