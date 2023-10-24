/*按钮*/
function reg(){
    Swal.fire({
        icon: 'error',
        title: 'Register will coming soon',
        footer: 'Get help from About us page!'
      })
}
/*about*/
function about(){
  Swal.fire({
      icon: 'info',
      title:'INFO',
      text: 'A lot things are coming soon,still updating.UN:admin,PSW:12345',
      footer: '<a href=#>Click here for contact us!</a>'
    })
}
function login(){
  Swal.fire({
    icon : 'info',
    title: 'Login',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Username">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Password">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
}
