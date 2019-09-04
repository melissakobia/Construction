//Business Logic

var finishedProducts = {
  tile : 600,
  sink : 8000,
  ceiling : 2000,
  paint : 4500

};

var pricing = [];

function grandTotal() {
  var total = 0;
  var i = 0;

  for (i = 0; i < pricing.length; i++) {
    total += pricing[i];
  }
  return total;
}




$(document).ready(function () {

  // $("button#btnSubmit").click(function (event) {
  //   event.preventDefault();
  //   var user = document.getElementById('btnSubmit').value;
  //   alert(user + "Hi! we've received your message, thank you for getting in touch with us");
  //   const Mailchimp = require('bae0665d0a18da9ad14765f40659c61c-us4');

  //   const mailchimp = new Mailchimp(myMailchimpAPI);

  //   mailchimp.post(`/lists/${myListId}/members`, {
  //     email_address: 'melissakobia1997@gmail.com',
  //     status: 'subscribed',
  //     merge_fields: {
  //       FNAME: 'Melissa',
  //       EMAIL: 'melissakobia1997@gmail.com',
  //       COMPANY: 'Construction'
  //     }
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  //   alert("you have completed");
  // });


  $("button#tileBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityTile").val());
    var tilePrice = finishedProducts.tile;
    var total = tilePrice * inputQuantity;
    alert(total);

  });





});
