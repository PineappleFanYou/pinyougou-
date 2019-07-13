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

        // 我们要先读取本地数据,所以这个是一开始没有存储信息的时候就应该做的  在本地存储的数据里面，要获取出来  localStorage.getItem(key);   返回值： 字符串 —— 永远是字符串或者是null
        let jsonStr = localStorage.getItem('shopCarData');
        // 然后判断我们之前有没有数据   这个是在读取出来之后的判断，如果没有读取，那怎么判断
        let arr; /* 我们要在外面来声明变量，如果实在if 里面声明，那么在else 里面或者其他地方就因为作用域的原因用不了 */
        if (jsonStr == null) {
            // 如果是空的，那我们就给一个空数组
            arr = [];
        } else {
            //将字符串转换为对象   JSON.parse(必须放一个满足json格式的字符串)   返回值： 就是js里面的对象(也可能是数组)
            arr = JSON.parse(jsonStr); /* 读取出来的是一个字符串或者是null，所以这里不用把读取出来的数据转换成字符串，直接放进去就行了 */
        }
        // 我们要把这些信息存储到本地存储，如果获取到这些信息？怎么样获取信息？ 我们要根据我们唯一的id 来获取这些信息， 因为id 是唯一的，我们获取了一个商品的信息，就相当于也获取其他信息，我们在第12 13 行的时候已经判断是不是该商品的id ，而且已经return 返回 给了函数， 函数赋值给了obj ，所以我们这里就可以获取到这些商品信息
        // 但是又发现如果点击同一个商品两次，就会一个商品出现两个在购物车里面，如果点击的是同一个商品，最好，把数量叠加
        // 判断当前产品的id，是否出现在 localStroge 里面的数组里面，如果出现，就是曾经添加过了，只要叠加数量
        // 其实大概的意思就是说： 用户可能是团购，或者他要买好几部手机送给家人，那就要一个商品点击好几次，把数量变成1 以上， 我们在本地存储的时候是这样的，点击一次就生成一条信息存储在本地存储，如果是这样，如果客户团购100件东西，那岂不是要存储100次，这样我们读取的时候就非常慢，所以我我们可以这样来判断，如果说id 相同，那么我们就把它叠加起来，把它变成还是一条数据
        // find 方法，如果找到了元素，就会返回该元素，但是如果没找到，会返回undefined  在我们的读取的数据的数组里面取
        let isExit = arr.find(e => {
            return e.pID == id;
        });
        if(isExit)
        let good = {
            imgSrc: obj.imgSrc,
            name: obj.name,
            price: obj.price,
            pID: obj.pID,
            number: boj.number
        }
        // 获取到这些信息后，我们把这些信息放到数组里面去  数组.push();
        arr.push(good);
        // 然后我们这些数据存在本地存储,但是之前要先转换格式 因为：localStorage.setItem(key,value);  该方式只能存储字符串，如果你给的数据不是字符串，会自动转换为字符串再存储 ，所以要先转换格式
        let jsonStr = JSON.stringify(arr);
        localStorage.setItem('shopCarData', jsonStr);
    });
    // 点击加入购物车，跳转到购物页面  location.href
    // 获取 元素 和注册事件
    $('.addshopcar').on('click', function () {
        location.href = './cart.html';
    });

});