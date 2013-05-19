var projectName = {
	//Initializing functions
	init:function(){
		projectName.customStaff.init();
	},

	// This is an example of a function
	customStaff:{
		init:function(){
			projectName.customStaff.Events.stuff();
		},
		Events:{
			stuff:function(){
				//Stuff here
			}
		}
	}
}

$(document).ready(function(){
	projectName.init();
});