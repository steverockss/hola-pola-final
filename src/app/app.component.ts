import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/filter";
import { Pola } from "app/core/models/pola";
import swal from "sweetalert2";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  polas: Pola[];
  constructor() {

   if(!sessionStorage.getItem("warning")){
    sessionStorage.setItem("cartElements", "0")
    swal.fire({
      width: 800,
      padding: "3em",
      html:
        `<h5 style="color: white">¿ERES MAYOR DE EDAD?</h5> <br>` +
        `<p style="color: white"> EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. 
        PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD</p>`,
      imageUrl: `https://i.postimg.cc/Dzj8Vhm8/logo.png`,
      imageWidth: 400,
      showConfirmButton: true,
      background: "#E84565 ",
      showCancelButton: true,
      confirmButtonColor: '#F2CF20',
      cancelButtonText: "No, soy menor de edad",
      cancelButtonColor: '#4BBBBC',
      confirmButtonText: 'Sí, soy mayor de edad',
      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
    }).then((result) => {
      if (!result.isConfirmed) {
        window.location.href = 'https://www.google.com/';
      }else{
        sessionStorage.setItem("warning", "true");
      }
    });
    

    }
  }
  
  ngOnInit() {

  }
  
}
