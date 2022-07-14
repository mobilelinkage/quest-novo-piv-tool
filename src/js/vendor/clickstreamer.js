/*
	clickstreamer v1.0
	===============================
	Allows simple and sequential data tracking and analytics in iRep
*/

//Set this variable as true to enable data manipulation on iRep. If you let it as true in the working environment, it will freeze the application.
var irep = (navigator.standalone === false);
//var irep = false; 
var cs;
var irepcallbuffer;
var irepMediaMode = false;


/*
	GENERIC BUFFER SYSTEM
	============================================================
*/
function IRepCallBuffer(){
	this.buffer = [];
}

/*
	CUSTOM FUNCTION CALL BUFFER ADDITON
	==========================================
*/
IRepCallBuffer.prototype.addToBuffer = function(functionName, argumentArray, callback){
	this.buffer.push({
		'functionName' : functionName,
		'argumentArray' : argumentArray, //does not include callback
		'callback' : callback
	});


	if(this.buffer.length == 1){
		//if the buffer is not currently running, start it now.
		this.executeBottomBufferAction();
	}
	//else the buffer is already awaiting a call, and therefore should not be started.
}


/*	POSSIBLE FUNCTIONS:
	==================================================================

	getAddresses_Account:function(account, callback)
	getAddressFields:function(record, fields, callback)
	getProduct_MySetup:function(type, callback)
	getRecordType_Object:function(object, callback)
	getSurveyQuestions_Survey:function(survey, callback)
	getQuestionResponse_SurveyTarget:function(surveytarget, callback)
	getSurveyTarget_Account:function(account, survey, callback)
	getProduct_OrderActive_Account:function(accountOrAccountGroup, callback)
	getProduct_KitComponents:function(product, callback)
	getProductGroup_Product:function(product, callback)
	getLastTenOrders_Account:function(account, callback)
	getOrderLines_Order:function(order, callback)
	getListPrice_Product:function(product, callback)
	getListPrice_Product_Account:function(product, account, callback)
	getDataForCurrentObject:function(object, field, callback)
	getDataForObject:function(object, record, field, callback)
	createRecord:function(object, values, callback)
	updateRecord:function(object, record, values, callback)
	gotoSlide:function(keyMessage, presentation)
	getUTCdatetime:function(object, record, field, callback)

*/

/*
	
	This runs on the assumption that callback is ALWAYS the final argument. 

*/

IRepCallBuffer.prototype.executeBottomBufferAction = function(){
	//GET BUFFER 0
	var dis = this.buffer[0];


	if(dis.functionName == "clickstream"){
		cs.executeSave(dis.argumentArray[0],dis.argumentArray[1]);
	}else{
		var executeString = "com.veeva.clm."+dis.functionName+"(";
		for(var i=0; i<dis.argumentArray.length; i++){
			/*

			*/

			if(dis.argumentArray[i].toLowerCase().indexOf('object') == -1){
				executeString += "'"+dis.argumentArray[i] + "',";	
			}else{
				executeString += dis.argumentArray[i] + ",";
			}
		}
		executeString += "ircbcb)"; //Always call the same callback function to maintain the loop
		eval(executeString);
	}
}

var unscopedReturnVariable;
IRepCallBuffer.prototype.callback = function(returnedValueFromIRep){
	//run function-specific callback
	unscopedReturnVariable = returnedValueFromIRep;
	eval(this.buffer[0].callback + "(unscopedReturnVariable)");

	this.advance();
}

IRepCallBuffer.prototype.advance = function(){
	if(this.buffer.length != 0){
		//remove buffer 0
		this.buffer = this.buffer.splice(1,this.buffer.length-1);
		//if buffer length > 0, executebottombufferaction
		if(this.buffer.length > 0){
			this.executeBottomBufferAction();
		}
	}
}

//dummy function as I believe the dot throws off the veeva callback system
function ircbcb(result){
	irepcallbuffer.callback(result);
}




