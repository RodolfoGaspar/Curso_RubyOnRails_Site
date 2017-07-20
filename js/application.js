$(function(){   
    $('#changeBlueLink').click(changeColor);
});

function changeColor(){
    var color_hexa=$('#color').val()
    $('#fp').css('color','#'+color_hexa)
}