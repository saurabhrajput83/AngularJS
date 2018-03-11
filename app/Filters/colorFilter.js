
appModule.filter('color', function(){

    return function(value, colorCls){

        return "<span class='"+colorCls+"'>"+value+"</span>";

    };
    
});