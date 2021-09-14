<template>
  <div>
    <h1 style="text-align: center">下载覆盖率报告文件</h1>

    <el-button style="text-align: center" @click="download"
      >下载覆盖率报告文件</el-button
    >

    <el-link
      type="success"
      herf="http://127.0.0.1:8090/download?path=download/cc-android/3.8.1/coverage.ec"
      @click="download2"
      >coverage.ec</el-link
    >

    <!-- <a style="text-align: center;margin-top:20px;float:left;" herf="http://127.0.0.1:8090/download?path=download/cc-android/3.8.1/coverage.ec">coverage.ec</a> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    download() {
      window.open("http://127.0.0.1:8090/download/android/3.8.1/duqian.png");
      //window.open("http://127.0.0.1:8090/WebServer/JacocoApi/queryEcFile?appName=android&versionCode=3.8.1")
    },
    download2() {
      window.open(
        "http://127.0.0.1:8090/download?path=download/cc-android/3.8.1/coverage.ec"
      );
    },
  },
};
</script>