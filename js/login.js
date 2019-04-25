
// Bootstrap 4 Validation
$(".needs-validation").submit(function() {
  var form = $(this);
  if (form[0].checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    form.addClass('was-validated');
  } else {
    const data = {};
    data.email = form[0].email.value;
    data.password = form[0].password.value;
    // console.log(JSON.stringify(data));
    // $.ajax();
    $.ajax({
      url: 'www.baidu.com',
      type: 'post',
      data: JSON.stringify(data),
      dataType: 'json',
      success: (data) => {
        console.log(data);
      },
    });
    event.preventDefault();
    event.stopPropagation();
  }
});
