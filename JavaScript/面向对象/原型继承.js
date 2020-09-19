function Mouse(m) {
    this.key = m.key
}

Mouse.prototype.print = function (val) {
    if (val.name === 'mouse' && val.age === 20) {
        val.success({
            word: '鼠标'
        })
    } else {
        val.fail({
            err: '参数错误'
        })
    }
}