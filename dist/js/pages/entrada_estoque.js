$(function () {
  $('.select2').select2();

  $('#table_estoque').DataTable();

  })

$(document).ready(function(){

   

  $("#btnAddMedicamento").click(function(e){
    
    if($("#txtQtde").val()=="" || $("#txtQtde").val()== 0){
       alert("É necessário informar a quantidade a dar entrada e ela deve ser diferente de zero.");
       $("#fechaModalVencimento").click();
       e.stopPropagation();
       
    }
    
 
  });

  $("#chkTodas").click(function(e){

    if($("#chkTodas").is(":checked") ){
      $("#data2").hide();     
      $("#data3").hide();
      $("#data4").hide();
      $("#data5").hide();
      
    }

    if(!$("#chkTodas").is(":checked") ){
      $("#data2").show();
      $("#data3").show();
      $("#data4").show();
      $("#data5").show();
    }

  });
  

});