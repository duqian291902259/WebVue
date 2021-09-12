<template>
  <div>
    <h1 style="text-align: center">Android覆盖率报告</h1>
    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="应用名称">
        <el-input v-model="form.appName" value="Android" label="Android"
          >Android</el-input
        >
      </el-form-item>
      <el-form-item label="git分支名称">
        <el-select v-model="form.branch" placeholder="请选择生成报告的分支">
          <el-option label="master" value="master"></el-option>
          <el-option label="dev" value="dev"></el-option>
        </el-select>
        <el-select v-model="form.base_branch" placeholder="请选择对比的分支">
          <el-option label="master" value="master"></el-option>
          <el-option label="dev" value="dev"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报告生成时间">
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
      <el-form-item label="生成条件">
        <el-checkbox-group v-model="form.condition">
          <el-checkbox label="追加" name="type"></el-checkbox>
          <el-checkbox label="覆盖旧版" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="开发环境">
        <el-radio-group v-model="form.env">
          <el-radio label="Debug"></el-radio>
          <el-radio label="Release"></el-radio>
        </el-radio-group>
      </el-form-item>

      <div style="text-align: center">
        <el-button type="primary" @click="onSubmit">生成覆盖率报告</el-button>
        <el-button>在线打开覆盖率报告</el-button>
        <el-button style="margin-top: 10px">下载覆盖率报告</el-button>
      </div>

      <el-form-item label="提示信息" v-if="form.desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        appName: "CC-Android",
        branch: "dev",
        base_branch: "master",
        date1: "",
        date2: "",
        incremental: false,
        condition: ["追加"],
        env: 'Debug',
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.warn(this.form);
    },
  },
};
</script>