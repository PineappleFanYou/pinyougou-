$(() => {
  //动态生成元素  这里相当于我们以前 for 循环里面 在外面定义的 sum = 0;  这里先给一个空，当我们遍历第一次的加进去也不影响
  let html = '';
  // 遍历数组，每遍历一次，就生成一项，生成一个li，然后排列在页面结构中
  phoneData.forEach(e => {
    // console.log(e);
    // 这里最左边的html 是 在遍历一次之后左边的 html + $(内容) 赋值的， 当我们第二次遍历的时候， 右边的(html + $(内容)这个html是第一次遍历时的结果，如果我们一开始不定义一个空(let html = '')，那么我们在遍历的时候，就会把后面一次遍历的值覆盖前面一次遍历的值，一直遍历，一直覆盖，到时候页面只有一个li)
    html += `<li class="goods-list-item">
    <a href="detail.html?id=${e.pID}">
      <div class="item-img">
        <img src="${e.imgSrc}" alt="">
      </div>
      <div class="item-title">
        ${e.name}
      </div>
      <div class="item-price">
        <span class="now">${`￥`+ e.price}</span>
      </div>
      <div class="sold">
        <span> 已售 <em>${e.percent}</em></span>
        <div class="scroll">
          <div class="per" style="width:${e.percent}%;"></div>
        </div>
        <span>剩余<i>${e.left}</i>件</span>
      </div>
    </a>
    <a href="#" class="buy">
      查看详情
    </a>
  </li>`
    // $('.goods-list>ul').append(html);
  });
  //jq对象.html() - 管的是元素内部的html结构  html()  括号里面只能接收的是字符串  jq对象.html(满足html格式的字符串)
  // 
  $('.goods-list>ul').html(html);
  //如果是经过 $() 的里面的内容，那它赋值的时候是一个节点对象
  // let target = $("<li></li>")
  //父元素jq对象.append(子元素jq对象)  所以如果上面要用$().append(obj) ，那你要转换成节点对象
  // $().append(obj)
})