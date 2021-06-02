# SVG(Scalable Vector Graphics) 可缩放矢量图形

## SVG元素

### 图形元素

#### 线 `<line>`

`<line>`元素是一个SVG基本形状，用于创建一条连接两点的线

```html
<svg stroke="black">
  <line x1="0" y1="80" x2="100" y2="20" />
</svg>
```

- x1：定义直线起始点的x轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`
- y1：定义直线起始点的y轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`
- x2：定义直线终点的x轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`
- y2：定义直线终点的y轴坐标，值类型： `<length>|<percentage>|<number>`，默认值是`0`

#### 折线 `<polyLine>`

`<polyline>`元素是一个SVG基本形状，它创建了连接几个点的直线。通常，折线用于创建开放形状，因为最后一个点不必连接到第一个点。

```html
<svg>
  <polyline points="0,100 50,25 50,75 100,0" />
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

- points：定义绘制折线所需的点(x、y绝对坐标对)列表，坐标值可以用逗号隔开或者空格隔开

#### 矩形 `<rect>`

`<rect>`元素是一个基本的SVG形状，用于绘制矩形，由它们的位置、宽度和高度定义。矩形可能有圆角。

```html
<!-- 简单矩形 -->
<svg>
  <rect width="100" height="100" />
</svg>

<!-- 圆角矩形 -->
<svg>
  <rect x="10" y="10" width="100" height="100" rx="15" ry="15" />
</svg>
```

- x：定义矩形的左侧位置，如x="0"定义矩形到浏览器窗口左侧的距离是0px，值类型：`<length>|<percentage>`，默认值是`0`
- y：定义矩形的顶端位置，如y="0"定义矩形到浏览器窗口顶端的距离是0px，值类型：`<length>|<percentage>`，默认值是`0`
- width：定义矩形的宽度，值类型：`<length>|<percentage>`，默认值是`auto`
- height：定义矩形的高度，值类型：`<length>|<percentage>`，默认值是`auto`
- rx：定义矩形水平角的度数，值类型：`<length>|<percentage>`，默认值是`auto`；如果ry指定了，则为ry的值。
- ry：定义矩形垂直角的度数，值类型：`<length>|<percentage>`，默认值是`auto`；如果rx指定了，则为rx的值。

> 从SVG2开始，x、y、width、height、rx和ry都是几何属性，这意味着这些属性也可以用作该元素的CSS属性

#### 圆 `<circle>`

```html
<svg>
  <circle cx="40" cy="40" r="40" />
</svg>
```

- cx：圆心的x轴坐标，值类型：`<length>|<percentage>`，默认值是`0`
- cy：圆心的y轴坐标，值类型：`<length>|<percentage>`，默认值是`0`
- r：圆的半径，小于或等于0的值将不会显示圆。值类型：`<length>`，默认值是`0`

> 从SVG2开始，cx、cy、r都是几何属性，这意味着这些属性也可以用作该元素的CSS属性

#### 椭圆 `<ellipse>`

```html
<svg>
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

- cx：定义椭圆中心的x坐标，值类型：`<length>|<percentage>`，默认值是`0`
- cy：定义椭圆中心的y坐标，值类型：`<length>|<percentage>`，默认值是`0`
- rx：定义椭圆的x轴半径，值类型：`<length>|<percentage>`，默认值是`auto`
- ry：定义椭圆的y轴半径，值类型：`<length>|<percentage>`，默认值是`auto`

> 从SVG2开始，cx、cy、rx、ry都是几何属性，这意味着这些属性也可以用作该元素的CSS属性

#### 多边形 `<polygon>`

```html
<svg>
  <!-- 默认填充 -->
  <polygon points="0,100 50,25 50,75 100,0" />
  <!-- 无填充 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

- points：定义绘制多边形所需的点(x、y绝对坐标对)列表，坐标值可以用逗号隔开或者空格隔开

#### 路径 `<path>`

```html
<svg>
  <path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
<svg>
  <path d=" M18 3 L46 3 L46 40 L61 40 L32 68 L3 40 L18 40 z" />
</svg>
<svg>
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```

- d：定义路径的形状

> 路径的指令说明：
> M = moveto
> L = lineto
> H = horizontal lineto
> V = vertical lineto
> C = curveto
> S = smooth curveto
> Q = quadratic Bézier curve
> T = smooth quadratic Bézier curveto
> A = elliptical Arc
> Z = closepath
> 大写绝对定位，小写相对定位

