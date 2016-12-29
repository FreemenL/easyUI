$(function () {

	var buttons = $.extend([], $.fn.datebox.defaults.buttons);
	buttons.splice(1, 0, {
		text: '新增',
		handler: function(target){
			alert('新增');
		}
	});

	$('#box').datebox({
		//panelWidth : 300,
		//panelHeight : 300,
		//currentText : 'T',
		//closeText : 'C',
		//okText : 'O',
		//buttons : buttons,
		//formatter : function (date) {
		//	return date.getFullYear() + '/' + date.getMonth() + 1 + '/' + date.getDate();
		//},
		//parser : function (date) {
		//	return new Date(2015,6,1);
		//}
		//onSelect : function (date) {
		//	alert('触发！');
		//}
		
		
	});
	
	$('#box').datebox('calendar').calendar({
		firstDay : 1,
	});
	
	$('#box').datebox('setValue', '2015-6-1');
	
	/*
	$('#cc').calendar({
		firstDay : 1,
	});
	*/
	
});



	









