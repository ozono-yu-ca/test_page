// パターン02

function extendLink(){

	var locatonList = new Array(); 
	locatonList['aaa:bbb:ca:d1']='http://www.google.co.jp/aaab1cad1'; 
	locatonList['aaa:111:ca:d2']='http://www.google.co.jp/aaab1cad2'; 
	locatonList['aaa:222:cb:d1']='http://www.google.co.jp/aaab1cbd1'; 
	locatonList['aaa:b1:cb:d2']='http://www.google.co.jp/aaab1cbd2'; 

	locatonList['aa:b2:ca:d1']='http://www.google.co.jp/aab2cad1'; 
	locatonList['aa:b2:ca:d2']='http://www.google.co.jp/aab2cad2'; 
	locatonList['aa:b2:cb:d1']='http://www.google.co.jp/aab2cbd1'; 
	locatonList['aa:b2:cb:d2']='http://www.google.co.jp/aab2cbd2'; 

	locatonList['ab:b1:ca:d1']='http://www.google.co.jp/abb1cad1'; 
	locatonList['ab:b1:ca:d2']='http://www.google.co.jp/abb1cad2'; 
	locatonList['ab:b1:cb:d1']='http://www.google.co.jp/abb1cbd1'; 
	locatonList['ab:b1:cb:d2']='http://www.google.co.jp/abb1cbd2'; 

	locatonList['ab:b2:ca:d1']='http://www.google.co.jp/abb2cad1'; 
	locatonList['ab:b2:ca:d2']='http://www.google.co.jp/abb2cad2'; 
	locatonList['ab:b2:cb:d1']='http://www.google.co.jp/abb2cbd1'; 
	locatonList['ab:b2:cb:d2']='http://www.google.co.jp/abb2cbd2'; 

	var key = ''; 

	var groupA = document.getElementsByName('groupA'); 
	for(var i=0;i<groupA.length;i++){ 
		if(groupA[i].checked) { 
		key = groupA[i].value + ':'; 
		break; 
		} 
	} 
	var groupB = document.getElementsByName('groupB'); 
	for(var i=0;i<groupB.length;i++){ 
		if(groupB[i].checked) { 
		key = key + groupB[i].value + ':'; 
		break; 
		} 
	}
	document.getElementById('variableLink').href=locatonList[key]; 
	document.getElementById('variableLink').firstChild.nodeValue='['+key+']'; 
} 
