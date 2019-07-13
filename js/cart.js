$(() => {
    // 跳转之后，要在页面上读取数据
    let jsonStr = localStorage.getItem('shopCartData');
    // console.log(jsonStr);  输出的是一个
    // 判断jsonStr是否为null如果是null就没有数据，如果不是null，就是有数据，需要生成购物车的商品列表
    let arr = [];
    // 如果不是null，就是有数据，需要生成购物车的商品列表            如果是null 那就是没有数据， 没有数据 就不用else ，会弹出空空如也
    if (jsonStr !== null) {
        // 把读取出来的数据放进来 循环找
        arr = JSON.parse(jsonStr);
        let html = '';
        // 遍历
        arr.forEach(e => {
            html += `<div class="item" data-id="${e.pID}">
            <div class="row">
              <div class="cell col-1 row">
                <div class="cell col-1">
                  <input type="checkbox" class="item-ck" checked="">
                </div>
                <div class="cell col-4">
                  <img src="${e.imgSrc}" alt="">
                </div>
              </div>
              <div class="cell col-4 row">
                <div class="item-name">${e.name}</div>
              </div>
              <div class="cell col-1 tc lh70">
                <span>￥</span>
                <em class="price">${e.price}</em>
              </div>
              <div class="cell col-1 tc lh70">
                <div class="item-count">
                  <a href="javascript:void(0);" class="reduce fl">-</a>
                  <input autocomplete="off" type="text" class="number fl" value="${e.number}">
                  <a href="javascript:void(0);" class="add fl">+</a>
                </div>
              </div>
              <div class="cell col-1 tc lh70">
                <span>￥</span>
                <em class="computed">${e.price*e.number}</em>
              </div>
              <div class="cell col-1">
                <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
              </div>
            </div>
          </div>`
        });
        $('.item-list').html(html);
        // 因为已经生成了结构，所以把空空如也隐藏掉
        $('.empty-tip').hide();
        // 把表头+总计显示出来
        $('.cart-header').removeClass('hidden');
        $('.total-of').removeClass('hidden');
    }
});