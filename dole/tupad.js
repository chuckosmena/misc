var gooien = {
  cookie: 'compilerhub',
  default: {
    select: [
      ['sex', 'F'],
      ['civil_status', 'MARRIED'],
      ['occupation', 'OTHER'],
      ['beneficiary_type[]', 'UNDEREMPLOYED/SELF-EMPLOYED WORKERS'],
      ['skills_training', 'NONE'],
      ['income_bracket', '3'],
      ['mode_of_payment', 'MONEY REMITTANCE'],
      ['id_type', 'NATIONAL ID'],
    ],
  },
  getCookie(cname) {
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
  createBeneficiary() {
    if ($('#btn-create-beneficiary').length) {
      $('#btn-create-beneficiary').click();
    } else {
      $('#a-access-btn-create').click();
    }
    $('input[name="first_name"]').focus();
  },
  documentKeyDown(e) {
    let keyCode = e.keyCode;
    // CTRL+ENTER
    if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
      $('button.swal2-confirm.btn.btn-primary').click();
      $('button.swal2-confirm.swal2-styled').click();
    }

    // CTRL+.
    if (event.keyCode == 110 && event.ctrlKey) {
      gooien.createBeneficiary();
    }
  },
  manipulateFields() {
    if (gooien.getCookie(gooien.cookie) == 'manipulate') {
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
    }
  },
  populateFields() {
    $(this.default.select).each(function(i, v) {
      $('select[name="' + v[0] + '"]').val(v[1]).change();
    });
    
    if (gooien.getCookie(gooien.cookie) == 'Admin') {
      $('input[name="dependent_name"]').val($('input[name="last_name"]:eq(1)').val());
      $('input[name="contact_no"]').val('00000000000');
    }
  },
  focus() {
    $('input[name="id_no"]').focus();
  },
};

if (gooien && gooien.getCookie(gooien.cookie) == 'Admin') {
  $(document).bind("ajaxComplete", function(e, r, s) {
    if (s.url.includes("beneficiary?dups=") && !r.responseJSON.success) {
      setTimeout(function() { Swal.clickConfirm(); }, 500);
    } else if (s.url.includes("beneficiary") && s.type=="POST" && r.responseJSON.success) {
      setTimeout(function() {
        Swal.clickConfirm();
        gooien.createBeneficiary();
      }, 100);
    }
  });

  $('form#verifyForm, form#beneficiaryForm').on('submit', function() {
    setTimeout(function() { Swal.clickConfirm(); }, 100);
  });
}
