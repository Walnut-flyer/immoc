<template>
  <div id="app">
    <van-row class="imooc-con">
      <van-col span="6"></van-col>
      <van-col span="12">
        <van-cell-group>
          <van-field
            label="用户名"
            v-model="name"
            v-validate="'required|email'"
            name="name"
            placeholder="请输入用户名"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            label="密码"
            v-model="password"
            v-validate="'required|min:6'"
            name="password"
            type="password"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <van-cell-group class="imooc-input-end">
          <van-field
            label="验证码"
            v-model="code"
            v-validate="'required|length:4'"
            name="code"
            placeholder="请输入验证码"
          />
        </van-cell-group>
        <van-button type="primary">点击登录</van-button>
        <span class="imooc-link" href>忘记密码</span>
      </van-col>
      <van-col span="6">
        <div class="imooc-tiper">{{ errors.first('name') }}</div>
        <div class="imooc-tiper">{{ errors.first('password') }}</div>
        <div class="imooc-tiper">
          <span>{{ errors.first('code') }}</span>
          <span class="imooc-code" v-html="svg" @click="getCaptcha()"></span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      svg: '验证码加载中...',
      name: '',
      password: '',
      code: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      const that = this
      that.svg = '验证码获取中...'
      axios.get('http://47.95.8.21:3000/getCaptcha').then(res => {
        if (res.status !== 200 || res.data.code !== 200) {
          that.svg = '请点击获取验证码'
          return
        }
        that.svg = res.data.data
      })
    }
  }
}
</script>

<style lang="scss">
.imooc-con {
  margin-top: 60px;
}
.imooc-input-end {
  margin-bottom: 20px;
}
.imooc-link {
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    color: #009688;
  }
}
.imooc-tiper {
  height: 44px;
  line-height: 44px;
  padding-left: 16px;
  overflow: hidden;
  color: red;
  span {
    float: left;
  }
}
.imooc-code {
  color: #444444;
}
</style>
