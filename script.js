var stt = 0;
var cart = [];
function addProduct() {
  let pname = document.getElementById("name").value;
  let hc = document.getElementById("hc").value;
  let dvt = document.getElementById("dvt").value;
  let use = document.getElementById("use").value;
  let type = document.getElementById("type").value;
  let sl = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  if (sl <= 0 || typeof Number(price) != "number") {
    document.getElementById("ketqua").innerHTML = "Nhập lại";
  } else {
    document.getElementById("ketqua").innerHTML = null;
    let date = document.getElementById("date").value;
    stt++;
    let total = sl * Number(price);
    addcart(stt, pname, hc, dvt, use, type, date, sl, price, total);
  }
}
function addcart(stt, pname, hc, dvt, use, type, date, sl, price, total) {
  let cart = document.querySelector("#out_table tbody");
  let addtr = document.createElement("tr");

  let trcontent =
    "<tr><td>" +
    stt +
    "</td><td>" +
    pname +
    "</td><td>" +
    hc +
    "</td><td>" +
    dvt +
    "</td><td>" +
    use +
    "</td><td>" +
    type +
    "</td><td>" +
    date +
    "</td><td>" +
    sl +
    "</td><td>" +
    price +
    "</td><td>" +
    total +
    "</td></tr>";
  addtr.innerHTML = trcontent;
  cart.append(addtr);
}
