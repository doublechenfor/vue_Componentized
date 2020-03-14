<template>
  <div>
    <headernav />
    <div class="header">
      <headersearch />
      <div class="search-recommed">
      <ul>
        <li v-for="(item,index) in searchRecommend" :key="index">
          <a href="">{{item.title}}</a>
        </li>
      </ul>
      </div>
      <div class="nav-recommed">
        <ul>
          <li v-for="(item,index) in navRecommend" :key="index">
            <a href="">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import headernav from "cs-com-csheaderbox-nav";
import headersearch from "cs-com-csheaderbox-search";
export default Vue.extend({
  name: "headerBox",
  components: {
    headernav,
    headersearch
  },
  data(){
    return{
      searchRecommend: [
        { title: "进口生活品", tree: 0 },
        { title: "万券齐发", tree: 1 },
        { title: "品质箱包", tree: 0 },
        { title: "品质用车", tree: 1 },
        { title: "低价手机", tree: 1 },
        { title: "低至五折", tree: 1 },
        { title: "种子", tree: 0 },
        { title: "美妆护肤", tree: 0 },
        { title: "手机五折", tree: 0 }
      ],
      navRecommend: [
        { title: "秒杀", tree: 0 },
        { title: "优惠券", tree: 1 },
        { title: "双酱会员", tree: 0 },
        { title: "品牌闪购", tree: 1 },
        { title: "拍卖", tree: 1 },
        { title: "双酱铁锅", tree: 1 },
        { title: "双酱沙发", tree: 0 },
        { title: "双酱生鲜", tree: 0 },
        { title: "双酱蓝条", tree: 0 }
      ]
    }
  },
  mounted() {}
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  & > .wrapper {
    margin-top: 28px;
  }
  .search-recommed{
    margin-top: 7px;
    width: 38.1%;
    min-width: 490px;
    position: absolute;
    top: 60px;
    color: #666;
    font:12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;  
      a{
      color: #A6A6A7;
      text-decoration: none;
      margin-right: 10px;
      }
      a:hover{
          color:red;
      }
  }
  .nav-recommed{
    position: absolute;
    bottom: 0px;
    width: 53%;
    margin-top: 20px;
    height: 40px;
    min-width: 600px;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    font-size: 15px;
    ul{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
    }
      li{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
          text-decoration: none;
          margin: 0 11px;
          color:#333333;
        }
      }
  }
   ul{
      display: flex;
      flex-direction: row;
      }
}
</style>