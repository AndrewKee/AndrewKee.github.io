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

function editBounds(){
	if (document.getElementById('edit_inputs').checked) 
  {
      document.getElementById("extem_CT_bound_l").disabled = false;
      document.getElementById("extem_alpha_bound_l").disabled = false;
      document.getElementById("extem_MCF_bound_l").disabled = false;

      document.getElementById("extem_CT_bound_h").disabled = false;
      document.getElementById("extem_alpha_bound_h").disabled = false;
      document.getElementById("extem_MCF_bound_h").disabled = false;

      document.getElementById("fibtem_MCF_bound_l").disabled = false;
      document.getElementById("fibtem_MCF_bound_h").disabled = false;

  } else {
      document.getElementById("extem_CT_bound_l").disabled = true;
      document.getElementById("extem_alpha_bound_l").disabled = true;
      document.getElementById("extem_MCF_bound_l").disabled = true;

      document.getElementById("extem_CT_bound_h").disabled = true;
      document.getElementById("extem_alpha_bound_h").disabled = true;
      document.getElementById("extem_MCF_bound_h").disabled = true;

      document.getElementById("fibtem_MCF_bound_l").disabled = true;
      document.getElementById("fibtem_MCF_bound_h").disabled = true;

  }
}



function runSimple(){
	simpleButton = document.getElementById("simpleButton");
	advancedButtom = document.getElementById("advancedButton");

	simpleInputsExtem = document.getElementById("extemSimple");
	simpleInputsFibtem = document.getElementById("fibtemSimple");

	advancedInputsExtem = document.getElementById("extemAdvanced");
	advancedInputsFibtem = document.getElementById("fibtemAdvanced");
	advancedAnalyzeButton = document.getElementById("advancedAnalyzeButton");

	if(simpleButton.classList.contains("pressed")){
		return
	}
	else{
		simpleButton.classList.add("pressed")
		simpleButton.classList.remove("unpressed")
		advancedButton.classList.add("unpressed")
		advancedButton.classList.remove("pressed")

		advancedInputsExtem.style.display = "none";
		advancedInputsFibtem.style.display = "none";
		advancedAnalyzeButton.style.display = "none";

		simpleInputsExtem.style.display = "inline";
		simpleInputsFibtem.style.display = "inline";

	}

	document.getElementById("output").innerHTML = "";
}


function runAdvanced(){
	simpleButton = document.getElementById("simpleButton");
	advancedButtom = document.getElementById("advancedButton");

	simpleInputsExtem = document.getElementById("extemSimple");
	simpleInputsFibtem = document.getElementById("fibtemSimple");

	advancedInputsExtem = document.getElementById("extemAdvanced");
	advancedInputsFibtem = document.getElementById("fibtemAdvanced");

	advancedAnalyzeButton = document.getElementById("advancedAnalyzeButton");

	if(advancedButton.classList.contains("pressed")){
		return
	}
	else{
		simpleButton.classList.remove("pressed");
		simpleButton.classList.add("unpressed");
		advancedButton.classList.remove("unpressed");
		advancedButton.classList.add("pressed");

		advancedInputsExtem.style.display = "inline";
		advancedInputsFibtem.style.display = "inline";
		advancedAnalyzeButton.style.display = "inline";

		simpleInputsExtem.style.display = "none";
		simpleInputsFibtem.style.display = "none";

	}
	document.getElementById("output").innerHTML = "";
}



