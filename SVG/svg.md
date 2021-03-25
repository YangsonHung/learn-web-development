# SVG(Scalable Vector Graphics) 可缩放矢量图形

## 基本元素

### 基本形状

#### 线 `<line>`

`<line>`元素是一个SVG基本形状，用于创建一条连接两点的线

```html
<svg stroke="black">
  <line x1="0" y1="0" x2="100" y2="0"></line>
</svg>
```

- x1：定义直线起始点的x轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`
- y1：定义直线起始点的y轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`
- x2：定义直线终点的x轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`
- y2：定义直线终点的y轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`



#### 折线 `<polyLine>`

`<polyline>`元素是一个SVG基本形状，它创建了连接几个点的直线。通常，折线用于创建开放形状，因为最后一个点不必连接到第一个点。

```html
<!-- 默认填充 -->
<svg>
  <polyline points="0,100 50,25 50,75 100,0" />
</svg>
<!-- 不设置填充 -->
<svg fill="none" stroke="black">
  <polyline points="100,100 150,25 150,75 200,0" />
</svg>
```

- points：定义绘制折线所需的点(x、y绝对坐标对)列表，坐标值可以用逗号隔开或者空格隔开

每个坐标值可以用逗号或者空格隔开，以下都是合法的用法
```
points="100,100 150,25 150,75 200,0"
```




`fill`属性可以设置填充颜色

#### 矩形 `<rect>`

#### 圆 `<circle>`

#### 椭圆 `<ellipse>`

#### 多边形 `<polygon>`

#### 路径 `<path>`

### 结构元素


## 基本属性
