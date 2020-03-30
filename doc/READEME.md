> components 
#####  Property 'stars' has no initializer and is not definitely assigned in the constructor
###### 如果出现上述问题,原因是:
###### 新版本中,当tsconfig.json中,选项 strictPropertyInitialization:true 的时候，编译器会确保类中所有的属性都已经初始化，否则报错
###### 解决办法: 将文件中该设置改为falsestrictPropertyInitialization:false

#### 美食评价的插件
#### index.js的代码
> ##### 第一步: install(Vue){}接收Vue参数

> ##### 第二步: 创建Comment的Vue构造器
`const Toast = Vue.extend(Comment)`

> ##### 第三步:将Comment组件实例挂载到指定的元素(div),并手动渲染
`const instance=new Toast().$mount(document.createElement("div")) ||  new Toast().$mount()`

> ##### 第四步:将渲染好的组件实例挂载到body的节点中,可以通过$el属性来访问组件实例
`Vue.prototype.$comment=document.body.appendChild(instance.$el)`
###### 可以通过将一些属性暴露出来,组件可接收用户对属性的修改.也可以写show或者hide等方法控制组件的显示和隐藏或进行其他操作,本组件中增加了show和hide方法可处理组件的显示和隐藏,暴露commentBoxStatus和stars属性,用户可执行修改,满足评价组件的基本要求 

----

#### 遇到的一些问题:
> ##### 1.在利用TypeScrip进行Vue项目开发时,最好创建vue-shim.d.ts文件,主要是告诉TypeScript遇到*.vue文件时,交给vue模块进行处理,且在后续的开发中,需要引入vue文件时,最好引入为*.vue文件,也是便于typescript识别vue文件
> ##### 2.遇到报错如下:
```
TS2339: Property 'flag' does not exist on type '{ _close(): void; mouseEnter(idx: any): void; changeStarLabel(num: any): void; mouseLeave(): void; handleSelected(n: any): void; handleEvent(e: any): void; handleSelectedMarks(param: any): void; changeSubmitStatus(e: any): boolean; setWordLimit(): void; handleSubmit(): Promise<...>; handleEndClass(): void; }'.
TS2339: Property 'commentBoxStatus' does not exist on type '{ _close(): void; mouseEnter(idx: any): void; changeStarLabel(num: any): void; mouseLeave(): void; handleSelected(n: any): void; handleEvent(e: any): void; handleSelectedMarks(param: any): void; changeSubmitStatus(e: any): boolean; setWordLimit(): void; handleSubmit(): Promise<...>; handleEndClass(): void; }'.
......
```
###### 以上一系列类似的错误,其中flag和commentBoxStatus均为vue组件中data里的变量,在methods中使用data中变量时(`eg:this.commentBoxStatus=true`),就会报错(认为该变量不存在),查询很久方法后,终于找到了一个方法:将`this.commentBoxStatus=true`改为`this[“commentBoxStatus”]=true`就不会出现该问题,同时,在ts中使用该组件时,也使用该引用方法

#### 评价组件如下样式:
![avatar](./src/assets/readme/comment_1.png)
![avatar](./src/assets/readme/comment_2.png)
![avatar](./src/assets/readme/comment_3.png)


##### vue-cli处理静态资源
###### 1.在javascript中被导入或者template/css中通过相对路径(必须以.开头)被引用的静态资源,会被webpack处理. (推荐使用经过webpack打包后的资源) 
```
例如,<img src="...">、background-image:url("...")和css中@import的资源url都会被解析成一个模块依赖.
例如<img src="./images.png">会被翻译成require("./images.png"),
且会被编译成
h('img', { attrs: { src: require('./image.png') }}),
在其内部,通过file-loader用版本哈希值和正确的公共基础路径决定文件最终的路径,再用url-loader将小于4kb(可以通过chainWebpack修改其限制大小)的资源内联,以减少http请求的数量.
```
###### 2.放在public目录下或者通过绝对路径被引用,这类资源会被直接拷贝,而不会经过webpack处理.  

###### ps:绝对路径将会被保留,相对路径(以.开头)会作为相对模块请求被解析和当前系统文件结构解析.  或者以~开头的静态资源文件会被作为一个模块请求被解析.   以@开头的也会作为模块请求被解析,vue-cli默认会设置一个指向<projectRoot>/src的别名@


##### css modules
###### 若想在javascript中作为css Modules导入css或者其他预处理文件,该文件应该以.module.(css/stylus/scss/sass)等结尾 eg:  
```
import sassStyles from './foo.module.scss'

设置requireModuleExtension为false可以去掉文件名中的".module"
// vue.config.js
module.exports = {
  css: {
    requireModuleExtension: false
  }
}
可以通过css.loaderOptions向webpack的预处理器loader传递选项(例如全局变量) 
// 详见https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
```
##### webpack基础配置
###### vue.config.js中configurWebpack提供一个对象,有些值是基于vue.config.js中的值设置的,所以不能直接修改,例如应该修改vue.config.js中的outputDir,而不是configurWebpack对象中output.path
###### 如果configurWebpack需要基于环境条件啊切换配置,或者想直接修改配置,则可以将configurWebpack切换成函数(该函数会在环境变量被设置之后懒执行),在函数内,可以直接修改配置  
```
// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
```
##### webpack链式操作 chainWebpack
###### 可以定义具名的loader规则和具名插件,并且可以更细粒度地控制其内部配置
 ps:对于css,推荐使用css.loaderOptions指定其loader,而不是直接通过链式操作,这是因为每种css类型都有多个规则,css.loaderOptions的配置可以确保对所有css种类进行规则修改.
替换规则里的loader,例如对于内联的svg文件使用vue-svg-loader,而不是下载文件

##### 环境变量和模式
可以通过外部文件.env等指定环境变量,一个环境文件只包含环境变量的键值对
```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略

特地模式中载入的文件优先级大于一般模式下的文件优先级

//环境文件中的键值对 
FOO=bar
VUE_APP_SECRET=secret
```
###### 默认情况下,vue cli有三个模式:development、test、production
每个模式都会将NODE_ENV设置为当前模式的名称,例如:development模式下,NODE_ENV="development",可以通过--mode参数可以为命令行覆写默认的模式

###### 在客户端代码中使用环境变量  
VUE_APP_*、NODE_ENV、BASE_URL(和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。)会被webpack.DefinePlugin静态嵌入到客户端的包中,可以在客户端代码中通过下面的方式直接访问:
```
console.log(process.env.VUE_APP_SECRET)
```
##### 构建目标,打包文件
###### 当开发一个库时,导入css是有副作用的,确保在package.json中移除"sideEffects:false",否则css会在生产环境构建时被webpack丢掉.

##### [object,object]转化为json对象
let obj="<%= home.obj %>"
当console.log(obj)为[object,objetc]时,如何转换为我们所需要的json格式呢?
JSON.stringify(obj)  // "[object,object]"
JSONObject.fromObject(obj)  // //ReferenceError: JSONObject is not defined[详细了解]
JSON.parse(obj)  //SyntaxError: JSON.parse: unexpected character at line 1 column 2 of the JSON data[详细了解]

这是由于"<%= home.obj %>"在解析时,和home内部数据的双引号进行匹配,所以无法进行json格式的转换
###### 解决办法: 将"<%= home.obj %>"的双引号改为单引号'',避免引号匹配出现混乱,JSON.parse('<%= home.obj %>')  









