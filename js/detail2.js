$(function () {
    // 利用 location.search.subring() 获取id   工作中更推荐 === 等号，所以把这个改成数字
    let id = parseInt(location.search.substring(4));
    //遍历数组，寻找相同的id  
    let obj = phoneData.find(e => {
        return e.pID === id
    });
    $('.sku-name').text(obj.name);
    $('.summary-price em').text('￥' + obj.price);
    $('.preview-img>img').attr('src', obj.imgSrc);

    // 点击加减，小框内容改变
    //获取小框内的数字
    let num = $('.choose-number').val();
    // 获取加号元素
    $('.choose-amount .add').on('click', function () {
        if (num == 1) {
            $('.reduce').removeClass('disabled');
        }
        num++
        // 点击之后，把小框内的内容覆盖回去
        $('.choose-number').val(num);
    });

    $('.reduce').on('click', function () {
        //逻辑问题，我是num--之后再判断，还是判断之后再num--
        if (num == 1) {
            return;
        }
        num--;
        if (num == 1) {
            $('.reduce').addClass('disabled');
        }
        $('.choose-number').val(num);
    });

    //存储到本地数据存储
    $('.addshopcar').on('click', function () {
        //获取点击之后的小框
        let number = parseInt($('.choose-number').val());
        //先读取本地数据，判断本地有没有数据
        let jsonStr = localStorage.getItem('shopCartData');
        let arr;
        if (number == null) {
            arr = [];
        } else {
            //将字符串转换为对象   JSON.parse(必须放一个满足json格式的字符串)   返回值： 就是js里面的对象(也可能是数组)
            arr = JSON.parse(jsonStr); /* 读取出来的是一个字符串或者是null，所以这里不用把读取出来的数据转换成字符串，直接放进去就行了 */
        }
    });
})