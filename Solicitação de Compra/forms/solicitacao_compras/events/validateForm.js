function validateForm(form){	
	var ativAtual = getValue("WKNumState");
	var proxAtiv = getValue("WKNextState");	
	var indexes = form.getChildrenIndexes("tblCotacao");
	var mensagemErro = "";
	var	lineBreaker = "<br>";
	
	if (ativAtual == INICIO_0 || ativAtual == INICIO_4 || ativAtual == AJUSTAR_13){
		if (form.getValue("dtSolicitacao") == "" || form.getValue("dtSolicitacao") == null){
			mensagemErro += "O Preenchimento do campo Data Solicitação é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("hrSolicitacao") == "" || form.getValue("hrSolicitacao") == null){
			mensagemErro += "O Preenchimento do campo Hora Solicitação é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("nmSolicitante") == "" || form.getValue("nmSolicitante") == null){
			mensagemErro += "O Preenchimento do campo Solicitante é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("categoriaCompra") == "" || form.getValue("categoriaCompra") == null){
			mensagemErro += "O Preenchimento do campo Categoria é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("qtdCompra") == "" || form.getValue("qtdCompra") == null){
			mensagemErro += "O Preenchimento do campo Quantidade é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("custoEstimado") == "" || form.getValue("custoEstimado") == null){
			mensagemErro += "O Preenchimento do campo Custo Estimado é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("prazoIdeal") == "" || form.getValue("prazoIdeal") == null){
			mensagemErro += "O Preenchimento do campo Prazo Ideal é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("descItem") == "" || form.getValue("descItem") == null){
			mensagemErro += "O Preenchimento do campo Item é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("descCentroCusto") == "" || form.getValue("descCentroCusto") == null){
			mensagemErro += "O Preenchimento do campo Centro de Custo é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("descContaContabil") == "" || form.getValue("descContaContabil") == null){
			mensagemErro += "O Preenchimento do campo Conta Contábil é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("dtEmissao") == "" || form.getValue("dtEmissao") == null){
			mensagemErro += "O Preenchimento do campo Data Emissão é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("descFilial") == "" || form.getValue("descFilial") == null){
			mensagemErro += "O Preenchimento do campo Filial Entrega é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("descDetalhada") == "" || form.getValue("descDetalhada") == null){
			mensagemErro += "O Preenchimento do campo Descrição Detalhada é obrigatorio!" + lineBreaker;
		}
	}    
	
	if (ativAtual == APROVAR_GESTOR_IMEDIATO_5){
		if (form.getValue("optAprvGestorImediato") == "" || form.getValue("optAprvGestorImediato") == null){
			mensagemErro += "É obrigatorio escolher uma opção entre Aprovar, Reprovar e Revisar!" + lineBreaker;
		}
		
		if ((form.getValue("obsAprvGestorImediato") == "" || form.getValue("obsAprvGestorImediato") == null)
		&& (form.getValue("optAprvGestorImediato") == "reprovar" || form.getValue("optAprvGestorImediato") == "revisar")){
			mensagemErro += "O Preenchimento do campo Observações é obrigatorio!" + lineBreaker;
		}
	}
	
	if (ativAtual == APROVAR_TRIAGEM_9){
		if(form.getValue("optAprvTriagem") == "aprovar"){
			if (form.getValue("descComprador") == "" || form.getValue("descComprador") == null){
				mensagemErro += "O Preenchimento do campo Comprador Responsável é obrigatorio!" + lineBreaker;
			}
		}
		
		if (form.getValue("optAprvTriagem") == "" || form.getValue("optAprvTriagem") == null){
			mensagemErro += "É obrigatorio escolher uma opção entre Aprovar, Reprovar e Revisar!!" + lineBreaker;
		}
		
		if ((form.getValue("obsAprvTriagem") == "" || form.getValue("obsAprvTriagem") == null)
		&& (form.getValue("optAprvTriagem") == "reprovar" || form.getValue("optAprvTriagem") == "revisar")){
			mensagemErro += "O Preenchimento do campo Observações é obrigatorio!" + lineBreaker;
		}
	}
	
	if (ativAtual == COMPRAS_COTACAO_26){
		
		if(indexes.length == 0){			
			mensagemErro += "Inserir pelos menos 1 cotação!" + lineBreaker;
        }
		
		for (var i = 0; i < indexes.length; i++){			
			if (form.getValue("nmFornecedor___" + indexes[i]) == "" || 
				form.getValue("nmFornecedor___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Fornecedor é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("nmContato___" + indexes[i]) == "" || 
				form.getValue("nmContato___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Nome Contato é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("telContato___" + indexes[i]) == "" || 
				form.getValue("telContato___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Telefone é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("condPagamento___" + indexes[i]) == "" || 
				form.getValue("condPagamento___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Condição Pagamento é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("unidadeMedida___" + indexes[i]) == "" || 
				form.getValue("unidadeMedida___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Unidade Medida é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("prazoPagt___" + indexes[i]) == "" || 
				form.getValue("prazoPagt___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Prazo Pagamento é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("precoItem___" + indexes[i]) == "" || 
				form.getValue("precoItem___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Preço é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("descontoPorc___" + indexes[i]) == "" || 
				form.getValue("descontoPorc___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Desconto % é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("descontoValor___" + indexes[i]) == "" || 
				form.getValue("descontoValor___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Desconto $ é obrigatorio!" + lineBreaker;
			}
			
			if (form.getValue("valorTotal___" + indexes[i]) == "" || 
				form.getValue("valorTotal___" + indexes[i]) == null) { 				
				mensagemErro += "O Preenchimento do campo Total é obrigatorio!" + lineBreaker;
			}
		}
	}
	
	if (ativAtual == APROVAR_GESTOR_COMPRAS_37){
		if (form.getValue("cotacaoAprovada") == "" || form.getValue("cotacaoAprovada") == null){
			mensagemErro += "O Preenchimento do campo Cotação Aprovada é obrigatorio!" + lineBreaker;
		}
	}
	
	if (ativAtual == COMPRAS_PEDIDO_45){
		if (form.getValue("prazoEntrega") == "" || form.getValue("prazoEntrega") == null) { 				
			mensagemErro += "O Preenchimento do campo Prazo Entrega é obrigatorio!" + lineBreaker;
		}
		
		if (form.getValue("qtdEntregue") == "" || form.getValue("qtdEntregue") == null) { 				
			mensagemErro += "O Preenchimento do campo Quantidade Entregue é obrigatorio!" + lineBreaker;
		}
	}	
	
	if (mensagemErro != ""){
	    throw mensagemErro;
    }    
}