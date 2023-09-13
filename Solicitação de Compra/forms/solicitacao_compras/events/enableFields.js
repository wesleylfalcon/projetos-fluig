function enableFields(form){
	var ativAtual = getValue("WKNumState");
	var indexes = form.getChildrenIndexes("tblCotacao");
    
//    disableAllFields(form);	
    
    if(ativAtual == AJUSTAR_13){
    	if(form.getValue("optAprvGestorImediato") == "revisar"){
    		form.setEnabled("optAprvGestorImediato", false);
        	form.setEnabled("obsAprvGestorImediato", false);
		}
		else if(form.getValue("optAprvTriagem") == "revisar"){
			form.setEnabled("optAprvTriagem", false);
        	form.setEnabled("obsAprvTriageme", false);
		}
	}
    else if (ativAtual == APROVAR_GESTOR_IMEDIATO_5){    	
    	form.setEnabled("categoriaCompra", false);
    	form.setEnabled("qtdCompra", false);
    	form.setEnabled("custoEstimado", false);
    	form.setEnabled("prazoIdeal", false);
    	form.setEnabled("descItem", false);
    	form.setEnabled("descCentroCusto", false);
    	form.setEnabled("descContaContabil", false);
    	form.setEnabled("dtEmissao", false);
    	form.setEnabled("descFilial", false);
    	form.setEnabled("obsCompra", false);    
    	form.setEnabled("descDetalhada", false);    	
	}
    else if (ativAtual == APROVAR_TRIAGEM_9){
    	form.setEnabled("categoriaCompra", false);
    	form.setEnabled("qtdCompra", false);
    	form.setEnabled("custoEstimado", false);
    	form.setEnabled("prazoIdeal", false);
    	form.setEnabled("descItem", false);
    	form.setEnabled("descCentroCusto", false);
    	form.setEnabled("descContaContabil", false);
    	form.setEnabled("dtEmissao", false);
    	form.setEnabled("descFilial", false);
    	form.setEnabled("obsCompra", false);    
    	form.setEnabled("descDetalhada", false);   
    	
    	form.setEnabled("optAprvGestorImediato", false);
    	form.setEnabled("obsAprvGestorImediato", false);
	} 
    else if (ativAtual == COMPRAS_COTACAO_26){
    	form.setEnabled("categoriaCompra", false);
    	form.setEnabled("qtdCompra", false);
    	form.setEnabled("custoEstimado", false);
    	form.setEnabled("prazoIdeal", false);
    	form.setEnabled("descItem", false);
    	form.setEnabled("descCentroCusto", false);
    	form.setEnabled("descContaContabil", false);
    	form.setEnabled("dtEmissao", false);
    	form.setEnabled("descFilial", false);
    	form.setEnabled("obsCompra", false);    
    	form.setEnabled("descDetalhada", false); 
    	
    	form.setEnabled("optAprvGestorImediato", false);
    	form.setEnabled("obsAprvGestorImediato", false);
    	form.setEnabled("descComprador", false);
    	form.setEnabled("optAprvTriagem", false);
    	form.setEnabled("obsAprvTriagem", false);
	} 
    else if (ativAtual == APROVAR_GESTOR_COMPRAS_37){
    	form.setEnabled("categoriaCompra", false);
    	form.setEnabled("qtdCompra", false);
    	form.setEnabled("custoEstimado", false);
    	form.setEnabled("prazoIdeal", false);
    	form.setEnabled("descItem", false);
    	form.setEnabled("descCentroCusto", false);
    	form.setEnabled("descContaContabil", false);
    	form.setEnabled("dtEmissao", false);
    	form.setEnabled("descFilial", false);
    	form.setEnabled("obsCompra", false);    
    	form.setEnabled("descDetalhada", false); 
    	
    	form.setEnabled("optAprvGestorImediato", false);
    	form.setEnabled("obsAprvGestorImediato", false);
    	form.setEnabled("descComprador", false);
    	form.setEnabled("optAprvTriagem", false);
    	form.setEnabled("obsAprvTriagem", false);
    	
    	for (var i = 0; i < indexes.length; i++){	
			form.setEnabled("nmFornecedor___" + indexes[i],false);
			form.setEnabled("nmContato___" + indexes[i],false);
			form.setEnabled("telContato___" + indexes[i],false);
			form.setEnabled("condPagamento___" + indexes[i],false);
			form.setEnabled("unidadeMedida___" + indexes[i],false);
			form.setEnabled("prazoPagt___" + indexes[i],false);
			form.setEnabled("precoItem___" + indexes[i],false);
			form.setEnabled("descontoPorc___" + indexes[i],false);
			form.setEnabled("descontoValor___" + indexes[i],false);
			form.setEnabled("valorTotal___" + indexes[i],false);
		}
	} 
    else if (ativAtual == COMPRAS_PEDIDO_45){
    	form.setEnabled("categoriaCompra", false);
    	form.setEnabled("qtdCompra", false);
    	form.setEnabled("custoEstimado", false);
    	form.setEnabled("prazoIdeal", false);
    	form.setEnabled("descItem", false);
    	form.setEnabled("descCentroCusto", false);
    	form.setEnabled("descContaContabil", false);
    	form.setEnabled("dtEmissao", false);
    	form.setEnabled("descFilial", false);
    	form.setEnabled("obsCompra", false);    
    	form.setEnabled("descDetalhada", false); 
    	
    	form.setEnabled("optAprvGestorImediato", false);
    	form.setEnabled("obsAprvGestorImediato", false);
    	form.setEnabled("descComprador", false);
    	form.setEnabled("optAprvTriagem", false);
    	form.setEnabled("obsAprvTriagem", false);
    	form.setEnabled("cotacaoAprovada", false);
    	
    	for (var i = 0; i < indexes.length; i++){	
    		form.setEnabled("nmFornecedor___" + indexes[i],false);
			form.setEnabled("nmContato___" + indexes[i],false);
			form.setEnabled("telContato___" + indexes[i],false);
			form.setEnabled("condPagamento___" + indexes[i],false);
			form.setEnabled("unidadeMedida___" + indexes[i],false);
			form.setEnabled("prazoPagt___" + indexes[i],false);
			form.setEnabled("precoItem___" + indexes[i],false);
			form.setEnabled("descontoPorc___" + indexes[i],false);
			form.setEnabled("descontoValor___" + indexes[i],false);
			form.setEnabled("valorTotal___" + indexes[i],false);
		}
	} 
}


function disableAllFields(form) {
	var fields = form.getFormFields().toArray();
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i].getName(), false);
	}
}