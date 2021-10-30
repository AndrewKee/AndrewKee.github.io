function runAnalysis() {

	// Get extem inputs
	extem_CT = parseFloat(document.getElementById("extem_CT").value);
	extem_alpha = parseFloat(document.getElementById("extem_alpha").value);
	extem_MCF = parseFloat(document.getElementById("extem_MCF").value);
	// extem_ML = parseFloat(document.getElementById("extem_ML").value);

	// Get extem lower bounds
	extem_CT_l = parseFloat(document.getElementById("extem_CT_bound_l").value);
	extem_alpha_l = parseFloat(document.getElementById("extem_alpha_bound_l").value);
	extem_MCF_l = parseFloat(document.getElementById("extem_MCF_bound_l").value);
	// extem_ML_l = parseFloat(document.getElementById("extem_ML_bound_l").value);

	// Get extem upper bounds
	extem_CT_h = parseFloat(document.getElementById("extem_CT_bound_h").value);
	extem_alpha_h = parseFloat(document.getElementById("extem_alpha_bound_h").value);
	extem_MCF_h = parseFloat(document.getElementById("extem_MCF_bound_h").value);
	// extem_ML_h = parseFloat(document.getElementById("extem_ML_bound_h").value);


	// Get fibtem inputs
	fibtem_A10 = parseFloat(document.getElementById("fibtem_A10").value);
	fibtem_MCF = parseFloat(document.getElementById("fibtem_MCF").value);

	// Get fibtem lower bounds
	fibtem_MCF_l = parseFloat(document.getElementById("fibtem_MCF_bound_l").value);

	// Get fibtem upper bounds
	fibtem_MCF_h = parseFloat(document.getElementById("fibtem_MCF_bound_h").value);


	recommendation = ""

	// flowchart
	// check extem CT
	if(extem_CT >= extem_CT_h){
		recommendation += "Give FFP <br>"
	}
	if(extem_alpha <= extem_alpha_l){
		recommendation += "Give Cryoprecipitate <br>"
	}

	// check etem MCF
	if(extem_MCF < extem_MCF_l){
		// check fibtem MCF
		if(fibtem_MCF <= fibtem_MCF_l){
			recommendation += "Give Cryoprecipitate <br>"
		}
		if(fibtem_MCF > fibtem_MCF_l){
			recommendation += "Give Platelets <br>"
		}

		if(fibtem_A10 <= 18){
			recommendation += "If actively bleeding, Give Cryoprecipitate <br>"
		}	
		if(fibtem_A10 <= 9){
			recommendation +=  "If no active bleeding, give Cryoprecipitate <br>"
		}
	}





	document.getElementById("output").innerHTML = recommendation
}

