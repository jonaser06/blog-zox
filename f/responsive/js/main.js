$('document').ready(function(){
    var i = 0;
    $('.menu').click(function(){
        if(i==0){
            $('.fa-bars').css('display','none');
            $('.fa-times').css('display','contents');
            $('.NavBar').animate({
                height: "300px"
            }, "slow");
            i++;
        }else{
            $('.fa-bars').css('display','contents');
            $('.fa-times').css('display','none');
            $('.NavBar').animate({
                height: "0px"
            }, "slow");
            i=0;
        }
    });

});