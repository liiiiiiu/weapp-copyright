# Weapp Copyright

🌞 微信小程序版权声明自定义组件 Copyright

> 更多微信小程序开发工具，查看 [微信小程序开发全家桶](https://www.liiiiiiu.com/dev/weapp-dev-bucket)

## 安装

```bash
npm i weapp-copyright
```

> 注意：在小程序中使用npm包前，需先[构建 npm](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 使用

| property | 类型  | 描述 |
|  ----  | ----  | ----  |
| prefix | String | 前缀名，默认为 Copyright |
| name | String | 版权所属名 |
| startYear | Number | 开始年份，默认为当前年份 |
| endYear | Number | 结束年份 |
| useCustomContent | Boolean | 是否启用自定义插槽，默认为 false |
| customStyle | String | 自定义样式 |

```javascript
// index.json

{
  "component": true,
  "usingComponents": {
    "copyright": "weapp-copyright/Copyright/Copyright"
  }
}
```

```html
<!-- index.wxml -->

<copyright />
<!-- Copyright @ 2024 -->


<copyright
  name="abc"
  start-year="2025"
  end-year="2026"
/>
<!-- Copyright @ 2025-2026 abc -->
```