function runSimpleAnalysis(input_button){

	deets = input_button.split("_")
	
	if(deets[0] == "E"){
		if(deets[1] == "CT"){
			x = document.getElementsByClassName("E_CT");
			for (let item of x) {
				if(document.getElementById(item.id).classList.contains("pressed_inputs")){
				    document.getElementById(item.id).classList.remove("pressed_inputs");
				    document.getElementById(item.id).classList.add("unpressed");
				}
			}
		}
		else if(deets[1] == "Alpha"){
			x = document.getElementsByClassName("E_Alpha");
			for (let item of x) {
			    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
				    document.getElementById(item.id).classList.remove("pressed_inputs");
				    document.getElementById(item.id).classList.add("unpressed");
				}
			}
		}
		else if(deets[1] == "MCF"){
			x = document.getElementsByClassName("E_MCF");
			for (let item of x) {
			    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
				    document.getElementById(item.id).classList.remove("pressed_inputs");
				    document.getElementById(item.id).classList.add("unpressed");
				}
			}
		}
	}
	else if(deets[0] == "F"){
		if(deets[1] == "A10"){
			x = document.getElementsByClassName("F_A10");
			for (let item of x) {
			    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
				    document.getElementById(item.id).classList.remove("pressed_inputs");
				    document.getElementById(item.id).classList.add("unpressed");
				}
			}
		}
		else if(deets[1] == "MCF"){
			x = document.getElementsByClassName("F_MCF");
			for (let item of x) {
			    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
				    document.getElementById(item.id).classList.remove("pressed_inputs");
				    document.getElementById(item.id).classList.add("unpressed");
				}
			}
		}
	}
	document.getElementById(input_button).classList.remove("unpressed");
	document.getElementById(input_button).classList.add("pressed_inputs");




	recommendation = ""
	// flowchart
	// check extem CT
	// if(extem_CT >= extem_CT_h){
	if(document.getElementById("E_CT_high").classList.contains("pressed_inputs")){
		recommendation += "Give FFP <br>";
	}
	// if(extem_alpha <= extem_alpha_l){
	if(document.getElementById("E_Alpha_low").classList.contains("pressed_inputs")){
		recommendation += "Give Cryoprecipitate <br>";
	}

	// check etem MCF
	// if(extem_MCF < extem_MCF_l){
	if(document.getElementById("E_MCF_low").classList.contains("pressed_inputs")){
		// check fibtem MCF
		// if(fibtem_MCF <= fibtem_MCF_l){
		if(document.getElementById("F_MCF_low").classList.contains("pressed_inputs")){
			recommendation += "Give Cryoprecipitate <br>";
		}
		// if(fibtem_MCF > fibtem_MCF_l){
		if(document.getElementById("F_MCF_WNL").classList.contains("pressed_inputs") || document.getElementById("F_MCF_high").classList.contains("pressed_inputs")){
			recommendation += "Give Platelets <br>";
		}

		// if(fibtem_A10 <= 18){
		if(document.getElementById("F_A10_WNL").classList.contains("pressed_inputs")){
			recommendation += "If actively bleeding, give Cryoprecipitate <br>";
		}	
		// if(fibtem_A10 <= 9){
		if(document.getElementById("F_A10_low").classList.contains("pressed_inputs")){	
			recommendation +=  "If not active bleeding, give Cryoprecipitate <br>";
		}
	}
	document.getElementById("output").innerHTML = recommendation;
}


function reset(){
	x = document.getElementsByClassName("E_CT");
	for (let item of x) {
		if(document.getElementById(item.id).classList.contains("pressed_inputs")){
		    document.getElementById(item.id).classList.remove("pressed_inputs");
		    document.getElementById(item.id).classList.add("unpressed");
		}
	}
	x = document.getElementsByClassName("E_Alpha");
	for (let item of x) {
	    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
		    document.getElementById(item.id).classList.remove("pressed_inputs");
		    document.getElementById(item.id).classList.add("unpressed");
		}
	}
	x = document.getElementsByClassName("E_MCF");
	for (let item of x) {
	    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
		    document.getElementById(item.id).classList.remove("pressed_inputs");
		    document.getElementById(item.id).classList.add("unpressed");
		}
	}
	x = document.getElementsByClassName("F_A10");
	for (let item of x) {
	    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
		    document.getElementById(item.id).classList.remove("pressed_inputs");
		    document.getElementById(item.id).classList.add("unpressed");
		}
	}
	x = document.getElementsByClassName("F_MCF");
	for (let item of x) {
	    if(document.getElementById(item.id).classList.contains("pressed_inputs")){
		    document.getElementById(item.id).classList.remove("pressed_inputs");
		    document.getElementById(item.id).classList.add("unpressed");
		}
	}
	document.getElementById("output").innerHTML = "";
}













