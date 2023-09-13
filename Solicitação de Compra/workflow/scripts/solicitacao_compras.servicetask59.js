function servicetask59(attempt, message){
	log.info("------- CHAMANDO SERVIÇO INTEGRAÇÃO POST SOLICITAÇÃO DE COMPRA -------");
	
	var obj = {};
	var cotAprv = hAPI.getCardValue("cotacaoAprovada");
	
    obj = {  		 
		requisitante: hAPI.getCardValue("matSolicitante"),
		categoriaCompra: hAPI.getCardValue("categoriaCompra"), 
		quantidade: hAPI.getCardValue("qtdCompra"), 
		custoEstimado: hAPI.getCardValue("custoEstimado"), 
		prazoIdeal: hAPI.getCardValue("prazoIdeal"), 
		produto: hAPI.getCardValue("codItem"), 
		centroCusto: hAPI.getCardValue("codCentroCusto"), 
		contaContabil: hAPI.getCardValue("codContaContabil"), 
		dtEmissao: hAPI.getCardValue("dtEmissao"), 
		filial: hAPI.getCardValue("codFilial"), 
		observacoes: hAPI.getCardValue("obsCompra"),
		descricao: hAPI.getCardValue("descDetalhada"), 
		comprador: hAPI.getCardValue("codComprador"),
		prazoEntrega: hAPI.getCardValue("prazoEntrega"), 
		qtdEntregue: hAPI.getCardValue("qtdEntregue"), 
		fornecedor: hAPI.getCardValue("codFornecedor___" + cotAprv), 
		contato: hAPI.getCardValue("nmContato___" + cotAprv), 
		telefone: hAPI.getCardValue("telContato___" + cotAprv), 
		condicaoPagt: hAPI.getCardValue("codCondicaoPagt___" + cotAprv),
		unidadeMedida: hAPI.getCardValue("codUnidadeMedida___" + cotAprv),  
		preco: hAPI.getCardValue("precoItem___" + cotAprv)	
    }
    
    log.info("------- OBJETO ENVIADO: " + JSONUtil.toJSON(obj));
    
    try {
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'API_FLUIG',
            endpoint: '/GRAVA_COMPRA',
            method: 'post',    
            timeoutService: '120', 
            params: obj
        }
        
        var vo = clientService.invoke(JSONUtil.toJSON(data));        
        var objdata = JSON.parse(vo.getResult());

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            throw "------- Erro Serviço: " + vo.getResult();
        }
        
        var objdata = JSON.parse(vo.getResult());
        
        if(objdata.statusMessage == "Sucess"){
        	log.info("------- Integração realizada com sucesso!");
        } else {
        	throw "------- Erro sistema: " + objdata.errorMessage;
        }
    } catch(err){
    	throw "------- Erro na integração: " + err;
    }
}