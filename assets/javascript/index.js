if ($(window).width() < 960) {

mobileNav()

 }
 else {
    regularNav()
 }


 $(window).resize(function() {
    if ($(window).width() < 960) {
       mobileNav()
    }
   else {
      regularNav()
   }
  });

  if ($(window).width() < 650){
    $("#willyTitle").empty();
    $("#willyTitle").append("Willy")
    
  }


  function mobileNav () {
    $("#nav").empty()
    var div = $("<div>")
    var div2 = $("<div>")
    var img = $("<img>")
    var button = $("<button>")
    var a1 =$("<a>")
    var a2 =$("<a>")
    var a3 =$("<a>")
    var a4 =$("<a>")
    var a5 =$("<a>")
    var a6 =$("<a>")
    var a7 =$("<a>")
    var a8 =$("<a>")
    var a9 = $("<a>")
    var a10 = $("<a>")
    var p = $("<p>")

    div.attr("class", "dropdown")
    button.attr("class", "dropdown-toggle")
    button.attr("type", "button")
    button.attr("id", "dropdownMenuButton")
    button.attr("data-toggle", "dropdown")
    button.attr("aria-haspop", "true")
    button.attr("aria-expand", "false")
    button.text("Menu")
    div2.attr("class", "dropdown-menu")
    div2.attr("arialaballedby", "dropdownMenuButton")
    a9.attr("href", "https://agatha12.github.io/SdotPdot/")
    img.attr("src", "assets/Images/logo2.png")
    img.attr("id", "navlogo")
    a1.attr("class", "dropdown-item")
    a1.attr("href", "https://agatha12.github.io/SdotPdot/about")
    a1.text("about me")
    a2.attr("class", "dropdown-item")
    a2.attr("href", "https://agatha12.github.io/SdotPdot/2009and%20Beyond.html")
    a2.text("'2009 and Beyond' Book")
    a3.attr("class", "dropdown-item")
    a3.attr("href", "https://agatha12.github.io/SdotPdot/Portfolio")
    a3.text("photography portfolio")
    a4.attr("class", "dropdown-item")
    a4.attr("href", "https://agatha12.github.io/SdotPdot/Articles")
    a4.text("artful articles")
    a5.attr("class", "dropdown-item")
    a5.attr("href", "https://agatha12.github.io/SdotPdot/")
    a5.text("sweet home")
     a6.attr("class", "dropdown-item")
    a6.attr("href", "https://agatha12.github.io/SdotPdot/Video")
    a6.text("video")
    a7.attr("class", "dropdown-item")
    a7.attr("href", "https://agatha12.github.io/SdotPdot/design")
    a7.text("design")
    a8.attr("class", "dropdown-item")
    a8.attr("href", "http://www.artpal.com/shedrickpelt")
    a8.attr("target", "blank")
    a8.text("prints by shedrick")
    a10.attr("class", "dropdown-item")
    a10.attr("href", "https://agatha12.github.io/SdotPdot/wkus")
    a10.attr("target", "blank")
    a10.text("We Keep Us Safe")
    p.attr("id", "slogan")
    p.text("transitioning through life with a bold new approach")

    a9.append(img)
    div.append(a9)
    div.append(p)
    div.append("<br>")

    div2.append(a5)
    div2.append(a1)
    div2.append(a10)
    div2.append(a2)
    div2.append(a3)
    div2.append(a4)

    div2.append(a6)
    div2.append(a7)
    div2.append(a8)

    div.append(button)
    div.append(div2)
    
    $("#nav").append(div)

  }

 function regularNav () {
    $("#nav").empty()
    var div = $("<div>")
    var a1 =$("<a>")
    var a2 =$("<a>")
    var a3 =$("<a>")
    var a4 =$("<a>")
    var a5 =$("<a>")
    var a6 =$("<a>")
    var a7 =$("<a>")
    var a8 =$("<a>")
    var img = $("<img>")
    var a9 = $("<a>")
    var a10 = $("<a>")
    var p = $("<p>")
    

    a9.attr("href", "https://agatha12.github.io/SdotPdot/")
    img.attr("src", "assets/Images/logo2.png")
    img.attr("id", "navlogo")
    div.attr("id", "navdiv")
    div.attr("class", "row")
    a1.attr("class", "navlink")
    a1.attr("id", "navabout")
    a1.attr("href", "https://agatha12.github.io/SdotPdot/about")
    a1.text("about me")
    a2.attr("class", "navlink")
    a2.attr("id", "navbook")
    a2.attr("href", "https://agatha12.github.io/SdotPdot/2009and%20Beyond.html")
    a2.text("'2009 and Beyond' Book")
    a3.attr("class", "navlink")
    a3.attr("id", "navportfolio")
    a3.attr("href", "https://agatha12.github.io/SdotPdot/Portfolio")
    a3.text("photography portfolio")
    a4.attr("class", "navlink")
    a4.attr("id", "navarticle")
    a4.attr("href", "https://agatha12.github.io/SdotPdot/Articles")
    a4.text("artful articles")
    a5.attr("class", "navlink")
    a5.attr("id", "navhome")
    a5.attr("href", "https://agatha12.github.io/SdotPdot/")
    a5.text("sweet home")
    a6.attr("class", "navlink")
    a6.attr("id", "navvideo")
    a6.attr("href", "https://agatha12.github.io/SdotPdot/Video")
    a6.text("video")
    a7.attr("class", "navlink")
    a7.attr("id", "navinstagram")
    a7.attr("href", "https://agatha12.github.io/SdotPdot/design")
    //a7.attr("target", "blank")
    a7.text("design")
    a8.attr("class", "navlink")
    a8.attr("id", "navshop")
    a8.attr("href", "http://www.artpal.com/shedrickpelt")
    a8.attr("target", "blank")
    a8.text("prints by shedrick")
    a10.attr("class", "navlink")
    a10.attr("id", "navwkus")
    a10.attr("href", "https://agatha12.github.io/SdotPdot/wkus")
    a10.text("We Keep Us Safe")
    p.attr("id", "slogan")
    p.text("transitioning through life with a bold new approach")


    a9.append(img)

    $("#nav").prepend(p)
    $("#nav").prepend(a9)




    div.append(a5)
    div.append(a1)
    div.append(a10)
    div.append(a2)
    div.append(a3)
    div.append(a4)

    div.append(a6)
    div.append(a7)
    div.append(a8)

    $("#nav").append(div)
 }

 function footer(){
   $("#footer").empty()
   var a = $("<a>")
   var i = $("<i>")
   var a2 = $("<a>")
   var i2 = $("<i>")
   var a3 = $("<a>")
   var i3 = $("<i>")
   var a4 = $("<a>")
   var i4 = $("<i>")
   var a5 = $("<a>")
   var i5 = $("<i>")
   var a6 = $("<a>")
   var i6 = $("<i>")
   var p = $("<p>")
   var p2 = $("<p>")
   var a7 = $("<a>")
   var a8 = $("<a>")

   a.attr("target", "blank")
   a.attr("href", "http://twitter.com/sdotpelt")
   i.attr("class", "fab fa-twitter-square")
   a2.attr("target", "blank")
   a2.attr("href", "https://www.sdotpdotmedia.com/instagram")
   i2.attr("class", "fab fa-instagram")
   a3.attr("target", "blank")
   a3.attr("href", "https://www.facebook.com/shedrick.pelt")
   i3.attr("class", "fab fa-facebook-square")
   a4.attr("target", "blank")
   a4.attr("href", "https://www.linkedin.com/in/shedrickpelt/")
   i4.attr("class", "fab fa-linkedin")
   a5.attr("target", "blank")
   a5.attr("href", "https://vimeo.com/sdotpdotmedia#_=_")
   i5.attr("class", "fab fa-vimeo")
   a6.attr("target", "blank")
   a6.attr("href", "https://www.youtube.com/user/sdotpdotdesigns")
   i6.attr("class", "fab fa-youtube-square")
   p.attr("class", "footerName")
   p.text("shedrick pelt · s.pelt@yahoo.com")
   p2.attr("class", "footerName")
   a7.attr("target", "blank")
   a7.attr("font-size", "16px")
   a7.text("Featured as one of the highest-rated")
   a7.attr("href", "https://www.snappr.co/best-photographers/washington-dc")
   a8.attr("target", "blank")
   a8.attr("font-size", "16px")
   a8.text("Washington DC photographers")
   a8.attr("href", "https://www.snappr.co/best-photographers/washington-dc")

   a.append(i)
   a2.append(i2)
   a3.append(i3)
   a4.append(i4)
   a5.append(i5)
   a6.append(i6)
   p2.append(a7)
   p2.append(a8)


   $("#footer").append(a)
   $("#footer").append(a2)
   $("#footer").append(a3)
   $("#footer").append(a4)
   $("#footer").append(a5)
   $("#footer").append(a6)
   $("#footer").append(p)
   $("#footer").append(p2)



 }
footer()

 $(".transbutton").on("click", function displayPic(){
   $(".gallerymodal").empty()
   console.log(this.id)
  // var path = "./assets/Images/" + this.id
  var path = this.children[0].src
   var photo = $("<img>")
   photo.attr("src", path)
   photo.attr("id", "modalImage")

   $(".gallerymodal").append(photo)
   //$(".gallerymodal").append("hello world")

 })

 $('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

 $('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		

 $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
      

$('#wkusbutton').click(function(){
  window.open("https://sdotpdotshop.bigcartel.com/product/we-keep-us-safe-photobook")}
)
       