console.log('\'Allo \'Allo!');

var to_google = function(){
    var q = $('#searchtext').val();
    q = encodeURIComponent(q);
    // window.open('https://google.com?q=' + q);
    window.open('https://www.google.com.tw/?q=' + q);
    // debugger;
}

$(function(){
    $('form').on('submit' , function(){
        to_google();
    })
    $('#submit').on('click', function(e){
        to_google();
    })
})