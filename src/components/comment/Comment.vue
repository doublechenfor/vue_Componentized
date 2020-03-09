<template>
  <div v-if="commentBoxStatus" class="comment_wrapper">
    <div class="comment_box" v-if="submitAppear">
      <div class="comment_header">
        <h2 class="comment_text_color">评价</h2>
        <h2 @click="_close" class="comment_close">×</h2>
      </div>
      <div class="comment_body">
        <div class="comment_body_quality">
          <div class="comment_text_color">炒饭味道:</div>
          <div class="comment_body_stars">
            <div
              class="comment_body_img"
              v-for="(item,index) in stars"
              v-bind:key="index"
              @mouseenter="mouseEnter(item)"
              @mouseleave="mouseLeave()"
              @click="handleSelected(item)"
              :style="{backgroundImage:index+1<=cur?star2:star1}"
            ></div>
          </div>
          <label class="comment_body_label">{{starText}}</label>
        </div>
        <div class="comment_body_marks" v-show="chooseMarks">
          <ul class="comment_body_ul" @click="handleEvent">
            <li
              class="comment_body_li"
              v-for="(item,index) in marks_"
              :data-id="item.text"
              v-bind:key="index"
              :data-status="'false'"
            >{{item.text}}</li>
          </ul>
        </div>
        <div class="comment_body_text">
          <div class="comment_text_color">其他想说:</div>
          <textarea
            class="comment_body_textarea"
            placeholder="请输入您的意见或建议......"
            @input="setWordLimit"
            ref="description"
            maxlength="100"
          ></textarea>
          <div
            class="comment_body_maxnum"
            :style="{color:textAreaNum===100?'rgba(0,0,0,0.3)':'rgba(248,84,21,1)'}"
          >{{textAreaNum}}</div>
        </div>
      </div>
      <div class="comment_submit">
        <button
          class="comment_submit_btn"
          :style="{backgroundColor:canSubmit?'rgba(248,84,21,1)':'rgba(0,0,0,0.15)'}"
          @click="handleSubmit"
          :disabled="disabledSubmit"
        >提交</button>
      </div>
    </div>
    <div class="comment_success" v-show="successSubmit">{{commentsText}}</div>
  </div>
</template>

<script lang="ts">
let textVal;
export default {
  name: "comment",
  data() {
    return {
      commentBoxStatus: false,
      submitAppear: true,
      stars: 5,
      commentList: {
        bad: [
          { text: "有点辣" },
          { text: "味道不好" },
          { text: "有点咸" },
          { text: "长得不好看~" }
        ],
        good: [
          { text: "还可以" },
          { text: "还不错,很好看" },
          { text: "朋友很喜欢吃" },
          { text: "家人很爱吃,还会回购" }
        ]
      },
      chooseMarks: false,
      marks_: [],
      selectedMarks: [],
      textAreaNum: 100,
      canSubmit: false,
      markStatus: false,
      successSubmit: false,
      disabledSubmit: true,
      commentsText: "感谢您的评价",
      cur: -1,
      flag: false,
      star1: "url(" + require("../../assets/images/star1.png") + ")",
      star2: "url(" + require("../../assets/images/star2.png") + ")",
      starText: "",
      el: this["$refs"].description
    };
  },
  methods: {
    _close() {
      this["commentBoxStatus"] = false;
    },
    mouseEnter(idx) {
      if (!this["flag"]) {
        this["cur"] = idx;
        this.changeStarLabel(idx);
      }
    },
    changeStarLabel(num) {
      switch (num) {
        case 1:
          this["starText"] = "非常不满意，各方面都很差";
          break;
        case 2:
          this["starText"] = "不满意，比较差";
          break;
        case 3:
          this["starText"] = "一般般，还需要改善";
          break;
        case 4:
          this["starText"] = "比较满意，还可以优化";
          break;
        case 5:
          this["starText"] = "非常满意，无可挑剔";
          break;
      }
    },
    mouseLeave() {
      if (!this["flag"]) {
        this["cur"] = -1;
        this["starText"] = "";
      }
    },
    handleSelected(n) {
      this["marks_"] = [];
      this["flag"] = true;
      this["cur"] = n;
      this.changeStarLabel(n);
      if (n > 3) {
        this["commentList"].good.forEach((item: any) => {
          this["marks_"].push(item);
        });
      } else {
        this["commentList"].bad.forEach((item: any) => {
          this["marks_"].push(item);
        });
      }
      this["chooseMarks"] = true;
    },
    handleEvent(e) {
      if (e.target.dataset.status === "true") {
        e.target.style.backgroundColor = "rgba(255,255,255,1)";
        e.target.style.border = "1px solid rgba(217,217,217,1)";
        e.target.style.color = "rgba(0,0,0,0.65)";
        e.target.dataset.status = false;
      } else if (e.target.dataset.status === "false") {
        e.target.style.backgroundColor = "rgba(255,215,87,0.2)";
        e.target.style.border = "1px solid rgba(248,84,21,0.2)";
        e.target.style.color = "rgba(248,84,21,0.8)";
        e.target.dataset.status = true;
      }
      this.handleSelectedMarks(e.target.dataset.id);
      this.changeSubmitStatus(e.srcElement.parentElement.childNodes)
        ? ((this["canSubmit"] = true), (this["disabledSubmit"] = false))
        : ((this["canSubmit"] = false), (this["disabledSubmit"] = true));
    },
    handleSelectedMarks(param: any) {
      if (JSON.stringify(this["selectedMarks"]) === "[]") {
        this["selectedMarks"].push(param);
        return;
      }
      for (let i = 0; i < this["selectedMarks"].length; i++) {
        if (this["selectedMarks"][i] === param) {
          this["selectedMarks"].splice(i, 1);
          return;
        }
      }
      this["selectedMarks"].push(param);
    },
    changeSubmitStatus(e) {
      for (let i = 0; i < e.length; i++) {
        if (e[i].dataset.status === "true") {
          return true;
        }
      }
      return false;
    },
    // 限制输入字数
    setWordLimit() {
      let lengthMax: any = 100;
      let length;
      textVal = this["el"].value;
      this["textAreaNum"] = lengthMax - parseInt(textVal.length);
      length = parseInt(lengthMax) - parseInt(textVal.length);
      if (length < 0) {
        length = 0;
      }
      if (textVal.length >= lengthMax) {
        this["el"].value = textVal.substring(0, lengthMax);
      }
    },
    async handleSubmit() {
      this["submitAppear"] = false;
      this["successSubmit"] = true;
      this.handleEndClass();
    },
    handleEndClass() {
      setTimeout(() => {
        this["successSubmit"] = false;
      }, 3000);
    }
  }
};
</script>
<style lang="stylus">
@import './index.stylus';
</style>