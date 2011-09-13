function Filtr(del){
	
	var projects = $('.prj-one');
	
	if(del.short || del.long){
		for(var i=0;i<projects.length;++i){
			var p = $(projects[i]);
			var bujet = p.find('.bujet');
			if(bujet.length){
				if(bujet.html().indexOf('месяц')==-1 && del.short)
					p.remove();
				if(bujet.html().indexOf('месяц')!=-1 && del.long)
					p.remove();
			};
				
		};
	};
	
	if(del.paid)
		$('.prj-payed, .prj-colored, .prj-weight').remove();
	
	if(del.pro || del.unpro){
		console.log(projects);
		for(var i=0;i<projects.length;++i){
			var p = $(projects[i]);
			var pro = p.find('.project-info');
			if(pro.length && del.pro)
				p.remove();
			if(pro.length==0 && del.unpro)
				p.remove();
		};
		
	};
	
};


chrome.extension.onConnect.addListener(function(port){
	port.onMessage.addListener(Filtr);
});