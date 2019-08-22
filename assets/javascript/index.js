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


  function mobileNav () {
    $("#nav").empty()
    var div = $("<div>")
    var div2 = $("<div>")
    var button = $("<button>")
    var a1 =$("<a>")
    var a2 =$("<a>")
    var a3 =$("<a>")
    var a4 =$("<a>")
    var a5 =$("<a>")
    var a6 =$("<a>")
    var a7 =$("<a>")
    var a8 =$("<a>")

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
    a6.text("design/video")
    a7.attr("class", "dropdown-item")
    a7.attr("href", "https://www.instagram.com/sdotpdotmedia/")
    a7.attr("target", "blank")
    a7.text("instagram")
    a8.attr("class", "dropdown-item")
    a8.attr("href", "https://www.sdotpdotshop.bigcartel.com")
    a8.attr("target", "blank")
    a8.text("sdotpdotshop")



    div2.append(a5)
    div2.append(a1)
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
    a6.text("design/video")
    a7.attr("class", "navlink")
    a7.attr("id", "navinstagram")
    a7.attr("href", "https://www.instagram.com/sdotpdotmedia/")
    a7.attr("target", "blank")
    a7.text("instagram")
    a8.attr("class", "navlink")
    a8.attr("id", "navshop")
    a8.attr("href", "https://www.sdotpdotshop.bigcartel.com")
    a8.attr("target", "blank")
    a8.text("sdotpdotshop")



    div.append(a5)
    div.append(a1)
    div.append(a2)
    div.append(a3)
    div.append(a4)

    div.append(a6)
    div.append(a7)
    div.append(a8)
    $("#nav").append(div)
 }


 $(".transbutton").on("click", function displayPic(){
   $(".gallerymodal").empty()
   console.log(this.id)
   var path = "./assets/Images/" + this.id
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
			
       