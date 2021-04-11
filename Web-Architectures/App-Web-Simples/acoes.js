var AcaoController = {

    iniciar: function(){
        AcaoController.esconderElemento(AcaoController.DIV_RESULTADO);
    },

    DIV_RESULTADO: "divResultado",
    RESULTADO: "resultado",
    INPUT_ALTURA: "altura",
    IMPUT_PESO: "peso",

    LABEL_MAGREZA: "Você esta abaixo do seu peso ideal",
    LABEL_NORMAL: "Você esta no peso ideial",
    LABEL_SOBREPRESO: "Você esta acima do seu peso",
    LABEL_OBSEIDADE: "Você esta muito acima do seu peso",
    VALOR_MAGREZA: 18.5,
    VALOR_PESO_NORMAL: 24.9,
    VALOR_OBSEIDADE: 30,

    calcularIndice : function() {
        debugger;
        var peso = AcaoController.getValor(AcaoController.IMPUT_PESO);
        var altura = AcaoController.getValor(AcaoController.INPUT_ALTURA);

        if(AcaoController.isVazio(altura) || AcaoController.isVazio(peso)){
            AcaoController.setValor(AcaoController.RESULTADO, "Campos não podem estar vazios!");
            AcaoController.mostrarElemento(AcaoController.DIV_RESULTADO)
            return;
        }

        var imc = peso / (altura * 2);
        var msgResultado;
        if(imc <= AcaoController.VALOR_MAGREZA){
            msgResultado = AcaoController.LABEL_MAGREZA;
        }else if(imc >= AcaoController.VALOR_MAGREZA && imc <= AcaoController.VALOR_PESO_NORMAL){
            msgResultado = AcaoController.LABEL_NORMAL;
        }else if(imc > AcaoController.VALOR_PESO_NORMAL && imc <= AcaoController.VALOR_OBSEIDADE){
            msgResultado = AcaoController.LABEL_SOBREPRESO;
        }else{
            msgResultado = AcaoController.LABEL_OBSEIDADE;
        }

        AcaoController.setValor(AcaoController.RESULTADO, msgResultado);
        AcaoController.mostrarElemento(AcaoController.DIV_RESULTADO);
    },

    verificarCampoNumerico: function(campo){
        return $("#"+campo).val().replace(/\D/g,"");
    },

    verificarCampoNumericoComVirgular: function(campo){
        return $("#"+campo).val().replace(/^\d+,\d{2}$/,"");
    },

    isVazio : function(valor) {
		return ($.trim(valor).length == 0);
    },

    esconderElemento: function(elemento){
        $("#"+elemento).hide();
    },

    mostrarElemento: function(elemento){
        $("#"+elemento).show();
    },

    getValor : function(elemento) {
		return $('#' + elemento).val();
	},

    setValor : function(elemento, valor) {
		return $('#' + elemento).text(valor);
	}
}

window.onload = function() {
    AcaoController.iniciar();
};
