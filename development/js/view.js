$("#edit-button").bind('click',function(){  
    $('.view-content').hide();
    $(".form").show();
    $(".form #post-title").val($(".sub-title span").text());
    $(".form #post-content").val($(".sub-content span").text());
});

$("#delete-button").bind('click',function(){
    var id = $('.show-content').data('id');
    $.get("/delete/id/"+id,function(o){
        if(o.status == 'success'){
          window.location = '/';
        }else{
          alert("error");
        }
    })
});

$("#cancel-button").bind('click',function(){
    var id = $('.show-content').data('id');
    window.location = '/view/id/'+id;
});