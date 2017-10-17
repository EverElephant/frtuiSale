function save_contact(){
	var data = jQuery("form").serialize();
	jQuery.post("contact_us/save",data,function(result){
		if(result=="ok"){
			alert("提交成功");
		}
	})
}

