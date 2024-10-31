<template>
  <div class="app-container">
    <div class="echarts">
      <div class="bin" id="main"></div>
    </div>
  </div>
</template>

<script>
import {
  fetchFriendAuth,
  fetchFriendMap
} from '@/service/api';

let myChart = undefined

export default {
  name: "graph",
  data() {
    return {

      // 新增or更新，新增为true，更新为false
      requireFlag: false,
      // myChart: undefined,
      // 表单参数
      form: {},
      formConnect: {},
      // 表单校验
      rules: {
        personWebName: [{
          required: true,
          message: '成员名称为必填项',
          trigger: 'blur'
        }],
        personWebPic: [{
          required: true,
          message: '成员头图为必填项',
          trigger: 'change'
        }],
        personWebShow: [{
          required: true,
          message: '是否展示为必填项',
          trigger: 'change'
        }],
      },
      rulesConnect: {
        personWebIdAlpha: [{
          required: true,
          message: '',
          trigger: 'blur'
        }],
        personWebIdBeta: [{
          required: true,
          message: '',
          trigger: 'blur'
        }],
        connectWebName: [{
          required: true,
          message: '请输入关联关系',
          trigger: 'blur'
        }],
        connectWebInfo: [{
          required: true,
          message: '请输入关联信息',
          trigger: 'blur'
        }],
      },
      selectLoading: false,
      optionsStart: [],
      optionsEnd: [],
      personList: [],
      personMap: [],
      // 临时标签列表
      personWebPlatformTemp: undefined,
      personWebFieldTemp: undefined,
      // 路径
      person_pic_url: "image://" + process.env.VUE_APP_SERVICE_URL + process.env.VUE_APP_BASE_API + "/profile/video_matrix/",
      // 图片预览框
      picVisible: false,
      // 拼接
      answerPicImageUrl: "",
      // 路径
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 弹出层标题
      title: "",
      titleConnect: "",
      // 是否显示弹出层
      open: false,
      openConnect: false,
      inputVisible: false,
      // 具体内容
      inputValue: '',
      personWebShowOptions: [],
      personWebPlatformOptions: [],
      searchQueryParams: {
        // 这个一定得有
        personWebIdStart: null,
        // 这个可有可无
        personWebIdEnd: null,
      },
      graph: {
        nodes: [],
        links: []
      },
      mapCheckList: []
    }
  },
  created() {
    this.getList();
  },
  async mounted() {
    // 当组件挂载完成后监听window的滚动事件
    window.addEventListener('scroll', this.handleScroll);
    await this.getMap();
    // 基于准备好的dom，初始化echarts实例
    let echarts = require('echarts')
    myChart = echarts.init(document.getElementById('main'));
    // this.myEcharts();
  },
  beforeDestroy() {
    // 当组件销毁时移除滚动事件监听，避免内存泄漏
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 获取滚动的垂直高度
      const scrollPosition = window.scrollY;

      // 定义阈值，例如滚动到500px时触发事件
      const scrollThreshold = 12000;

      // console.log(scrollPosition)

      // 判断滚动高度是否超过阈值
      if (scrollPosition >= scrollThreshold) {
        this.myEcharts();

        // 一旦执行后，你可以选择移除滚动监听器，避免重复触发
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
    picShow(pic) {
      this.answerPicImageUrl = this.person_pic_url + pic
    },
    myEcharts() {
      const that = this;
      // myChart.showLoading();

      this.graph.nodes.forEach(function (node) {
        node.label = {
          color: '#fff',
          // position: 'bottom',
          show: true
        };
        // node.symbol = that.person_pic_url + node.personWebPic
        node.itemStyle = {
          color: '#e39ac5',
          borderColor: '#b9849a',
          borderWidth: 2
        }
      });
      const option = {
        title: {
          text: '',
          subtext: '',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {
          trigger: "item",
          // textStyle: {
          //   width: 10,
          //   fontWeight: "bold",
          //   overflow: "truncate"
          // },
          confine: 'true',
          formatter: function (param) {
            if (param.dataType === 'edge') {
              // 连接
              return [
                '关系：' + param.data["connectWebName"] + '<br/>',
                '详情：' + param.data["connectWebInfo"] + '<br/>'
              ].join('');
            } else if (param.dataType === 'node') {
              // 处理标签
              let graphTag = '';
              const arr1 = JSON.parse(param.data["personWebField"]);
              for (let i = 0; i < arr1.length; i++) {
                if (i === 0) {
                  graphTag = `<span style="
                                          display: inline-block;
                                          border-radius: 4px;
                                          min-width: min-content;
                                          padding: 0 10px;
                                          margin: 5px;
                                          background-color: #e7faf0;
                                          border-color: #d0f5e0;
                                          color: #13ce66;
                                          border-width: 1px;
                                          border-style: solid;
                                        ">${arr1[i]}</span>`
                } else {
                  graphTag = graphTag + `<span style="
                                          display: inline-block;
                                          border-radius: 4px;
                                          min-width: min-content;
                                          padding: 0 10px;
                                          margin: 5px;
                                          background-color: #e7faf0;
                                          border-color: #d0f5e0;
                                          color: #13ce66;
                                          border-width: 1px;
                                          border-style: solid;
                                        ">${arr1[i]}</span>`;
                }
              }
              //             // 处理字典
              //             let graphDict = '';
              //             const arrTemp = that.selectDictLabel(that.personWebPlatformOptions, JSON.parse(param.data["personWebPlatform"]));
              //             const arr2 = arrTemp.split(', ')
              //             for (let i = 0; i < arr2.length; i++) {
              //                 if (i === 0) {
              //                     graphDict = `<span style="
              //   display: inline-block;
              //   border-radius: 4px;
              //   min-width: min-content;
              //   padding: 0 10px;
              //   margin: 5px;
              //   background-color: #faece7;
              //   border-color: #f5dad0;
              //   color: #ff7d27;
              //   border-width: 1px;
              //   border-style: solid;
              // ">${arr2[i]}</span>`
              //                 } else {
              //                     graphDict = graphDict + `<span style="
              //   display: inline-block;
              //   border-radius: 4px;
              //   min-width: min-content;
              //   padding: 0 10px;
              //   margin: 5px;
              //   background-color: #faece7;
              //   border-color: #f5dad0;
              //   color: #ff7d27;
              //   border-width: 1px;
              //   border-style: solid;
              // ">${arr2[i]}</span>`;
              //                 }
              //             }
              // 节点
              return [
                '<div style="text-align:left;max-width:1000px;">昵称：' + param.data["name"] + '<br/>',
                '<div style="display:block;word-break: break-all;word-wrap: break-word;white-space: pre-line;">简介：' + param.data["personWebInfo"] + '</div>',
                '常驻领域：' + graphTag,
                '</div><br/>',
              ].join('');
            }

          }
        },
        legend: [],
        animation: false,
        animationThreshold: 10,
        // animationDuration: 150,
        // animationEasingUpdate: 'linear',
        series: [
          {
            name: '',
            type: 'graph',
            layout: "force",
            force: {
              repulsion: 500,
              edgeLength: 50,
              gravity: 0.4
            },
            symbolSize: 50,
            data: this.graph.nodes,
            links: this.graph.links,
            // data: graph.nodes,
            // links: graph.links,
            roam: true,
            label: {
              show: true,
            },
            draggable: true,
            labelLayout: {
              hideOverlap: false
            },
            lineStyle: {
              width: 5,
              color: '#ffffff',
              curveness: 0.3
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10
              }
            }
          }
        ]
      };
      // myChart.clear();
      option && myChart.setOption(option, true);
      // console.log(option)
      // myChart.hideLoading();
    },
    getList() {
      this.loading = true;
      fetchFriendAuth().then(response => {
        this.personList = response.rows;
        Object.keys(this.personList).forEach(key => {
          this.personList[key].personWebPlatform = JSON.parse(this.personList[key].personWebPlatform)
          this.personList[key].personWebField = JSON.parse(this.personList[key].personWebField)
        });
        this.loading = false;
      });
    },
    async getMap() {

      this.loading = true;
      await fetchFriendMap().then(response => {
        this.graph = {
          nodes: [],
          links: []
        };
        this.mapCheckList = [];
        this.personMap = response.rows;
        Object.keys(this.personMap).forEach(key => {
          // 导入节点，列表为空表示首次加入元素，反之亦然
          if (this.graph.nodes !== []) {
            // 如果导入过就不用重复导入了
            if (!this.mapCheckList.includes(this.personMap[key].PersonAlpha.personWebId)) {
              this.pushAlpha(key);
            }
            if (!this.mapCheckList.includes(this.personMap[key].PersonBeta.personWebId)) {
              this.pushBeta(key);
            }
          } else {
            this.pushAlpha(key);
            this.pushBeta(key);
          }
          // 把导入过的节点id存进checkList
          this.mapCheckList.push(this.personMap[key].PersonAlpha.personWebId)
          this.mapCheckList.push(this.personMap[key].PersonBeta.personWebId)
          // 导入关系
          this.pushConnect(key);
        });
      });
      // console.log(this.graph)
      this.loading = false;
    },
    pushAlpha(key) {

      this.graph.nodes.push({
        id: this.personMap[key].PersonAlpha.personWebId,
        name: this.personMap[key].PersonAlpha.personWebName,
        personWebPic: this.personMap[key].PersonAlpha.personWebPic,
        personWebShow: this.personMap[key].PersonAlpha.personWebShow,
        personWebLink: this.personMap[key].PersonAlpha.personWebLink,
        personWebPlatform: this.personMap[key].PersonAlpha.personWebPlatform,
        personWebField: this.personMap[key].PersonAlpha.personWebField,
        personWebInfo: this.personMap[key].PersonAlpha.personWebInfo,
        personWebKey: this.personMap[key].PersonAlpha.personWebKey,
      })
    },
    pushBeta(key) {
      this.graph.nodes.push({
        id: this.personMap[key].PersonBeta.personWebId,
        name: this.personMap[key].PersonBeta.personWebName,
        personWebPic: this.personMap[key].PersonBeta.personWebPic,
        personWebShow: this.personMap[key].PersonBeta.personWebShow,
        personWebLink: this.personMap[key].PersonBeta.personWebLink,
        personWebPlatform: this.personMap[key].PersonBeta.personWebPlatform,
        personWebField: this.personMap[key].PersonBeta.personWebField,
        personWebInfo: this.personMap[key].PersonBeta.personWebInfo,
        personWebKey: this.personMap[key].PersonBeta.personWebKey,
      })
    },
    pushConnect(key) {
      this.graph.links.push({
        source: this.personMap[key].PersonAlpha.personWebId,
        target: this.personMap[key].PersonBeta.personWebId,
        connectWebId: this.personMap[key].Connect.connectWebId,
        connectWebName: this.personMap[key].Connect.connectWebName,
        connectWebInfo: this.personMap[key].Connect.connectWebInfo,
      })
    },
    async refresh() {
      await this.getMap();
      this.myEcharts();
      this.getList()
    }

  }
}
</script>


<style lang="less" scoped>

.app-container {
  padding: 20px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  line-height: 140px;
}

.avatar {
  height: 144px;
}

.image-preview {
  width: 178px;
  height: 178px;
  position: relative;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  float: left;
}

.image-preview .image-preview-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-preview .image-preview-wrapper img {
  width: 100%;
  height: 100%;
}

.image-preview .image-preview-action {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s;
  cursor: pointer;
  line-height: 200px;
}

.image-preview .image-preview-action .el-icon-delete {
  font-size: 32px;
}

.image-preview:hover .image-preview-action {
  opacity: 1;
}

.el-upload--picture-card {
  display: block;
  width: 258px;
  height: 146px;
  overflow: hidden;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.echarts {
  width: 100%;
  text-align: center;
  height: 1200px;
  margin-top: 80px;
}

.bin {
  /*text-align: center;*/
  /*padding: 50px;*/
  width: 100%;
  height: 1200px;
}

.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.graph-tag {
  display: inline-block;
  border-radius: 4px;
  min-width: min-content;
  padding: 5px;
  background-color: #e7faf0;
  border-color: #d0f5e0;
  color: #13ce66;
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

</style>
