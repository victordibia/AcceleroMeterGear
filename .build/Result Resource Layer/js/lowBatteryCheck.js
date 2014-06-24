( function () {
	var systeminfo = {

		systeminfo: null,

		lowThreshold : 0.04,

		listenBatteryLowState: function(){
			var self = this;
			this.systeminfo.addPropertyValueChangeListener(
				'BATTERY',
				function change(battery){
					if(!battery.isCharging) {
						tizen.application.getCurrentApplication().exit();
					}
				},
				{
					lowThreshold : self.lowThreshold
				}
			);
		},

		checkBatteryLowState: function(){
			var self = this;
			this.systeminfo.getPropertyValue(
				'BATTERY',
				function(battery) {
					if(battery.level < self.lowThreshold && !battery.isCharging) {
						tizen.application.getCurrentApplication().exit();
					}
				},
				null);
		},

		init: function(){
			if (typeof tizen === 'object' && typeof tizen.systeminfo === 'object'){
				this.systeminfo = tizen.systeminfo;
				this.checkBatteryLowState();
				this.listenBatteryLowState();
			}
			else{
				console.warn('tizen.systeminfo is not available.');
			}
		}
	};

	systeminfo.init();

} () );
