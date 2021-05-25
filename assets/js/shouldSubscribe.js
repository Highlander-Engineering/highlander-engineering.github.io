let email = document.getElementById('mce-EMAIL');
let subscribeBtn = document.getElementById('mc-embedded-subscribe');
let newsletterForm = document.getElementById('newsletter-form');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

subscribeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value.length > 0) {
    if (validateEmail(email.value)) {
      Swal.fire({
        title: 'Subscribe to Our Newsletter',
        text: 'Do you want to continue',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: `Yes!`,
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          newsletterForm.submit();
        } else if (result.isDenied) {
          return false;
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid Email',
      });
    }
  } else {
    return false;
  }
});
