function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    console.log('------- CHAMANDO SERVIÇO SOLICITAÇÃO COMPRAS - CONSULTA FORNECEDOR -------');

    try {

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + "",
            serviceCode: "API_FLUIG",
            endpoint: "/CONSULTA_FORNECEDOR",
            method: "get",
            timeoutService: "120",
        }

        var vo = clientService.invoke(JSON.stringify(data));

        var objdata = JSON.parse(vo.getResult());
        
        dataset.addColumn('CODFORNECEDOR');
        dataset.addColumn('DESCFORNECEDOR');
        
        for(var i in objdata){
	 		for(var x in objdata[i]){
	 			dataset.addRow(new Array(
 					objdata[i][x].codFornecedor, 
 		    		objdata[i][x].descFornecedor
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