function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    console.log('------- CHAMANDO SERVIÇO SOLICITAÇÃO COMPRAS - CONSULTA UNIDADE DE MEDIDA -------');

    try {

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + "",
            serviceCode: "API_FLUIG",
            endpoint: "/CONSULTA_UNIDADE_MEDIDA",
            method: "get",
            timeoutService: "120",
        }

        var vo = clientService.invoke(JSON.stringify(data));

        var objdata = JSON.parse(vo.getResult());
        
        dataset.addColumn('CODUNIDADE');
        dataset.addColumn('DESCUNIDADE');
        
        for(var i in objdata){
	 		for(var x in objdata[i]){
	 			dataset.addRow(new Array(
 					objdata[i][x].codUnidade, 
 		    		objdata[i][x].descUnidade
			 	));
	 		};
	 	};
    }catch(err){
    	dataset.addColumn('STATUS');
    	dataset.addColumn('ERRO');
    	
        dataset.addRow(new Array(
    		"Erro",
    		err
		));
        log.error(err);
    }
    return dataset;
}