$(document).ready(function(){
	if(irep) {
		com.veeva.clm.getDataForCurrentObject("Call", "ID", initClickStreamer);		
	}else{
		initClickStreamer({
			"Call": {
				"ID" : 'fakeCallID'
			},
			"success" : true
		});
	}

	//cs.setValue('key','value');
	//cs.getValue('key');
});

function initClickStreamer(result){
	if(result.success == false){
		//in media mode
		irepMediaMode = true;
	}else{
		cs = new ClickStreamer(result.Call.ID);
		irepcallbuffer = new IRepCallBuffer();
	}
	$(document).trigger('clickstreamready');
}



function ClickStreamer(callID){
	this.sessionID = callID;
	
	this.saveBuffer = [];
	this.saveBufferRunning = false;


	//fetch clickstreamer data from localStorage
	if(localStorage.getItem("clickstreamer") !== null){
		try{
			this.allData = JSON.parse(localStorage.getItem("clickstreamer"));
		}catch(e){
			//in case of corrupted data.
			this.allData = {};
		}
	}else{
		this.allData = {};
	}
	//if session is not set, set it now.
	if(! this.allData.hasOwnProperty(this.sessionID)){
		this.allData[this.sessionID] = {
			'datetime' : Number(new Date())
		}; //this is critical so we can clear out old values
	}
	for(thesession in this.allData){
		//delete if older than 12 hours
		//12hrs = 12 * 60 * 60 * 1000
		if(Number(new Date()) - this.allData[thesession].datetime > 43200000){
			delete this.allData[thesession];
		}
	}
}

ClickStreamer.prototype.saveBackJSON = function(){
	localStorage.setItem("clickstreamer", JSON.stringify(this.allData));
	
	irepcallbuffer.advance();
};

ClickStreamer.prototype.captureClickStreamID = function(ret){
	//this will allow us to capture a unique clickstream id
	this.allData[this.sessionID][irepcallbuffer.buffer[0].argumentArray[0]].id = ret.Call_Clickstream_vod__c.ID;
	//save back JSON
	this.saveBackJSON();
};

function CSUpdateValue(result){
	cs.captureClickStreamID(result);

}

/*
	SAVE THE REQUEST TO THE BUFFER
*/
ClickStreamer.prototype.setValue = function(inkey,invalue){
	irepcallbuffer.addToBuffer('clickstream', [inkey,invalue]);
};

/*
	EXECUTE A PARTICULAR REQUEST
	This is called in sequence by iterating through the saveBuffer.
*/
ClickStreamer.prototype.executeSave = function(key,value){

	//save toJS
	if(this.allData[this.sessionID].hasOwnProperty(key)){
		this.allData[this.sessionID][key].value = value;
	}else{
		this.allData[this.sessionID][key] = {
			"value" : value
		};
	}
	

	var dataToSave = {};
	dataToSave.Answer_vod__c = value;
	dataToSave.Question_vod__c = key;
	dataToSave.Survey_Type_vod__c = "Text";
	//dataToSave.Text_Entered_vod__c = "textarea";
	dataToSave.Track_Element_Type_vod__c = key;
	dataToSave.Track_Element_Description_vod__c = key; //is the description field for this.

	//if it has already been recorded for this session

	if(irep){		
		if(this.allData[this.sessionID][key].hasOwnProperty("id")){
			com.veeva.clm.updateRecord('Call_Clickstream_vod__c', this.allData[this.sessionID][key].id, dataToSave, CSUpdateValue);
		}else{
			com.veeva.clm.createRecord('Call_Clickstream_vod__c', dataToSave, CSUpdateValue);
		}			
	}
};

ClickStreamer.prototype.getValue = function(key){
	if(this.allData[this.sessionID]!==undefined){
		if(this.allData[this.sessionID].hasOwnProperty(key)){
			return this.allData[this.sessionID][key].value;
		}else{
			return null;
		}
	}
	else{
		return null;
	}
	
};



ClickStreamer.prototype.currentSessionData = function(){
	return this.allData[this.sessionID];
};
