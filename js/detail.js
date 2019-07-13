$(function () {
    // console.log(location); /*  在里面可以找到我的点的第三个li.其中里面有一个 search: "?id3" */
    // console.log(location.search);    输出的是：  ?id3
    //console.log(location.search.substring(4))  输出的是： 7
    // 要找到id  location.search 这个属性管理着浏览器地址栏?后面的所有的内容
    //location.search 是一个字符串，如果想要得到里面的某个字符串，可以采用截取字符串的方式
    //字符串.substring(从哪里开始截取，总共截取多少个)
    let id = location.search.substring(4);
    // console.log(id);
    // 还是一样，遍历数组，找出和我们点击的时候一样的id ,然后更改他们的name, 价格， 还有图片
    //用 forEach 也行
    //自己遍历太麻烦了，使用了数组的一个新的方法 find 方法，这个方法的使用
    /* 
    数组.find(function(e,i){
    要返回一个条件
    })  
    */
    let arr = phoneData.find(function (e, i) {
        // 这里就是 如果我们 e.pID  和 我们点击的 id 是一样的话，就返回 给函数，然后赋值给 arr
        return e.pID == id;
        // console.log(e.pID);  输出的是  1- n 的每一个数字
        // console.log(id);  输出的是 我们点击 的 第几个 li 如果是 电机的 是  第四个 li   id = 4

    });
    //改名字
    $('.sku-name').text(arr.name);
    //改价格
    $('.summary-price em').text(arr.price);
    //改图片
    $('.preview-img img').attr('src', arr.imgSrc);

    //获取 + 号 元素
    let addBtn = $('.add');
    //注册 + 号点击事件 ，让我们点击加号的时候， 小框数字会增加
    // addBtn.on('click', function () {
    //     //点击加号，让我们的数字增加
    //     var num = $('.choose-number').val()
    //     num++
    //     $('.choose-number').val(num)
    //     if (num > 1) {
    //         $('.reduce').attr('class', 'reduce')
    //     }
    // });
    // $('.reduce').on('click', function () {
    //     var num = $('.choose-number').val()

    //     if (num == 1) {
    //         return
    //     }
    //     num--
    //     $('.choose-number').val(num)
    //     if (num == 1) {
    //         $('.reduce').attr('class', 'reduce disabled')

    //     }
    // })

    //注册 + 号点击事件 ，让我们点击加号的时候， 小框数字会增加
    $('.add').on('click', function () {
        //获得小框内的内容  input 是表单元素   所以这里是jq对象.val()
        let num = $('.choose-number').val();
        //让后让 小框内的内容点击一次加一次
        num++;
        // 加了以后要给回小框
        $('.choose-number').val(num);
        //这里还需要判断，当我们的小框内的内容大于1 的时候，那么客户就可以点击减的按钮，这个时候，应该吧禁用点击给去掉
        if (num > 1) {
            $('.reduce').attr('class', 'reduce');
        }
    });
    //注册点击减的事件
    $('.reduce').on('click', function () {
        // 这里也要获取小框内的内容，因为是这里 num 和 上面一个是不一样的
        let num = $('.choose-number').val();
        // 这里要先判断，如果我们小框内的内容是1 的时候，用户不能再点击减少，就不执行后面的代码
        // 这里判断的是我们一开始的小框内的内容，本来的内容，意思是判断用户是否有点击 ++++ 之类的，这个数字在点击 -- 之前是不是 1，如果是，那就不能让客户再点击减的按钮  
        if (num == 1) {
            return;
        }
        //当我点击的时候 小框内的内容减少
        num--;
        //然后再把减少的内容给回小框
        $('.choose-number').val(num);
        //这里还要再判断，如果小框内的内容已经减到1 了，那就不能再点了
        //jq对象.attr(属性名，属性值)  这里是设置
        if (num == 1) {
            $('.reduce').attr('class', 'reduce disabled');
        }
    });
});


// 暂时注释掉了detail.html 里面的 第165行 和 166行