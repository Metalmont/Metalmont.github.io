
var timeout=0;
function moveSlider(){
    setTimeout(function(){
        var checkNext=false;
        var didMove=false;

        if(timeout!=0){
           setTimeout(function(){
                moveSlider();
            }, timeout
           );
           timeout=0;
           return;
        }

        $("input:radio[name='slider']").each(function(){
            if(checkNext){
                $(this).prop("checked", true);
                didMove=true;
                checkNext=false;
            }
            else if( $(this).prop("checked")){
                checkNext=true;    
            }
        });
        if(!didMove){
            $("#slide1").prop("checked", true);
        }
        moveSlider();
    }, 5000);
}

$(document).ready(function(){
    $("#controls label").click(function(){
        timeout=10000
    });

    moveSlider();
});
