function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    console.log('------- CHAMANDO SERVIÇO SOLICITAÇÃO COMPRAS - CONSULTA ITEM -------');

    try {

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + "",
            serviceCode: "API_FLUIG",
            endpoint: "/CONSULTA_ITEM",
            method: "get",
            timeoutService: "120",
        }

        var vo = clientService.invoke(JSON.stringify(data));

        var objdata = JSON.parse(vo.getResult());
        
        dataset.addColumn('CODITEM');
        dataset.addColumn('DESCITEM');
        
        for(var i in objdata){
	 		for(var x in objdata[i]){
	 			dataset.addRow(new Array(
 					objdata[i][x].codItem, 
 		    		objdata[i][x].descItem
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