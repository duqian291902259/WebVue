<template>
  <div>
    <h1 style="text-align: center">Android覆盖率报告</h1>
    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="应用名称">
        <el-radio-group v-model="form.appName">
          <el-radio label="CC-Android"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Git分支名称">
        <!-- <el-select v-model="form.branch" placeholder="请选择生成报告的分支">
          <el-option label="master" value="master"></el-option>
          <el-option label="dev" value="dev"></el-option>
        </el-select> -->
        <el-input
          v-model="form.branch"
          style="width: 310px"
          placeholder="请填写对应的分支名称,或提交记录的SHA值"
        >
        </el-input>
        <span style="width: 50px"> --VS-- </span>
        <el-select v-model="form.base_branch" placeholder="请选择对比的分支">
          <el-option
            label="请选择对比的分支"
            value="请选择对比的分支"
          ></el-option>
          <el-option label="master" value="master"></el-option>
          <el-option label="dev" value="dev"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2" style="text-align: center">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="增量覆盖率">
        <el-switch v-model="form.incremental"></el-switch>
      </el-form-item>
      <!-- <el-form-item label="生成条件">
        <el-checkbox-group v-model="form.condition">
          <el-checkbox label="追加" name="type"></el-checkbox>
          <el-checkbox label="覆盖旧版" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item> -->
      <el-form-item label="开发环境">
        <el-radio-group v-model="form.env">
          <el-radio label="Debug"></el-radio>
          <el-radio label="Release"></el-radio>
        </el-radio-group>
      </el-form-item>

      <div style="text-align: center; margin: 10px">
        <el-button type="primary" @click="onSubmit">生成覆盖率报告</el-button>
        <el-button @click="openReport">在线查看覆盖率报告</el-button>
        <el-button @click="downloadReport" style="margin-top: 10px">下载覆盖率报告</el-button>
      </div>

      <el-form-item label="提示信息" v-if="form.desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { requestGet, requestPost } from "../utils/fetch";
export default {
  data: function () {
    return {
      form: {
        appName: "CC-Android",
        branch: "dev_#411671_coverage",
        base_branch: "master",
        date1: "",
        date2: "",
        incremental: false,
        env: "Debug",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.warn(this.form);
      requestGet("http://127.0.0.1:8090/user/test", this.form)
        .then((res) => {
          console.warn(res);
          var msg = "覆盖率报告已生成，请点击在线查阅或下载...";
          this.form.desc = msg;
          this.$message.success(msg);
        })
        .catch((error) => {
          console.error(error);
          var errorMsg = `覆盖率报告生成失败... ${error}`;
          this.form.desc = errorMsg;
          this.$message.error(errorMsg);
        });

      // requestPost('http://127.0.0.1:8090/WebServer/JacocoApi/uploadEcFile', Object.assign({}, this.form, {
      //   appName:"dq-test",
      //   versionCode:"3.8.1"
      // })).then((res)=>{
      //   console.warn(res)
      // }).catch(error=>{
      //   console.error(error)
      // })
    },

    openReport() {
      var url = "http://127.0.0.1:8090/temp/cc-start-coverage/index.html";
      if(this.form.incremental==false){
        url = "http://127.0.0.1:8090/temp/cc-all-coverage/index.html";
      }
      window.open(url);
      console.warn(`open url ${url}`);
    },
    downloadReport() {
      var url = "http://127.0.0.1:8090/temp/cc-start-coverage.rar";
      if(this.form.incremental==false){
        url = "http://127.0.0.1:8090/temp/cc-all-coverage.rar";
      }
      window.open(url);
      console.warn(`download url ${url}`);
    },
  },
};
</script>