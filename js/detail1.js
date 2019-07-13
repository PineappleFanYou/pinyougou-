$(() => {
    // 获取相对应的id，更改详情页面的数据
    let id = location.search.substring(4);
    // console.log(location.search);   输出的是 ?id=5    我们要的是 5  所以我们要从第四个开始截取
    // 循环找相对应的id ，然后更改数据
    /* 
    数组.find(function(e,i){
    要返回一个条件
    })  
    */
    // 既然返回一个条件，那就是已经包含了判断，我们要声明一个变量来接收
    let arr = phoneData.find(e => {
        return e.pID == id;
    });
    // 更改商品介绍文字
    // console.log(arr);
    $('.sku-name').text(arr.name);
    // 更改商品的价格
    $('.summary-price em').text(arr.price);
    //更改商品的图片
    $('.preview-img>img').attr('src', arr.imgSrc);


    // 设置 加减小框，让用户可以实现加减功能
    // 首相要获取小框内的内容 
    let num = $('.choose-number').val();
    // 获取加号 元素， 注册点击事件
    $('.choose-amount .add').on('click', function () {
        // 点击一次， 就让 num加一次 ，num++
        if (num == 1) {
            $('.reduce').removeClass('disabled');
        }
        num++;
        $('.choose-number').val(num);

    });
    //获取减号 和 注册事件
    $('.reduce').on('click', function () {
        //点击一次， num 就减一次  num--
        // 但是之前要判断，如果我们小框内的内容为1 的时候，我们就不能让他点减号  
        // 我们要先判断，再num--  如果是 num = 1， 我们就直接让它不能点了
        if (num == 1) {
            return;
        }
        num--;
        if (num == 1) {
            $('.reduce').addClass('disabled');
        }
        $('.choose-number').val(num);
    });
});