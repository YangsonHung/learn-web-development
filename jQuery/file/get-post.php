<?php
$q = $_GET["q"];
if ($q == "GET") {
    echo "get的返回数据";
} elseif ($q == "POST") {
    $name = $_POST["name"];
    $age = $_POST["age"];
    echo "POST的返回数据 "."姓名：" . $name . " 年龄：" . $age;
}

// $_GET 收集method为get的表单的信息，任何人可见，有数量限制
// $_POST 收集method为post的表单的信息，不可见，没有数量限制
// jQuery AJAX 的 $.get() 和 $.post() 的第一个URL参数都可以带"?=参数"形式
// 所以 PHP 接收 URL 携带的参数只能使用$_GET[]
