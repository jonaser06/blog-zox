var objBlog = {
    init: function(){
        objBlog.menu();
    },
    menu: function(){
        var i=0;
        var altura = $(".header").height();
        $(".icon-menu").on("click", function(e){
            e.preventDefault();
            if(i==0){
                $(".fa-align-left").css("display","none");
                $(".fa-times").css("display","inline-block");
                $(".nav-menu").removeClass("left");
                $(".nav-menu").css("min-height",$(window).height());
                $(".after").addClass("content");
                i++;
            }else{
                $(".fa-align-left").css("display","inline-block");
                $(".fa-times").css("display","none");
                $(".nav-menu").addClass("left");
                $(".after").removeClass("content");
                i=0;
            }
        });

        $(".after").on("click", function(e){
            e.preventDefault();
            $(".fa-align-left").css("display","inline-block");
            $(".fa-times").css("display","none");
            $(this).removeClass("content");
            $(".nav-menu").addClass("left");
            i=0;
        });
        
        $(window).on("scroll", function(){
            if($(window).scrollTop() > altura ){
                $(".header").addClass("fixedheader");
            }else{
                $(".header").removeClass("fixedheader");
            }
        });
    }
}

$(document).ready(function(){
    objBlog.init();
});