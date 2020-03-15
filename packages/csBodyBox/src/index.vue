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
     <div v-if="showFloatImg" class="float-img" :class="!showFloatImg?'hide-floatImg':''"></div>
    <div class="right-nav"></div>
    <bodypanel :showBodyPanel="showBodyPanel" 
      @eventEmit="handleEvent" :headernav="headernav" 
      :navDetails="navDetails"/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import bodypanel from "cs-com-csbodypanel";
import {navDetails as Details,headernav as headerNav} from '../data'
import throttle from 'lodash/throttle'
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
      showBodyPanel:false,
      navDetails:[{}],
      headernav:{},
      showwidth:function(){},
      showFloatImg:true
      }
  }, 
  created(){
    this.headernav=headerNav   
    this.showwidth=throttle(this.getWindowSize)   
  },
  mounted(){
    this.addEventListener()
  },
    methods:{
        /**通过addEventListener
         * 方便进行remove
         * remove和add时,调用的函数必须相同,且remove时不允许匿名函数
         */
        addEventListener(){
            window.addEventListener('resize',this.showwidth)
        },
        /**remove
         * 在vue中事件监听时,事件必须挂载在vue上(必须以this.**调用)
         * 且在开发过程中,将方法放在methods中,remove无法执行,
         * 最后发现,需要将调用的方法在created中声明
         */
        removeEventListener(){
            window.removeEventListener('resize',this.showwidth)
        },
        getWindowSize(){
            window.innerWidth>=1330?this.showFloatImg=true:this.showFloatImg=false
        }, 
        /** mouseover
         * li的鼠标over事件,控制右侧面板&获取数据
         */
        handleMouseOver(res){
            if(res.target && res.target.dataset.mark==='hover')
                {
                    this.handlePanelData(res.target.dataset.value)
                    this.showBodyPanel=true
                }
        },
        /**处理事件
         *  数据传递&通知事件都在着通过类别分发
         * showpanel:鼠标leave面板触发(组件单独使用亦可)
         * leave:鼠标leave外面wrapper触发
         */
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
        /**处理数据
         * 向panel中赋值外部数据
         */
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
    },
    /**防止内存泄漏
     * 加上destroy
     */
    destroyed(){
      this.removeEventListener()
    },
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  min-width: 990px;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 600px auto 200px;
  grid-template-rows: 100%;
  .left-nav,
  .right-nav {
    width:190px;
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
  .hide-floatImg{
      width: 0px;
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