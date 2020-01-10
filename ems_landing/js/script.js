let path = [];
$(document).ready(function(){
	
    let html = '';
    const lenTxt = 308;
    for(var i = 0; i < feedList.length; i += 1) {
        let text = feedList[i].text.length > lenTxt ? feedList[i].text.slice(0, lenTxt) + ` ... <span class="go" onclick='fullfeed(${i});'>\>\></span>` : feedList[i].text + "&raquo;";
        html += `<div class="carousel-element"><img src="img/user.png" alt="Аватар" class="author-pic avatar-${feedList[i].nickname.replace('.', '-')}"/><p class="feed">&laquo;${text}</p><p class="author">${feedList[i].name}</p><a href="https://www.instagram.com/${feedList[i].nickname}/" class="author-link">${feedList[i].nickname}</a></div>`;
    }
    document.getElementById("slick-block").innerHTML = html + document.getElementById("slick-block").innerHTML;
	
	$('#slick-block').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 3000,
          pauseOnFocus: true,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1134,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 801,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    for(var i = 0; i < feedList.length; i += 1) {
        $.ajax({
        type: 'GET',
         url: 'https://www.instagram.com/' + feedList[i].nickname + '/',
         success: function (data) {
          data = JSON.parse(data.split("window._sharedData = ")[1].split(';</script>')[0]).entry_data.ProfilePage[0];
          usr_id = data.graphql.user["id"]; 
          $.getJSON("https://i.instagram.com/api/v1/users/"+usr_id+"/info/", function(info) {
            $(".avatar-" + info.user.username.replace('.', '-')).attr('src', info.user.profile_pic_url);
            path[info.user.username] = info.user.profile_pic_url;
          });
         }
        });
    }            
    $(window).scroll(function () {
        var value = $(window).scrollTop();
        if ( value > 568 )	{
          $("header").addClass("anchor-menu");
        }else {
          $("header").removeClass("anchor-menu");
        }
    });
    $(document).keydown(function(e){
        if(e.key === "Escape"){
            closeWin('#fullfeed');
            closeWin('#nav_burger_menu');
            closeWin('.bg-layer');
        }
    });
});
function closeWin(idEl) {
    $(idEl).hide();
}
function openWin(idEl) {
    $(idEl).css('display', 'flex');
    //document.getElementById(idEl).style.display = 'flex';
}
const fullfeed = i => {
    let src = path[`${feedList[i].nickname}`];
    const html = `<div class="carousel-element"><img src="${src}" alt="Аватар" class="author-pic avatar-${feedList[i].nickname}"/><p class="feed">&laquo;${feedList[i].text}&raquo;</p><p class="author">${feedList[i].name}</p><a href="https://www.instagram.com/${feedList[i].nickname}/" class="author-link">${feedList[i].nickname}</a></div><span class="close-pic" onclick="closeWin('#fullfeed');closeWin('.bg-layer');"></span>`;    
    $("#fullfeed").html(html);
    $("#fullfeed").show();
    $(".bg-layer").show();
};