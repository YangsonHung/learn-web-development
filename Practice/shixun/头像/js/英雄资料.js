$(document).ready(function() {
    var title = [
        ".hero_top_title li:nth-child(1)",
        ".hero_top_title li:nth-child(2)",
        ".hero_top_title li:nth-child(3)",
        ".hero_top_title li:nth-child(4)",
        ".hero_top_title li:nth-child(5)",
        ".hero_top_title li:nth-child(6)",
        ".hero_top_title li:nth-child(7)"
    ]

    var hero_type = {
        "All": "所有英雄",
        "Fighter": "战士",
        "Mage": "法师",
        "Assassin": "刺客",
        "Fighter": "战士",
        "Tank": "坦克",
        "Marksman": "射手",
        "Support": "辅助"
    }

    /* 获取data-tags的属性值 */

    // 定义空数组
    var hero_tags = []

    // 使用each 循环遍历li，每一个li都执行function函数，将data-tags的属性值添加到数组末尾
    $(".hero_li li").each(function() {
        hero_tags.push($(this).attr("data-tags"))
    })

    for (var key in hero_tags) {
        // console.log(hero_tags[key])
    }

    // 循环遍历 每一个li的点击事件
    for (var i in title) {
        $(title[i]).click(function(event) {
            // 获取当前被点击元素的data-sort的属性值
            var hero_sort = event.currentTarget.dataset.sort
            $(this).parent("ul").children("li").removeClass("top_title_selected")
            $(this).addClass("top_title_selected")
            console.log("你点击了：" + hero_sort, hero_type[hero_sort])

            if (hero_sort === "All") {
                $(".hero_li li:nth-child(n)").show()
                for (var key in hero_tags) {
                    console.log((Number(key) + 1), $(".hero_li li:nth-child(" + (Number(key) + 1) + ")").children("p").text(), hero_tags[key])
                }
                return
            }


            // 对 hero_tags 英雄类型数组进行遍历
            for (var key in hero_tags) {
                // 判断被点击的 li 的data值是否在hero_tags的data值中
                if (hero_tags[key].indexOf(hero_sort.toLowerCase()) !== -1) {
                    console.log((Number(key) + 1), $(".hero_li li:nth-child(" + (Number(key) + 1) + ")").children("p").text(), hero_tags[key])
                    $(".hero_li li:nth-child(" + (Number(key) + 1) + ")").show()
                } else {
                    $(".hero_li li:nth-child(" + (Number(key) + 1) + ")").hide()
                }
            }
            console.log("\n")
        })
    }
})