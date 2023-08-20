$('#contactForm').validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true,
    },
    phone: 'required',
    subject: 'required',
  },
  messages: {
    name:  'Моля въведете вашето име',
    email: {required: 'Моля въведете вашият имейл', email: 'Моля въведете валиден имейл'},
    phone:  'Моля въведете вашият телефон',
    subject: 'Моля въведете вашето запитване'
  },
  submitHandler: () => {
    $('.form-container').hide();
    $('.loader').show();

    fetch('https://1gq6otz1vb.execute-api.eu-central-1.amazonaws.com/prod/sendemail', {
      method: 'POST',
      body: JSON.stringify({
      "text": $('#subject').val(),
      "fromName": $('#name').val(),
      "fromEmail": $('#email').val(),
      "fromNumber": $('#phone').val()
    }),
    }).then(() => {
      $('.loader').hide();
      $('.finished').show();
    }).catch(() => {
      $('.loader').hide();
      $('.finished').show();
    })
    // setTimeout(() => {
    //   $('.loader').hide();
    //   $('.finished').show();
    // }, 2000);
  }
});

$('.loader').hide();
$('.finished').hide();
