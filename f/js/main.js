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
                $(".sidebar").addClass("sidebar-fixed");
                var ancho = $(".interna-content").width();
                ancho = ancho*0.3;
                $(".sidebar-fixed").width(ancho-60);
            }else{
                $(".header").removeClass("fixedheader");
                $(".sidebar").removeClass("sidebar-fixed");
                var ancho = $(".interna-content").width();
                ancho = ancho*0.3;
                $(".sidebar").width(ancho-60);
            }
        });

        $(window).resize(function(){
            var ancho = $(".interna-content").width();
            ancho = ancho*0.3;
            $(".sidebar-fixed").width(ancho);
        });
    }
}

$(document).ready(function(){
    objBlog.init();
});