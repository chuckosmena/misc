var gooein = {
	cookie: 'compilerhub',
	default: {
		select: {
			['sex': 'F'],
			['civil_status': 'MARRIED'],
			['occupation': 'OTHER'],
			['beneficiary_type[]': 'UNDEREMPLOYED/SELF-EMPLOYED WORKERS'],
			['skills_training': 'NONE'],
			['income_bracket': '3'],
			['mode_of_payment': 'MONEY REMITTANCE'],
			['id_type': 'PHILSYS ID'],
		},
	},
	getCookie: function(cname) {
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
	},
	documentKeyDown: function(e) {
		let keyCode = e.keyCode;
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
	},
	manipulateFields: function() {
		// hide unwanted fields/sections
		$('select[name="beneficiary_type[]"]').closest('.fv-plugins-icon-container').parent().hide();
		$('select[name="skills_training"]').closest('.row').hide();
		$('select[name="occupation"]').closest('.col-lg-6').hide();
		$('select[name="skills_training"]').closest('.row').hide();
		$('select[name="mode_of_payment"]').closest('.row').hide();
		$('select[name="income_bracket"]').closest('.col-lg-6').hide();

		// change input size
		$('input[name="others"]').closest('.col-lg-6').attr('class', 'col-lg-12');
		$('input[name="dependent_name"]').closest('.col-lg-6').attr('class', 'col-lg-12');
	},
	populateFields: function() {
		$(this.default.select).each(function(i) {
			('select[name="' + i[0] + '"]').val(i[1]).change();
		});

		// $('select[name="sex"]').val('F').change();
		// 	$('select[name="civil_status"]').val('MARRIED').change();
		// 	$('select[name="occupation"]').val('OTHER').change();
		// 	$('select[name="beneficiary_type[]"]').val('UNDEREMPLOYED/SELF-EMPLOYED WORKERS').change();
		// 	$('select[name="skills_training"]').val('NONE').change();
		// 	$('select[name="income_bracket"]').val('3').change();
		// 	$('select[name="mode_of_payment"]').val('MONEY REMITTANCE').change();
		// 	$('select[name="id_type"]').val('PHILSYS ID').change();
	},
	focus: function() {
		$('input[name="id_no"]').focus();
	},
};
