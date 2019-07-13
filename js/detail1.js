$(() => {
    // 获取相对应的id，更改详情页面的数据
    let id = parseInt(location.search.substring(4));
    // console.log(location.search);   输出的是 ?id=5    我们要的是 5  所以我们要从第四个开始截取
    // 循环找相对应的id ，然后更改数据
    /* 
    数组.find(function(e,i){
    要返回一个条件
    })  
    */
    // 既然返回一个条件，那就是已经包含了判断，我们要声明一个变量来接收
    let obj = phoneData.find(e => {
        return e.pID === id;
    });
    // 更改商品介绍文字
    // console.log(arr);
    $('.sku-name').text(obj.name);
    // 更改商品的价格
    $('.summary-price em').text(obj.price);
    //更改商品的图片
    $('.preview-img>img').attr('src', obj.imgSrc);


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



    // ----------------  分割线   
    // 当我刷新的时候，会发现，用户刚才点击添加的数量又变成了1，而且我们加入到购物车后，要把数据存起来，不然跳转过后没有办法保存，所以我们要把点击过后数，保存在本地数据
    // 用数组的方式存储起来
    // 步骤： 1.肯定要点击加入购物车 ，然后存储在本地数据，如果不点击，不其他操作，浏览器也不知道你要存什么
    $('.addshopcar').on('click', function () {
        // 把当前对应的商品的信息加入购物车
        // 把那些信息存到本地存储里面
        // 图片、名字、单价、数量、pID
        // 只有数量是未知，需要获取
        let number = parseInt($('.choose-number').val());
        // 我们要把这些信息存储到本地存储，如果获取到这些信息？怎么样获取信息？ 我们要根据我们唯一的id 来获取这些信息， 因为id 是唯一的，我们获取了一个商品的信息，就相当于也获取其他信息，我们在第12 13 行的时候已经判断是不是该商品的id ，而且已经return 返回 给了函数， 函数赋值给了obj ，所以我们这里就可以获取到这些商品信息
        let good = {
            imgSrc: obj.imgSrc,
            name: obj.name,
            price: obj.price,
            pID: obj.pID,
            number: boj.number
        }

        // 我们要先读取本地数据   在本地存储的数据里面，要获取出来  localStorage.getItem(key);   返回值： 字符串 —— 永远是字符串或者是null
        let jsonStr = localStorage.getItem('shopCarData');
        // 然后判断我们之前有没有数据   这个是在读取出来之后的判断，如果没有读取，那怎么判断
        let arr;
        if (jsonStr == null) {
            // 如果是空的，那我们就给一个空数组
            arr = [];
        } else {
            //将字符串转换为对象   JSON.parse(必须放一个满足json格式的字符串)   返回值： 就是js里面的对象(也可能是数组)
            arr = JSON.parse(jsonStr);   /* 读取出来的是一个字符串或者是null，所以这里不用把读取出来的数据转换成字符串，直接放进去就行了 */
        }
    });
    // 点击加入购物车，跳转到购物页面  location.href
    // 获取 元素 和注册事件
    $('.addshopcar').on('click', function () {
        location.href = './cart.html';
    });

});