$(document).ready(function(){
$(function(){
        $("#confirmar").click(function(){
            $(".entrega").show();
            $(".cardapio").hide();
            $(".pizzaria").hide()
            $("#1").focus();
        });
        $("#voltar1").click(function(){
            $(".cardapio").show();
            $(".entrega").hide();
        });
        $("#avancar").click(function(){
            $(".pagamento").show();
            $(".entrega").hide();
            $("#2").focus();
        });
        $("#voltar2").click(function(){
            $(".entrega").show();
            $(".pagamento").hide();
            $("#1").focus();
        });
        $("#pagar").click(function(){
            $(".situacao").show();
            $(".pagamento").hide();
        });
        $("#voltar3").click(function(){
            $(".pagamento").show();
            $(".situacao").hide();
            $("#2").focus();
        });
    });
});

(function() {
var elements = document.getElementsByTagName('input');
var resultado = document.getElementById('resultado_soma');
var total = 0.00;

for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        if (this.checked === false) {
            total = total - this.value;
        } else {
            total = total + parseFloat(this.value);
        }

        resultado.innerHTML = total;
    }
}})();

