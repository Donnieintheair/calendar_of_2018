// JavaScript Document

	window.onload=function(){
		var week = ['一','二','三','四','五','六','日']
		var monthday = [31,28,31,30,31,30,31,31,30,31,30,31];
		var start = new Array;
		//start是判断每个月从哪一天开始计算
		start[0] = 0;
		for(var b=1; b<12;b++){
			start[b] = (start[b-1]+monthday[b-1]%7)%7;
	
			}
			
		
		//加表格
		var month = document.getElementsByClassName("month");
		for(var i=0;i<month.length; i++){
			//加表格名
			var caption = document.createElement("caption");
			var captiontxt = document.createTextNode("2018年"+(i+1)+"月");
			caption.appendChild(captiontxt);
			month[i].appendChild(caption);
			//加标题栏
			var trh = document.createElement("tr");
			for(var z=0; z<7;z++){
				var th = document.createElement("th");
				var thtxt = document.createTextNode('星期'+week[z]);
				th.appendChild(thtxt);
				trh.appendChild(th);
				}
				
			month[i].appendChild(trh);
			
			
			//加日期格子
			//有5行
			for(var j=0; j<6;j++){
				var tr = document.createElement("tr");
				//有7列
				for(var y=0; y<7;y++){
				var td = document.createElement("td");
				var myday = document.createElement("div");
				myday.className = 'myday';
				var mydayup = document.createElement("div");
				mydayup.className = 'mydayup';
				var mydaydown = document.createElement("div");
				mydaydown.className = 'mydaydown';
				myday.appendChild(mydayup);
				myday.appendChild(mydaydown);
				td.appendChild(myday);
				tr.appendChild(td);				
				}
			month[i].appendChild(tr);
			}
		//判断每月的第一天
		
		var mydayup = month[i].getElementsByClassName("mydayup");
		var num = 1;
		for( var a=start[i]; a<mydayup.length; a++){
			if(num<monthday[i]+1){
				mydayup[a].innerHTML = "<p class='mynum'>"+num+"</p>";
				mydayup[a].className = 'mydayup mydayupwork'
				num++;
				}
				
			}	
		
			
		}//加表格结束
		
		//有的月份只需要五行。
		var tr = document.getElementsByTagName("tr");
		for(var c=0;c<tr.length;c++){
		//判断如果一个tr里面没有含class为mydayupwork同时不含th标签，那就删掉该行	
		if(tr[c].getElementsByClassName('mydayupwork')[0]==undefined&&tr[c].getElementsByTagName('th')[0]==undefined){
					tr[c].parentNode.removeChild(tr[c]);
					}
				
				
				}
				
		var monthdiv = document.getElementsByClassName("monthdiv");
		for(var i=1;i<monthdiv.length; i++){
			monthdiv[i].style.display = 'none'
			}
		var choose = document.getElementById("choose");
		choose.onchange=function(){
			for(var i=0;i<monthdiv.length; i++){
			monthdiv[i].style.display = 'none';
			}
			
			monthdiv[choose.value].style.display = 'block';
			}	
		}
	
