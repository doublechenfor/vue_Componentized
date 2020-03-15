<template>
    <transition name="fade">
    <div class="wrapper-panel" v-if="isShow" @mouseover="mouseEvent('hover')" @mouseleave="mouseEvent('leave')">
        <div class="header-nav-panel">
            <ul class="header-nav-panel-header">
                <li v-for=" (item,index) in headernav" :key="index">
                    <a :href="item.url">{{item.title}}</a>
                    <svgIcon iconClass="chevron-right"/>
                </li>
            </ul>
            <ul  class="header-nav-panel-body" v-for=" (item,index) in navDetails" :key="index">
                <li class="header-nav-panel-body-header">
                    <a :href="item.url">{{item.category}}</a>
                    <svgIcon iconClass="chevron-right"/>
                </li>
                <li v-for="(i,n) in item.list" :key="n">
                    <a :href="i.url">{{i.title}}</a>
                </li>
            </ul>
        </div>
         <div class="header-nav-panel-aside">
                image panel
        </div>
    </div>
    </transition>
</template>
<script lang="ts">
import Vue from "vue";
import svgIcon from 'cs-com-csicons-svg'
export default Vue.extend({
  name: "bodypanel",
  components:{
      svgIcon
  },
  props:{
      showBodyPanel:{
          type:Boolean,
          default:false
      },
      headernav:{
          type:Array,
          default:[]
      },
      navDetails:{
          type:Array,
          default:[{}]
      }
  },
  watch:{
      showBodyPanel:{
          deep:true,
          immediate:true,
          handler(val){
              this.isShow=val
          }
      }
  },
  data(){
      return{     
      isShow:false
      }
  },
  methods:{
      mouseEvent(type){
        switch(type){
            case 'hover':
                this.isShow=true
                break;
            case 'leave':
                this.isShow=false
                this.$emit('eventEmit',{type:'showPanel',data:false})
                break;                  
        }
    }
  }
});
</script>
<style lang="scss" scoped>
.fade-v-enter,.fade-v-leave{
    opacity: 0;
}
.fade-v-enter-active,.fade-v-leave-active{
    opacity: 1;
}
.wrapper-panel{
    position: relative;
    top: -480px;
    left: 190px;
    width: 970px;
    height: 460px;
    z-index: 10;
    background-color: #ffffff;
    padding: 20px 0 0 20px;
    border: 2px solid #f7f7f7;
    box-shadow: 2px 0 5px rgba(0,0,0,.3);
    display: grid;
    grid-template-columns: auto 198px;
    grid-template-rows: 100%;
    .header-nav-panel{
        width: 100%;
        height: 100%;
        .header-nav-panel-header{
        li{
            background-color: #333;
            height: 24px;
            margin-right: 10px;
            a{
                font-size: 14px;
                color: #fff;
                padding: 0 10px;
                text-decoration: none;  
                line-height: 24px;
                &:hover{
                  color:red;
                }
            }
            svg{
                stroke:#fff;
                color:#fff;
             }
        }
        }
        .header-nav-panel-body{
            padding: 10px 0 0 0;
            .header-nav-panel-body-header{
                width: 80px;
                display: flex;
                justify-content: flex-end;
                margin-right: 10px;
            }
            li{
                white-space: nowrap;
                height: 32px;
                display: flex;
                align-items: center;
                svg{
                    margin-left:5px;
                    width: 12px;
                    height: 13px;
                }
                a{
                 height: 16px;
                 text-decoration: none;  
                 line-height: 16px;
                 margin: 3px 0px;
                 font:12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
                 color:#333;
                 padding: 0 7px;
                 white-space: nowrap;
                 &:hover{
                    color:red;
                    }
                }
            }
        }
    }  
    .header-nav-panel-aside{
        width: 168px;
        height: 100%;
        margin: 0 15px;
    } 
    ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        li{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
}
</style>