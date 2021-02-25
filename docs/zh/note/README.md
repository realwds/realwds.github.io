# 技术笔记

::: tip 说明
笔记记录，知识点摘抄
:::

## GIT 相关

- [**GitHub国内加速访问**](/zh/note/git/GitHub国内加速访问.md)
- [**GitPage三合一网站部署**](/zh/note/git/GitPage三合一网站部署.md)


## VUE 相关

- [**vue面试知识点合集**](/zh/note/vue/README.md)


## JAVASCRIPT 相关

- `Array.from( )` 方法，将类数组转换成数组。如果沒有length，将变成空数组，不是类数组，undefined

``` js
let arrayLike = {
    0: 'tom', 
    1: '65',
    2: '男',
    3: ['jane','john','Mary'],
    'length': 4
}
let arr = Array.from(arrayLike)
console.log(arr) // ['tom','65','男',['jane','john','Mary']]
```