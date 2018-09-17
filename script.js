function editable(){
	richtexteditor.document.designMode='On';
}


function execCmd(cmd) {
	richtexteditor.document.execCommand(cmd,false,null);
	// body...
}

function execmdarg(cmd,arg){
	richtexteditor.document.execCommand(cmd,false,arg);
}

function foreColor(value){
	// var bg=document.getElementById("forecolor");
	document.getElementById("forecolor").style.backgroundColor=value;
}