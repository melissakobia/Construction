//Business Logic

var finishedProducts = {
  tile: 600,
  sink: 8000,
  ceiling: 2000,
  paint: 4500

};

var equipment = {
  concrete: 120000,
  vibrator: 80000,
  spirit: 8000,
  shovels: 490

}

var buildingProducts = {
  sand: 38000,
  blocks: 38,
  slabs: 150,
  bars: 3800
}

var fittings = {
  pipe: 15,
  door : 250, 
  window: 680
}

var electricAppliances = {
  electricPipe : 120,
  cable : 9000,
  sockets : 300,
  fuse : 450

}

var drainage = {
  drainagePipe : 1500,
  septic : 46000
}

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
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders'>"
      + "<td><span> Desert Floor Tile</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Tiles");
      $("#productOrdered").text("Desert Floor Tiles");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#tileForm')[0].reset();


  });

  $("button#sinkBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity2").val());
    var sinkPrice = finishedProducts.sink;
    var total = sinkPrice * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders2'>"
      + "<td><span> Kitchen Sink</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders2").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Tiles");
      $("#productOrdered").text("Stainless steel kitchen sink");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#sinkForm')[0].reset();


  });

  $("button#ceilingBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity3").val());
    var price = finishedProducts.ceiling;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders3'>"
      + "<td><span> Gypsum Ceiling</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders3").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Ceiling");
      $("#productOrdered").text("Nova Gypsum Ceiling");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#ceilingForm')[0].reset();


  });

  $("button#paintBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity4").val());
    var price = finishedProducts.paint;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders4'>"
      + "<td><span> Vinyl Paint</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders4").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Paint");
      $("#productOrdered").text("Vinyl Paint");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#paintForm')[0].reset();


  });

  $("button#concreteBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip1").val());
    var price = equipment.concrete;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders5'>"
      + "<td><span> Concrete Mixer</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders5").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Mixer");
      $("#productOrdered").text("Concrete Mixer");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#concreteForm')[0].reset();


  });

  $("button#vibratorBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip2").val());
    var price = equipment.vibrator;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders6'>"
      + "<td><span> Vibrator</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders6").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Vibrator");
      $("#productOrdered").text("Vibrator");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#vibratorForm')[0].reset();


  });

  $("button#spiritBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip3").val());
    var price = equipment.spirit;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders7'>"
      + "<td><span> Spirit-level</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders7").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Spirit-level");
      $("#productOrdered").text("Magnetic Spirit-level");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#spiritForm')[0].reset();


  });

  $("button#shovelBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip4").val());
    var price = equipment.shovels;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders8'>"
      + "<td><span> Shovels</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders8").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Shovels");
      $("#productOrdered").text("Shovels");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#shovelForm')[0].reset();


  });

  $("button#sandBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild1").val());
    var price = buildingProducts.sand;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders9'>"
      + "<td><span> Sand</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders9").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Sand");
      $("#productOrdered").text("Sand");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#sandForm')[0].reset();


  });


  $("button#blocksBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild2").val());
    var price = buildingProducts.blocks;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders10'>"
      + "<td><span> Blocks</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders10").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Blocks");
      $("#productOrdered").text("Blocks");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#blocksForm')[0].reset();


  });


  $("button#slabsBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild3").val());
    var price = buildingProducts.slabs;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders11'>"
      + "<td><span> Slabs</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders11").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Slab");
      $("#productOrdered").text("Slab");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#slabsForm')[0].reset();


  });


  $("button#barsBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild4").val());
    var price = buildingProducts.bars;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders12'>"
      + "<td><span> Bars</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders12").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Bars");
      $("#productOrdered").text("Steel Twisted Bars");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#barsForm')[0].reset();


  });

  $("button#pipeBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityFit2").val());
    var price = fittings.pipe;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders13'>"
      + "<td><span> Pipe supporters</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders13").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Pipe Supporters");
      $("#productOrdered").text("Pipe Supporters");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#pipeForm')[0].reset();


  });

  $("button#doorBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityfit3").val());
    var price = fittings.door;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders14'>"
      + "<td><span> Door Fittings</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders14").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Door Fittings");
      $("#productOrdered").text("Door Fittings");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#doorForm')[0].reset();


  });

  $("button#windowBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityfit4").val());
    var price = fittings.window;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders15'>"
      + "<td><span> Window Fittings</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders15").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Window Fittings");
      $("#productOrdered").text("Window Fittings");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#windowForm')[0].reset();


  });

  $("button#ePipeBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric1").val());
    var price = electricAppliances.electricPipe;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders16'>"
      + "<td><span> Electric Pipe</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders16").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Electric Pipe");
      $("#productOrdered").text("Electric Pipe");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#ePipeForm')[0].reset();


  });

  $("button#cableBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric2").val());
    var price = electricAppliances.cable;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders17'>"
      + "<td><span> Cables</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders17").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Cable");
      $("#productOrdered").text("Cable");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#cableForm')[0].reset();


  });

  $("button#socketsBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric3").val());
    var price = electricAppliances.sockets;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders18'>"
      + "<td><span> Sockets</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders18").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Sockets");
      $("#productOrdered").text("Sockets");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#socketsForm')[0].reset();


  });

  $("button#fuseBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric4").val());
    var price = electricAppliances.fuse;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders19'>"
      + "<td><span> Fuse</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders19").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Fuse");
      $("#productOrdered").text("Fuse");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#fuseForm')[0].reset();


  });

  $("button#dpipeBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityDrain1").val());
    var price = drainage.drainagePipe;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders20'>"
      + "<td><span> Drainage Pipe</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders20").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Drainage Pipe");
      $("#productOrdered").text("Drainage Pipe");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#dpipeForm')[0].reset();


  });

  $("button#septicBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityDrain4").val());
    var price = drainage.septic;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders21'>"
      + "<td><span> Septic Tank</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>"
      + "</tr>");

    pricing.push(total);

    $(".myOrders21").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Septic Tank");
      $("#productOrdered").text("Septic Tank");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#septicForm')[0].reset();


  });



  


  



















});