#### 图像`<iamge>`

```html
<svg width="200" height="200">
  <image href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="200" width="200"/>
</svg>
```

#### 文本`<text>`

```html
<svg>
  <style>
    .small { font: italic 13px sans-serif; }
    .heavy { font: bold 30px sans-serif; }
    .Rrrrr { font: italic 40px serif; fill: red; }
  </style>

  <text x="20" y="35" class="small">My</text>
  <text x="40" y="35" class="heavy">cat</text>
  <text x="55" y="55" class="small">is</text>
  <text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>
```

- x：定义文本基线起始点的x坐标
- y：定义文本基线起始点的y坐标
- dx：从上一个文本元素水平移动文本位置
- dy：从上一个文本元素垂直移动文本位置
- rotate：旋转每个单独的字形方向，可以单独旋转符号
- lengthAdjust：文本如何拉伸或压缩以适应textLength属性定义的宽度
- textLength：文本应按比例调整以适应的宽度

### 结构元素

#### `<svg>`

`<svg>`元素是一个定义新坐标系和视口的容器。它用作SVG文档的最外层元素，但也可以用于在SVG或HTML文档中嵌入SVG片段。

> xmlns属性只需要在svg文档最外层的svg元素上使用。对于内部svg元素或HTML文档来说，这是不必要的。

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

- x：svg容器显示的x坐标。对最外层的svg元素没有影响。
- y：svg容器显示的y坐标。对最外层的svg元素没有影响。
- height：定义矩形视口的显示高度(不是坐标系统的高度)
- width：定义矩形视口的显示宽度(不是坐标系统的宽度)
- preserveAspectRatio：如果以不同的纵横比显示，svg片段必须如何变形
- viewBox：当前SVG片段的SVG视口坐标。

> 从SVG2开始，x、y、宽度和高度都是几何属性，这意味着这些属性也可以用作CSS属性。

#### `<defs>`

`<defs>`元素用于存储稍后将使用的图形对象。在`<defs>`元素中创建的对象不会直接渲染。要显示它们，你必须引用它们，例如使用`<use>`元素。

图形对象可以从任何地方引用，但是，在`<defs>`元素中定义这些对象可以提高SVG内容的可理解性，并有利于文档的整体可访问性

```html
<svg viewBox="0 0 50 50">
  <!-- 要使用的图形对象 -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- 使用图形对象 -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

#### `<g>`

`<g>` SVG元素是一个容器，用于将其他SVG元素分组

应用到`<g>`元素的转换是在它的子元素上执行的，它的属性是由它的子元素继承的。它还可以将多个元素分组，以便稍后使用`<use>`元素引用。

```html
<svg viewBox="0 0 200 200">
  <defs>
    <g id="mycircle" fill="white" stroke="green" stroke-width="5">
      <circle cx="40" cy="40" r="25" />
      <circle cx="60" cy="60" r="25" />
    </g>
  </defs>
  <use href="#mycircle" />
</svg>
```

#### `<symbol>`

`<symbol>`元素用于定义图形化的模板对象，这些对象可以由`<use>`元素实例化。

```html
<svg viewBox="0 0 80 20">
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

  <path d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20" fill="none" stroke="pink" />

  <use href="#myDot" x="5" y="5" style="opacity:1.0" />
  <use href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

- x：定义`<symbol>`的x坐标

- y：定义`<symbol>`的y坐标

- height：定义`<symbol>`的高度

- width：定义`<symbol>`的宽度

- preserveAspectRatio：这个属性定义了如果svg片段嵌入了具有不同宽高比的容器中，那么它必须如何变形。

- refX：此属性确定符号参考点的x坐标

- refY：此属性确定符号参考点的y坐标

- viewBox：这个属性定义了当前符号的SVG视口的范围。

#### `<use>`

`<use>`元素从SVG文档中获取节点，并在其他地方复制它们

```html
<svg viewBox="0 0 50 50">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue"/>
  <use href="#myCircle" x="10" fill="blue"/>
  <use href="#myCircle" x="20" fill="white" stroke="red"/>
</svg>
```

第二个`use`里`stroke`不会覆盖`circle`，  大多数属性(x、y、width、height和(xlink:)href除外)都不覆盖祖先中设置的属性。

