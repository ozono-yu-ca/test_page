// パターン02

function extendLink(){

	var locatonList = new Array(); 
	locatonList['aa:b1:ca:d1']='http://www.google.co.jp/aab1cad1'; 
	locatonList['aa:b1:ca:d2']='http://www.google.co.jp/aab1cad2'; 
	locatonList['aa:b1:cb:d1']='http://www.google.co.jp/aab1cbd1'; 
	locatonList['aa:b1:cb:d2']='http://www.google.co.jp/aab1cbd2'; 

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
	var groupC = document.getElementsByName('groupC'); 
	for(var i=0;i<groupA.length;i++){ 
		if(groupC[i].checked) { 
		key = key + groupC[i].value + ':'; 
		break; 
		} 
	} 
	var groupD = document.getElementsByName('groupD'); 
	for(var i=0;i<groupD.length;i++){ 
		if(groupD[i].checked) { 
		key = key + groupD[i].value; 
		break; 
		} 
	}
	document.getElementById('variableLink').href=locatonList[key]; 
	document.getElementById('variableLink').firstChild.nodeValue='['+key+']'; 
} 

// パターン03
function sample(F){
	var list = {
		0:'htp://example.com/a.html',//0以下
		2:'htp://example.com/b.html',//2以下
		5:'htp://example.com/c.html',
		8:'htp://example.com/d.html',
		10:'htp://example.com/e.html'
	};

	var i=0;
	var q;
	var c=0;
	var key=0;

	while( q = F.elements[ i++ ] )
	if(q.type=='radio' && q.checked) c+= parseInt(q.value);

	for(key in list) {
		if(c <= parseInt(key)) {
		location.href = list[key];
		break;
		}
	}
	return false;
}


// パターン04

function SiteCheck(){
value1 = "選択されていません";
num1 = document.myFORM.myRB1.length;
for(a=0;a<num1;a++){
flag1 = document.myFORM.myRB1[a].checked;
if(flag1) value1 = document.myFORM.myRB1[a].value;
}
value2 = "選択されていません";
num2 = document.myFORM.myRB2.length;
for(b=0;b<num2;b++){
flag2 = document.myFORM.myRB2[b].checked;
if(flag2) value2 = document.myFORM.myRB2[b].value;
}
value3 = "選択されていません";
num3 = document.myFORM.myRB3.length;
for(c=0;c<num3;c++){
flag3 = document.myFORM.myRB3[c].checked;
if(flag3) value3 = document.myFORM.myRB3[c].value;
}
value4 = "選択されていません";
num4 = document.myFORM.myRB4.length;
for(d=0;d<num4;d++){
flag4 = document.myFORM.myRB4[d].checked;
if(flag4) value4 = document.myFORM.myRB4[d].value;
}
value5 = "選択されていません";
num5 = document.myFORM.myRB5.length;
for(e=0;e<num5;e++){
flag5 = document.myFORM.myRB5[e].checked;
if(flag5) value5 = document.myFORM.myRB5[e].value;
}
sWin = window.open("","","width=440,height=260,left=300,top=20,resizable=yes");
sWin.document.open();
sWin.document.write("<html><head><title>判定結果</title></head><body bgcolor='#F0F8FF'>");
sWin.document.write("<center><font style='font-size : 16px; color : #0099FF'>■□■ 判定結果 ■□■</font></center><br>");
sWin.document.write("<div align=center><center><table border=0 cellpadding=5 cellspacing=0>");
sWin.document.write("<tr><td align=right><font style='font-size : 14px; color : #0099FF'>１日のアクセス数　・・・</font></td>");
sWin.document.write("<td><b><font style='font-size : 14px; color : #0099FF'>"+value1+"</font></b></td></tr>");
sWin.document.write("<tr><td align=right><font style='font-size : 14px; color : #0099FF'>更新をするペース　・・・</font></td>");
sWin.document.write("<td><b><font style='font-size : 14px; color : #0099FF'>"+value2+"</font></b></td></tr>");
sWin.document.write("<tr><td align=right><font style='font-size : 14px; color : #0099FF'>サイトのページ数　・・・</font></td>");
sWin.document.write("<td><b><font style='font-size : 14px; color : #0099FF'>"+value3+"</font></b></td></tr>");
sWin.document.write("<tr><td align=right><font style='font-size : 14px; color : #0099FF'>検索サイト登録数　・・・</font></td>");
sWin.document.write("<td><b><font style='font-size : 14px; color : #0099FF'>"+value4+"</font></b></td></tr>");
sWin.document.write("<tr><td align=right><font style='font-size : 14px; color : #0099FF'>サイトへのメール　・・・</font></td>");
sWin.document.write("<td><b><font style='font-size : 14px; color : #0099FF'>"+value5+"</font></b></td></tr>");
sWin.document.write("<tr><td colspan=2 align=center><br><FORM><INPUT TYPE='button' onClick='window.close()' value='CLOSE'></FORM>");
sWin.document.write("</td></tr></table></center></div></body></html>");
sWin.document.close();
}