$(document).ready(function() {
    var i = 1,
        j = 1,
        sig = 0,
        inc = true,
        auto = true,
        Bookmars_body = '',
        touch = 0,
        vol=0;

    $('#sucsess-cont').hide();
    $('#signal').hide();
    $('#antena').show();
    drawvolumecontroller(20,35,0);
    document.cookie = "play = " + 'play';


    setTimeout(function(){
       setInterval(function(){
            $('#car_div').html('<img id="car" src="images/car.png" style="' +
                'margin-top: ' +
                i +
                'px ;' +
                ' margin-left: ' +
                i +
                'px;' +
                '" >');
                  if(i>110){
                      inc = false;
                  }
                  if(i == 0){
                      inc = true
                  }
                //if(i== 1 || i == 111){
                //    auto = false;
                //
                //    if(j==){
                //        auto = true
                //        j=1;
                //    }
                //    j++;
                //}
                if(auto){  //auto
                    if(inc){
                        if(touch){
                            i++;
                        }

                        $('#car').attr('src','images/car.png');
                        if(i%10 == 0  &&  i < 90 && i>20){
                            sig = sig + 1;
                            drawvolumecontroller(20,35,sig);
                        }
                        if(i==40){
                            $('#signal').attr('src','images/play.png');
                            $('#signal').show();
                        }

                        if(i>50 && i<70){

                            if(getCookie('play') == 'play'){
                                document.getElementById('radio_shum').volume = 0
                                document.getElementById('radio_shum').play();
                            }

                            if(i%2==0){
                                vol =  (i-50)/20
                            }

                            document.getElementById('radio_shum').volume = vol;
                            document.getElementById('radio_play').volume = 1-vol;
                        }
                        if(i==60){
                            margat_signal();
                            margat_antena();
                        }
                        if(i==70){
                            $('#signal').attr('src','images/play_1.png');
                            $('#signal').show();
                            document.getElementById('radio_play').pause();
                            document.getElementById('radio_shum').pause();
                            if(getCookie('play') == 'play') {
                                document.getElementById('streaming').play();
                            }
                        }
                        if(i==75){
                            if(getCookie('time') > 30 ){
                                document.getElementById('radio_play').currentTime = getCookie('time') - 20;
                            }else{
                                document.getElementById('radio_play').currentTime = 0;
                            }
                            if(getCookie('play') == 'play') {
                                document.getElementById('radio_play').play();
                            }
                            document.getElementById('radio_play').volume = 1;
                            document.getElementById('radio_shum').pause();
                        }
                    }else {
                        if(touch){
                            i--;
                        }


                        $('#car').attr('src','images/car1.png');
                        if(i%10 == 0  &&  i < 90 && i>20){
                            sig = sig - 1;
                            drawvolumecontroller(20,35,sig);

                        }
                        if(i==80){
                            $('#antena').attr('src','images/icon_radio_1.png');
                            $('#antena').show();

                        }
                        if(i==60){

                            margat_signal();
                            margat_antena();
                        }
                        if(i == 50){
                            $('#antena').attr('src','images/icon_radio_2.png');
                            $('#antena').show();
                            $('#signal').attr('src','images/play.png');
                            $('#signal').show();

                            document.getElementById('radio_play').pause();
                            document.getElementById('radio_shum').pause();
                            if(getCookie('play') == 'play') {
                                document.getElementById('broadcast').play();
                            }
                        }
                        if(i==45){
                            document.getElementById('radio_play').currentTime = getCookie('time') + 10;
                            if(getCookie('play') == 'play') {
                                document.getElementById('radio_play').play();
                            }
                        }
                        if(i==40){
                            $('#signal').hide();
                        }
                    }
                    if(i== 1 || i == 111){
                        touch = 0
                        $('#play_c').attr('src','images/play_c.png')
                    }
                    //console.log(i);
                }

        },300);
    }, 4000);




    setTimeout(function(){
        $('#global').attr('class','global');
        $('.download').hide();
        var aud = document.getElementById("radio_play");
        aud.play();
        aud.onended = function() {
            aud.currentTime = 0;
            if(getCookie('play') == 'play') {
                document.getElementById('radio_play').play();
            }
        };
        if(getCookie('time') != undefined){
            document.getElementById('radio_play').currentTime = getCookie('time');
        }
        cookie_time();
    },4000);

    if(getCookie('id') != undefined){
        set_html(getCookie('id'),false);
    }
    $('.img-cont').click(function(){
        document.cookie = "play = " + 'play';

        var diapazon_url = $(this).find('img').attr('src');
        var diapazon = $(this).find('h3').html();
        var diapazon_name = $(this).find('h4').html();

        $('#diapazon').html(diapazon);
        $('#diapazon_name').html(diapazon_name);
        $('#diapazon_img').attr('src',diapazon_url);
        $('#bookmarked').html('Bookmarked on '+ diapazon + ' ' + diapazon_name);
        $('#radio_title').html( diapazon + ' ' + diapazon_name);

        get_hd_number(diapazon);

        var $ob_fool_tabs = $('#fool_tabs');
        $ob_fool_tabs.find('li').attr('class','');
        $ob_fool_tabs.find('li:last-child').attr('class','li-settings');
        $ob_fool_tabs.find('li').first().attr('class','active');
        diapazon_url = parseInt(diapazon_url[11]);
        $('#radio_play').attr('src','main/mp3/'+diapazon_url+'.mp3');
        if(getCookie('play') == 'play') {
            document.getElementById('radio_play').play()
        }
    });

    $('#seek_right , #tune_right , #img-righy').click(function(){
        right();
    });
    $('#seek_left,#tune_left,#img-left').click(function(){
        left();
    });
    $('#buy').click(function(){
        $('#sucsess-cont').show();
    })
    $('#stop').click(function(){
        var flag = $('#radio_play').attr('play');
        if(flag == 'true'){
            $('#radio_play').attr('play','false');
            document.getElementById('radio_play').pause();
            document.getElementById('radio_shum').pause();
            document.getElementById('broadcast').pause();
            document.getElementById('streaming').pause();
            document.cookie = "play = " + 'pause'
        }else {
            $('#radio_play').attr('play','true');
            document.getElementById('radio_play').play();
            document.cookie = "play = " + 'play'
        }
    });
    $('#div-fixe , #car_div').click(function(){
        if(touch){
            $('#play_c').attr('src','images/play_c.png')
            touch = 0;
        }else {
            $('#play_c').attr('src','images/stop_a.png')
            touch = 1;
        }
    })
});
function set_html(next_mp3,flag){
    var ob = '#bloc_' + next_mp3;
    ob = $(ob);
    var diapazon_url = ob.find('img').attr('src');
    var diapazon = ob.find('h3').html();
    var diapazon_name = ob.find('h4').html();

    $('#diapazon').html(diapazon);
    $('#diapazon_name').html(diapazon_name);
    $('#diapazon_img').attr('src',diapazon_url);
    $('#bookmarked').html('Bookmarked on '+ diapazon + ' ' + diapazon_name);
    $('#radio_title').html( diapazon + ' ' + diapazon_name);  //89.7 EENL

    get_hd_number(diapazon);

    if(flag) {
        if(getCookie('play') == 'play') {
            document.getElementById('radio_shum').play();
        }
    }
    setTimeout(function(){
        $('#radio_play').attr('src','main/mp3/'+next_mp3+'.mp3');
        if(flag){
            document.getElementById('radio_shum').pause();
            if(getCookie('play') == 'play') {
                document.getElementById('radio_play').play();
            }
        }
    },1000)
}
function drawvolumecontroller(length,height,nowselected){
    document.getElementById("volumcontroller").innerHTML = "";
    for (i=0;i<5;i++){
        magassag = 7 + Math.round((1.4)*(20 ));
        margintop = height-magassag;
        if (margintop <= 0) {margintop=0;}

//        console.log(nowselected);
        if (i >= nowselected){
            document.getElementById("volumcontroller").innerHTML =
                document.getElementById("volumcontroller").innerHTML +
                '<div  style="background-color:#ffffff;height:' + 22 +
                'px;margin-top:'+margintop+'px;" class="volumecontrollerbar"></div>';
        } else {
            document.getElementById("volumcontroller").innerHTML =
                document.getElementById("volumcontroller").innerHTML +
                '<div  style="height:'+22+'px;margin-top:' + margintop +
                'px;"class="volumecontrollerbar"></div>';
        }
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function margat_signal(){
    setTimeout(function(){
        setTimeout(function(){
            $('#signal').show();
            setTimeout(function(){
                $('#signal').hide();
                setTimeout(function(){
                    $('#signal').show();
                    setTimeout(function(){
                        $('#signal').hide();
                    },500)
                },500);
            },500)
        },500);
    },500)
}

function margat_antena(){
    setTimeout(function(){
        setTimeout(function(){
            $('#antena').show();
            setTimeout(function(){
                $('#antena').hide();
                setTimeout(function(){
                    $('#antena').show();
                    setTimeout(function(){
                        $('#antena').hide();
                      //alert('ok margat')
                    },500)
                },500);
            },500)
        },500);
    },500)
}
function left(){
    var mp3 =  $('#radio_play').attr('src');
    var next_mp3 = parseInt(mp3[9]) - 1;
    if(next_mp3 == 0){
        next_mp3 = 9;
    }
    var signal = getRandomArbitrary(0,4);

    set_html(next_mp3,true);
}

function right(){
    var mp3 =  $('#radio_play').attr('src');
    var next_mp3 = parseInt(mp3[9]) + 1;
    if(next_mp3 > 9){
        next_mp3 = 1;
    }

    set_html(next_mp3,true);
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// time radio
function cookie_time(){
    var audio = document.getElementById('radio_play');
    audio.addEventListener('timeupdate',function(){
        var currentTimeMs = audio.currentTime;
        document.cookie = "time = " + currentTimeMs;

    },false);
}
function cookie_time_id(id){
    var audio = document.getElementById('radio_play');
    audio.addEventListener('timeupdate',function(){
        var currentTimeMs = audio.currentTime;
        document.cookie = "time_" + id + " = " + currentTimeMs;

    },false);
}
function get_hd_number(diapazon){
    if(diapazon == '102.7'){
        $('#number_1').attr('class','hd');
        $('#number_2').attr('class','hd');
        $('#number_3').attr('class','');

    }else {
        $('#number_1').attr('class','hd');
        $('#number_2').attr('class','');
        $('#number_3').attr('class','hd');

    }
}