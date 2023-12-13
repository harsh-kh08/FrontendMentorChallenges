$(".email-input").on({
  blur: function() {
    restorePlaceholder();
  },
  focus: function() {
    clearPlaceholder();
    removeAlert();
    $(".email-input").removeClass("email-input-invalid");
  }
});


$(".subscribe-button").click(function(e)
{
  var str=$(".email-input").text();

  const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



if($(".email-input").text()==='email@company.com')
{
$(".alert").text("* The Field is Empty");
$(".alert").show();
$(".email-input").addClass("email-input-invalid");
}

else
{
  if(!(regex_pattern.test(str)))
  {
    $(".alert").text("Valid Email Required");
    $(".alert").show();
    $(".email-input").addClass("email-input-invalid");
  }

  else
  {
    window.location.href = './success.html';
  }

}

})



function clearPlaceholder() {
  var editableDiv = document.getElementById('editableDiv');
  if (editableDiv.innerText === 'email@company.com') {
    editableDiv.innerText = '';
  }
  
}

function restorePlaceholder() {
  var editableDiv = document.getElementById('editableDiv');
  if (editableDiv.innerText === '') {
    editableDiv.innerText = 'email@company.com';
  }
}

function removeAlert()
{
$(".alert").hide();
}