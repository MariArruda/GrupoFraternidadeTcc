$(document).ready(function(){
    


$("#ddlMedicamento").change(function(){

   if($("#ddlMedicamento").find(":selected").text() == "Dipirona")
   {
           $("#btnCadastrar").addClass("disabled");
           $("#modal-medicamento-existente-trigger").click();
    }
   else
        $("#btnCadastrar").removeClass("disabled");

   
});

$("#btnCadastrar").click(function(){
 
    if($("#ddlTipo").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o tipo de medicamento!");
    }

    if($("#ddlMedicamento").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o medicamento!");
    }

    if($("#ddlViaAdministracao").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a vida de administração!");
    }

    if($("#ddlUnidadeMedida").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a unidade de medida!");
    }

    if($("#numberQtde").val() == "" || $("#numberQtde").val() == 0)
    {
        alert("É preciso informar a quantidade de estoque crítico e a quantidade deve ser maior que zero!");
    }


});

$("#btnEntradaEstoque").click(function(){
 
    if($("#ddlTipo").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o tipo de medicamento!");
    }

    if($("#ddlMedicamento").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o medicamento!");
    }

    if($("#ddlViaAdministracao").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a vida de administração!");
    }

    if($("#ddlUnidadeMedida").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a unidade de medida!");
    }

    if($("#numberQtde").val() == "" || $("#numberQtde").val() == 0)
    {
        alert("É preciso informar a quantidade de estoque crítico e a quantidade deve ser maior que zero!");
    }


});


});