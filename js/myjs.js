/**
 * Created by DangYang on 2016/11/4.
 */
$(function () {
    var clock = $('#clock');
    //1-12数字
    var r = 160;
    var dotlen = 360/$('.dot').length;//弧度
    var dothd = dotlen*Math.PI/180;
    $('.dot').each(function (i,ele) {
        $(this).css({
            "left":180+Math.sin(dothd*i)*r,
            "top":180+Math.cos(dothd*i)*r
        });
    });
    //刻盘
    var str;
    for(var i=0;i<60;i++){
        str +=`<div class="clock_scale">
                    <div class="scale_hidden"></div>
                    <div class="scale_show"></div>
               </div>`;
    }
    clock.append(str.substring(9));
    var scales = $('.clock_scale');
    for(var i=0;i<scales.length;i++){
        scales[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
    }

    //设置时间
    var hour_line = $('#hour_line');
    var minute_line = $('#minute_line');
    var second_line = $('#second_line');
    var date_info = $('#date_info');
    var hour_time = $('#hour_time');
    var minute_time = $('#minute_time');
    var second_time = $('#second_time');

    function setTime() {
        var now = new Date();
        var year = now.getFullYear(),
            month = now.getMonth()+1,
            day = now.getDay(),
            hours = now.getHours(),
            minutes = now.getMinutes(),
            seconds = now.getSeconds(),
            date = now.getDate();
        var weekday =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

        date_info.html(`${year}年${month}月${date}日 ${weekday[day]}`);
        hour_time.html(hours >=10 ? hours : "0"+hours);
        minute_time.html(minutes >=10 ? minutes : "0"+minutes);
        second_time.html(seconds >=10 ? seconds : "0"+seconds);

        var hour_rotate = (hours*30-90) + (Math.floor(minutes / 12) * 6);
        hour_line.css('transform' , 'rotate(' + hour_rotate + 'deg)');
        minute_line.css('transform' , 'rotate(' + (minutes*6 - 90) + 'deg)');
        second_line.css('transform' , 'rotate(' + (seconds*6 - 90)+'deg)');
    }
    setTime();
    setInterval(setTime,1000);
})
