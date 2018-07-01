// パターン02

function extendLink(){

	var locatonList = new Array(); 

	locatonList['aaa']='http://www.google.co.jp/aaa'; 
	locatonList['aaabbb']='http://www.google.co.jp/aaabbb'; 
	locatonList['aaabbb111']='http://www.google.co.jp/aaabbb111'; 
	locatonList['aaabbb111222']='http://www.google.co.jp/aaabbb111222'; 
	locatonList['aaabbb222']='http://www.google.co.jp/aaabbb222'; 
	locatonList['aaa111']='http://www.google.co.jp/aaa111'; 
	locatonList['aaa111222']='http://www.google.co.jp/aaa111222'; 
	locatonList['aaa222']='http://www.google.co.jp/aaa222'; 

	locatonList['bbb']='http://www.google.co.jp/bbb'; 
	locatonList['bbb111']='http://www.google.co.jp/bbb111'; 
	locatonList['bbb111222']='http://www.google.co.jp/bbb111222'; 
	locatonList['bbb222']='http://www.google.co.jp/bbb222'; 

	locatonList['111']='http://www.google.co.jp/111'; 
	locatonList['111222']='http://www.google.co.jp/111222'; 

	locatonList['222']='http://www.google.co.jp/222'; 


	var key = ''; 

	var groupA_1 = document.getElementsByName('groupA-1'); 
	for(var i=0;i<groupA_1.length;i++){ 
		if(groupA_1[i].checked) { 
		key = key + groupA_1[i].value; 
		break; 
		} 
	}
	var groupA_2 = document.getElementsByName('groupA-2'); 
	for(var i=0;i<groupA_2.length;i++){ 
		if(groupA_2[i].checked) { 
		key = key + groupA_2[i].value; 
		break; 
		} 
	} 
	var groupB_1 = document.getElementsByName('groupB-1'); 
	for(var i=0;i<groupB_1.length;i++){ 
		if(groupB_1[i].checked) { 
		key = key + groupB_1[i].value; 
		break; 
		} 
	}
	var groupB_2 = document.getElementsByName('groupB-2'); 
	for(var i=0;i<groupB_2.length;i++){ 
		if(groupB_2[i].checked) { 
		key = key + groupB_2[i].value; 
		break; 
		} 
	}
	document.getElementById('variableLink').href=locatonList[key]; 
	document.getElementById('variableLink').firstChild.nodeValue='['+key+']'; 
} 
