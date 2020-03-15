<template>
  <div class="wrapper"  @mouseleave="handleEvent({type:'leave'})">
    <div class="left-nav">
      <ul>
        <li v-for=" (item,index) in navlist" :data-value="index" data-mark='hover' :key="index" @mouseover="handleMouseOver" @mouseleave="handleEvent({type:'leave'})">
           <a href="">{{item.title}}</a>        
        </li>
      </ul>
    </div>
    <div class="center-nav">
      <div class="fixed-img"></div>     
    </div>
     <div class="float-img"></div>
    <div class="right-nav"></div>
          <bodypanel :showBodyPanel="showBodyPanel" 
      @eventEmit="handleEvent" :headernav="headernav" 
      :navDetails="navDetails"/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import bodypanel from "cs-com-csbodypanel";
import  Details  from '../data'
export default Vue.extend({
  name: "bodyBox",
  components: {
    bodypanel
  },
  data() {
      return {
        navlist: [
        { title: "家电馆", url: 'www.baidu.com'},
        { title: "家电专卖", url: 'www.baidu.com' },
        { title: "家电服务", url: 'www.baidu.com' },
        { title: "企业采购", url: 'www.baidu.com' },
        { title: "商用电器", url: 'www.baidu.com' },
        { title: "以旧换新", url: 'www.baidu.com' },
      ],
       headernav: [
        { title: "家电馆", url: 'www.baidu.com'},
        { title: "家电专卖", url: 'www.baidu.com' },
        { title: "家电服务", url: 'www.baidu.com' },
        { title: "企业采购", url: 'www.baidu.com' },
        { title: "商用电器", url: 'www.baidu.com' },
        { title: "以旧换新", url: 'www.baidu.com' },
      ],
      showBodyPanel:false,
      navDetails:[{}]
      }
  }, 
    methods:{
        handleMouseOver(res){
            if(res.target && res.target.dataset.mark==='hover')
                {
                    this.handlePanelData(res.target.dataset.value)
                    this.showBodyPanel=true
                }
        },
        handleEvent(res){
            switch(res.type){
                case 'showPanel':
                this.showBodyPanel=false
                break;
                case 'leave':
                    this.showBodyPanel=false
                break;
            }
        },
        handlePanelData(index){
            let num=Number(index)
            if(num===NaN) return
                Details[num].map((el,index)=>{
                this.navDetails[index]={
                'category':el.category,
                'list':el.list
             }
            })           
        }
    }
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  min-width: 990px;
  height: 100%;
  display: grid;
  grid-template-columns: 200px 600px auto 200px;
  grid-template-rows: 100%;
  .left-nav,
  .right-nav {
    height: 480px;
    background-color: #ffffff;
  }
  .center-nav {
    width: 100%;
    height: 100%;   
    .fixed-img{
        background-color: pink;
        width: 590px;
        height: 100%;
        margin-right: 10px;     
    } 
  }
  .float-img{
        background-color: green;
        width: 190px;
        height: 100%;
    }
  .left-nav {
    padding-right: 10px;
    font-size: 14px;
    color: #333;    
    &>ul{
        padding-top: 10px;
        margin-top: 10px;
        li{
            height: 25px;
            line-height: 25px;
            width: calc(100% - 8px);
            padding-left: 18px;
            a{
                 text-decoration: none;  
                 font:14px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
                 color:#333;
                 white-space: nowrap;
                 &:hover{
                    color:red;
                    }
            }
        }
    }
  }
  .right-nav {
    padding-left: 10px;
  }
}
</style>