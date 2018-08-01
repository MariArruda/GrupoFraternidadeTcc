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

$("#btnCadastrar").click(function(e){
 
    if($("#ddlTipo").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o tipo de medicamento!");
        e.preventDefault();
    }

    if($("#ddlMedicamento").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o medicamento!");
        e.preventDefault();
    }

    if($("#ddlViaAdministracao").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a vida de administração!");
        e.preventDefault();
    }

    if($("#ddlUnidadeMedida").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a unidade de medida!");
        e.preventDefault();
    }

    if($("#numberQtde").val() == "" || $("#numberQtde").val() == 0)
    {
        alert("É preciso informar a quantidade de estoque crítico e a quantidade deve ser maior que zero!");
        e.preventDefault();
    }

    $("#modal-cadastro-sucesso").click();


});

$("#btnEntradaEstoque").click(function(e){
 
    if($("#ddlTipo").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o tipo de medicamento!");
        e.preventDefault();
        
    }

    if($("#ddlMedicamento").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar o medicamento!");
        e.preventDefault();
    }

    if($("#ddlViaAdministracao").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a vida de administração!");
        e.preventDefault();
    }

    if($("#ddlUnidadeMedida").find(":selected").text() == "Selecione...")
    {
        alert("É preciso informar a unidade de medida!");
        e.preventDefault();
    }

    if($("#numberQtde").val() == "" || $("#numberQtde").val() == 0)
    {
        alert("É preciso informar a quantidade de estoque crítico e a quantidade deve ser maior que zero!");
        e.preventDefault();
    }


});


});