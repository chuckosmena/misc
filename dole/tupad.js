var gooein = {
	cookie: 'compilerhub1',
};

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function documentKeyDownFunc(e) {
	var keyCode = e.keyCode;

	// CTRL+ENTER
	if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
		$('button.swal2-confirm.btn.btn-primary').click();
		$('button.swal2-confirm.swal2-styled').click();
	}

	// CTRL+.
	if (event.keyCode == 110 && event.ctrlKey) {
		if ($('#btn-create-beneficiary').length) {
			$('#btn-create-beneficiary').click();
		} else {
			$('#a-access-btn-create').click();
		}
		$('input[name="first_name"]').focus();
	}
}

