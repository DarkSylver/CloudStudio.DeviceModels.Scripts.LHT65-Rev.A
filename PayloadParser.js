function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);    


    device.updateDeviceGeolocation(38.77704970747451, 0.08254128465790134);

    // Store 
    if(parsed.TempC_SHT != null){
        var tc1 = device.endpoints.byAddress("1");

        if (tc1 != null)
            tc1.updateTemperatureSensorStatus(parsed.TempC_SHT);
    };
    
    if(parsed.Hum_SHT != null){
        var tc2 = device.endpoints.byAddress("2");

        if (tc2 != null)
            tc2.updateHumiditySensorStatus(parsed.Hum_SHT);
    };
    
    if(parsed.BatV != null){
        device.updateDeviceBattery(
            {
                percentage : (((parsed.BatV)/3.6)*100),
                state: batteryState.ok,
                type: batteryType.primary,
                voltage: parsed.BatV                    
            });

        var b = device.endpoints.byAddress("3");

        if (b != null)
            b.updateVoltageSensorStatus(parsed.BatV);
    };

    if(parsed.TempC_TMP117 != null){
        var tc3 = device.endpoints.byAddress("4");

        if (tc3 != null)
            tc3.updateTemperatureSensorStatus(parsed.TempC_TMP117);
    }

}


function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}