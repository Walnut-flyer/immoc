import { Validator } from 'vee-validate'
const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请键入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最少长度要求',
      length: () => '验证码长度要求4'
    },
    attributes: { // 就是一些field的内容
      email: '邮箱',
      password: '密码',
      name: '账户',
      code: '验证码'
    }
  }
}

Validator.localize(dictionary)
