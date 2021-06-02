import { Component, OnInit } from "@angular/core";
import { Factura } from "app/core/models/factura";
import swal from "sweetalert2";
import { PolaItem } from "app/core/models/polaItem";

@Component({
  
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  polasItems: PolaItem[];
  factura: Factura;
  
  constructor() {
    let cart = sessionStorage.getItem("cart");
    if (cart !== "undefined") {
    this.polasItems = JSON.parse(sessionStorage.getItem("cart"));
    

    }
  }

  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    this.factura = new Factura(
      123405,
      "Pepito Martinez",
      122343,
      31967820,
      "Cr 89 # 56 A , Conjunto San Vicnete",
      "Bogota",
      this.polasItems,
      mm + '/' + dd + '/' + yyyy
    );

    
    
  }
  buy() {
    swal.fire({
      width: 600,
      padding: "3em",
      html:
      '' +
      '<span style="color:white;">Se realizó su pago <br> ¡Disfruta tus polas!</span> <br> <a href="/facturas">Mis pedidos</a> <br> <br> ' +
      ' ',
 

      imageUrl: `https://i.postimg.cc/Dzj8Vhm8/logo.png`,
      imageWidth: 400,
      showConfirmButton: false,
      background: "#E84565 ",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  }
}
