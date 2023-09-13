function displayFields(form,customHTML){
	
	var usuarioAtual = getValue("WKUser");
	var ativAtual = getValue("WKNumState");	
	var modoForm = form.getFormMode();
	var indexes = form.getChildrenIndexes("tblCotacao");
	
	if (ativAtual != COMPRAS_PEDIDO_45){	
		form.setVisibleById("divQtdEntregue", false);
		form.setVisibleById("divPrazoEntrega", false);
	}
	
	if (ativAtual == INICIO_0 || ativAtual == INICIO_4 || ativAtual == AJUSTAR_13){	
		form.setVisibleById("divAprvGestorImediato", false);
		form.setVisibleById("divAprvTriagem", false);
		form.setVisibleById("divCotacao", false);
	}
	
	if (ativAtual != APROVAR_GESTOR_COMPRAS_37){	
		form.setVisibleById("alertaProposta", false);
	}
	
	if (ativAtual == INICIO_0 || ativAtual == INICIO_4){	
		if (modoForm == "ADD"){
			form.setValue("matSolicitante", usuarioAtual);
			form.setValue("nmSolicitante", retornaUsuario(usuarioAtual, "colleagueName"));
			form.setValue("hrSolicitacao", retornaDataHora("hora"));
			form.setValue("dtSolicitacao", retornaDataHora("data"));
		}
	}
	else if (ativAtual == APROVAR_GESTOR_IMEDIATO_5){
		form.setVisibleById("divAprvTriagem", false);
		form.setVisibleById("divCotacao", false);
		
		if (modoForm == "MOD"){
			form.setValue("matAprvGestorImediato", usuarioAtual);
			form.setValue('nmAprvGestorImediato', retornaUsuario(usuarioAtual, "colleagueName"));
			form.setValue("hrAprvGestorImediato", retornaDataHora("hora"));
			form.setValue("dtAprvGestorImediato", retornaDataHora("data"));
		}
	}
	else if (ativAtual == APROVAR_TRIAGEM_9){		
		if (modoForm == "MOD"){
			form.setValue("matAprvTriagem", usuarioAtual);
			form.setValue('nmAprvTriagem', retornaUsuario(usuarioAtual, "colleagueName"));
			form.setValue("hrAprvTriagem", retornaDataHora("hora"));
			form.setValue("dtAprvTriagem", retornaDataHora("data"));
		}
		form.setVisibleById("divCotacao", false);
	}
	else if (ativAtual == COMPRAS_COTACAO_26){		
		if (modoForm == "MOD"){
			form.setValue("matAprvCotacao", usuarioAtual);
			form.setValue('nmAprvCotacao', retornaUsuario(usuarioAtual, "colleagueName"));
			form.setValue("hrAprvCotacao", retornaDataHora("hora"));
			form.setValue("dtAprvCotacao", retornaDataHora("data"));
		}
		form.setVisibleById("divCotacaoAprovada", false);
	}
	else if (ativAtual == APROVAR_GESTOR_COMPRAS_37){	

	}
	else if (ativAtual == COMPRAS_PEDIDO_45){	
		if (modoForm == "MOD"){
			form.setValue("matAprvCotador", usuarioAtual);
			form.setValue('nmAprvCotador', retornaUsuario(usuarioAtual, "colleagueName"));
			form.setValue("hrAprvCotacao", retornaDataHora("hora"));
			form.setValue("dtAprvCotacao", retornaDataHora("data"));
		}
	}
	else if(ativAtual == FIM_52){			
		form.setVisibleById("divQtdEntregue", true);
		form.setVisibleById("divPrazoEntrega", true);
	}
	else if (ativAtual == AJUSTAR_13){	
		if(form.getValue("optAprvGestorImediato") == "revisar"){
			form.setVisibleById("divAprvTriagem", false);
		}
		else if(form.getValue("optAprvTriagem") == "revisar"){
			form.setVisibleById("divAprvGestorImediato", false);
		}
	}	
	
	customHTML.append("<script>function getAtivAtual(){ return " + ativAtual + "; }</script>");
	customHTML.append("<script>function getModoForm(){ return '" + modoForm + "'; }</script>");
	
	form.setShowDisabledFields(true);
	form.setHidePrintLink(true);
}

function retornaUsuario(codigo, cmpRetorno){
	var retorno = "";	
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", codigo, codigo, ConstraintType.MUST);
	var constraints = new Array(c1);
	var usuarios = DatasetFactory.getDataset("colleague", null, constraints, null);
	
	if (usuarios.rowsCount > 0)
		retorno = usuarios.getValue(0, cmpRetorno);
	
	return retorno.toString();
}

function retornaDataHora(tipo){
	var fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    
    if (hours <= 9)
    	hours = "0" + hours;
    
    if (minutes <= 9)
        minutes = "0" + minutes;

    var timeValue = hours + ":" + minutes;    
    var date = fullDate.getDate().toString();

    if (date.length == 1)
        date = 0 + date;
    
    var mes = (fullDate.getMonth() + 1).toString();

    if (mes.length == 1)
        mes = 0 + mes;

    var data = date + "/" + mes + "/" + fullDate.getFullYear();
    
    if (tipo == "data")
    	return data;
    else if (tipo == "hora")
    	return timeValue;
    else if (tipo == "mes")
    	return mes;
    else if (tipo == "ano")
    	return fullDate.getFullYear();    
    else 
    	return "indefindo";    
}