- x：定义`<use>`元素的x坐标
- y：定义`<use>`元素的y坐标
- width：定义`<use>`元素的宽度
- height：定义`<use>`元素的高度
- href：定义需要复用的元素/片段

> 宽度和高度对use元素没有影响，除非引用的元素有一个viewbox——也就是说，只有当use引用svg或symbol元素时，它们才有影响。
>
> 从SVG2开始，x、y、宽度和高度都是几何属性，这意味着这些属性也可以用作该元素的CSS属性。

### 文本内容元素

#### `<textPath>`

要沿着`<path>`的形状呈现文本，请将文本包含在`<textPath>`元素中，该元素具有一个引用`<path>`元素的`href`属性

```html
<svg viewBox="0 0 200 200">
  <path id="MyPath" fill="none" stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <text>
    <textPath href="#MyPath">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

```html
// 将路径定义在defs内可以隐藏
<svg viewBox="0 0 200 200">
  <defs>
    <path id="MyPath" fill="none" stroke="red"
      d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  </defs>
  <text>
    <textPath href="#MyPath">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

- href：要在其上呈现文本的路径或基本形状的URL。如果设置了path属性，则href不起作用。
- lengthAdjust：长度调整应适用于文本:符号之间的空间，或空格和符号本身
- method：沿着路径渲染单个符号的方法
- path：文本应在其上呈现的路径
- side：文本应该渲染路径的哪一侧。
- spacing：如何处理符号之间的空间。
- startOffset：文本的开始距离路径的开始应该偏移多远
- textLength：文本将渲染到的空间的宽度。

#### `<tspan>`

在 `<text>`元素中，利用内含的`tspan`元素，可以调整文本和字体的属性以及当前文本的位置、绝对或相对坐标值。

```html
<svg viewBox="0 0 240 40">
  <style>
    text  { font: italic 12px serif; }
    tspan { font: bold 10px sans-serif; fill: red; }
  </style>

  <text x="10" y="30" class="small">
    You are
    <tspan>not</tspan>
    a banana!
  </text>
</svg>
```

- x：文本基线起始点的x坐标
- y：文本基线起始点的y坐标
- dx：从上一个文本元素水平移动文本位置
- dy：从上一个文本元素垂直移动文本位置
- rotate：旋转每个单独的字形方向。可以单独旋转符号
- lengthAdjust：文本如何拉伸或压缩以适应textLength属性定义的宽度
- textLength：文本应按比例调整以适应的宽度。

### 滤镜元素

#### `<filter>`

`filter`元素作用是作为原子滤镜操作的容器。它不能直接呈现。可以利用目标SVG元素上的`filter`属性引用一个滤镜。

## svg属性

### 通用属性

#### 核心属性

1. id
2. lang
3. tabindex
4. xml:base
5. xml:lang
6. xml:space

#### 样式属性

1. class
2. style

### Xlink 属性

1. xlink:href
2. xlink:type
3. xlink:role
4. xlink:arcrole
5. xlink:title
6. xlink:show
7. xlink:actuate

### 展示属性

> 所有的展示属性都可以作为CSS属性

1. alignment-baseline

2. baseline-shift

3. clip

4. clip-path

5. clip-rule

6. color

7. color-interpolation

8. color-interpolation-filters

9. color-profile

10. color-rendering

11. cursor

12. direction

13. display

14. dominant-baseline

15. enable-background

16. fill

17. fill-opacity

18. fill-rule

19. filter

20. flood-color

21. flood-opacity

22. font-family

23. font-size

24. font-size-adjust

25. font-stretch

26. font-style

27. font-variant

28. font-weight

29. glyph-orientation-horizontal

30. glyph-orientation-vertical

31. image-rendering

32. kerning

33. letter-spacing

34. lighting-color

35. marker-end

36. marker-mid

37. marker-start

38. mask

39. opacity

40. overflow

41. pointer-events

42. shape-rendering

43. stop-color

44. stop-opacity

45. stroke

46. stroke-dasharray

47. stroke-dashoffset

48. stroke-linecap

49. stroke-linejoin

50. stroke-miterlimit

51. stroke-opacity

52. stroke-width

53. text-anchor

54. text-decoration

55. text-rendering

56. transform

57. transform-origin

58. unicode-bidi

59. vector-effect

60. visibility

61. word-spacing

62. writing-mode

### 滤镜属性

### 动画属性

### 事件属性
