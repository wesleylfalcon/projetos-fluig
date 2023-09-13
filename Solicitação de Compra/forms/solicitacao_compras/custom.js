var INICIO_0 						= 0;
var INICIO_4 						= 4;
var AJUSTAR_13 						= 13;
var APROVAR_GESTOR_IMEDIATO_5 		= 5;
var FIM_CANCELADO_GESTOR_20			= 20;
var APROVAR_TRIAGEM_9				= 9;
var FIM_CANCELADO_TRIAGEM_32		= 32;
var COMPRAS_COTACAO_26				= 26;
var FIM_CANCELADO_COTACAO_22		= 22;
var APROVAR_GESTOR_COMPRAS_37		= 37;
var FIM_CANCELADO_G_COMPRAS_41		= 41;
var COMPRAS_PEDIDO_45				= 45;
var GRAVAR_PROTHEUS_59				= 59;
var TRATAR_ERRO_62					= 62;
var FIM_52							= 52;


$(document).ready(function(){   
	$(".caixaAlta").on("input", function(){
		$(this).val($(this).val().toUpperCase());
	});
	
    FLUIGC.calendar(".campoData",{
		pickDate: true,
		pickTime: false,
		sideBySide: true
	});     
    	
	var ativAtual = getAtivAtual();
	var modoForm = getModoForm();

	$(".campo-data").change(function(){
		if(this.value != '')
			validateDate($(this));
	});	
	
	
	if (ativAtual == INICIO_0 || ativAtual == INICIO_4){
		$(function(){
	        $('.preco').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
	    })
	}
	
	if (modoForm == "VIEW"){
		$(".removeCotacao").hide();
		$("#adiCotacao").hide();
	}
	
	if (ativAtual == APROVAR_GESTOR_COMPRAS_37){
		$(".removeCotacao").hide();
		$("#adiCotacao").hide();	
		
		var melhorCotacao = obterMelhorCotacao();
		$('#linhaTabela___' + melhorCotacao).children(1).children(0)[1].classList.add('panel-primary')
		$('#linhaTabela___' + melhorCotacao).children(1).children(0)[1].classList.add('panel-success')
		selecaoCotacoes();
	}
	
	if (ativAtual == COMPRAS_PEDIDO_45){
		$(".removeCotacao").hide();
		$("#adiCotacao").hide();
	}
	
	if (ativAtual == FIM_52){
		
	}
});

function setSelectedZoomItem(selectedItem){
	if(selectedItem.inputId == "descComprador"){
		$("#codComprador").val(selectedItem.CODCOMPRADOR);
	}
}
function removedZoomItem(removedItem){
	if(removedItem.inputId == "descComprador"){
		$("#codComprador").val("");		
	}
}	

function adiFilhoTabela(tabela) {	
	var idx = wdkAddChild(tabela);
	
	$(".caixaAlta").on("input", function(){
		$(this).val($(this).val().toUpperCase());
	});
	
	var linhas = $('[name^="nrCotacao___"').length;
	$("#nrCotacao___" + idx).val(linhas);
	
	FLUIGC.calendar(".campoData",{
		pickDate: true,
		pickTime: false,
		sideBySide: true
	});  
	
	$(function(){
        $('.preco').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
    });
    
	$('.fone').blur(function(event) {
		var fone = $(this).val();
		
		if(fone != ""){
			if($(this).val().length == 11){ 
				fone = [fone.slice(0, 0), "(", fone.slice(0)].join('');
		        fone = [fone.slice(0, 3), ")", fone.slice(3)].join('');
		        fone = [fone.slice(0, 4), " ", fone.slice(4)].join('');
		        fone = [fone.slice(0, 10), "-", fone.slice(10)].join('');
		        $(this).val(fone);
		    } else {
			    fone = [fone.slice(0, 0), "(", fone.slice(0)].join('');
			    fone = [fone.slice(0, 3), ")", fone.slice(3)].join('');
		        fone = [fone.slice(0, 4), " ", fone.slice(4)].join('');
		        fone = [fone.slice(0, 9), "-", fone.slice(9)].join('');
		        $(this).val(fone);
		    }
		}
	});
	
	$('.porcentagem').blur(function(event) {
		$("#descontoValor___" + idx).val("");
		$("#valorTotal___" + idx).val("");
		var porc = $(this).val();
		var preco = $("#precoItem___" + idx).val();
		preco = parseInt(preco.replace(".", "").replace(",", "."));

		var desconto = (preco * porc) / 100;
		var total = preco - desconto;		
		$("#descontoValor___" + idx).val(desconto.toLocaleString('pt-br', {minimumFractionDigits: 2}));
		
		var precoTotal = preco - desconto;
		$("#valorTotal___" + idx).val(precoTotal.toLocaleString('pt-br', {minimumFractionDigits: 2}));
		
	});
}

function excFilhoTabela(tabela) {	
    fnWdkRemoveChild(tabela);
    
    var linhas = $('[name^="nrCotacao___"').length;

    for(var i = 0; i < linhas; i++){
	    var nomeCampo = $('[name^="nrCotacao___"')[i].name;
	    var index = nomeCampo.substr(nomeCampo.indexOf("___")+3);
	    $('#nrCotacao___'+ index).val(i+1);
    }
}

function validateDate(objeto){
	var aDate   = moment(objeto.val(), 'DD/MM/YYYY', true);
	var isValid = aDate.isValid();
	
	if(!isValid){
		FLUIGC.toast({
		   title: 'Data: ',
		   message: 'Data Inválida',
		   type: 'warning'
		   });
	   objeto.val("");
	   objeto.focus();
	}
}	

function obterMelhorCotacao(){
	var linhas = $("#tblCotacao tbody tr").length;
	var fornecedor = document.getElementsByClassName("fornecedor");
	var cotacao = "";
	var novaCotacao = "";
	var linha = "";
	
	for(var i = 1; i < linhas; i++){			
		var idx = fornecedor[i].name.split("___")[1];
		
		if(cotacao == ""){				
			cotacao = parseInt($("#valorTotal___" + idx).val().replace(".", ""));
			linha = idx;
		}else{
			novaCotacao = parseInt($("#valorTotal___" + idx).val().replace(".", ""));
			if(cotacao < novaCotacao){
				true;
			}else{
				cotacao = novaCotacao;
				linha = idx;
			}
		}
	}	
	return linha;
}

function selecaoCotacoes(){
	var linhas = $("#tblCotacao tbody tr").length;
	var fornecedor = document.getElementsByClassName("fornecedor");
	$('#cotacaoAprovada').append('<option name="opcaoCotacao" value="">Selecione...</option>');
	
	for(var i = 1; i < linhas; i++){			
		var idx = fornecedor[i].name.split("___")[1];
		var nrCotacao = $("#nrCotacao___" + idx).val();
		
		$('#cotacaoAprovada').append('<option name="opcaoCotacao" value="'+ nrCotacao +'">' + nrCotacao + '</option>');
	}	
}