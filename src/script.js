$(document).ready(function(){ 
  var pathname =  window.location.origin ;
  
  
  $("#enviar").click(function(){ 
    var unindexed_array =  $("#platos").serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function(n, i){
      indexed_array[n['name']] = n['value'];
    });
    console.log(indexed_array);


    $.ajax({
      data: indexed_array,
      type: "POST",
      url: pathname+"/bilbolive.esW/src/Index/page",
      success: function(data){
        $("#target").html(data);
      }});
    
    });
});