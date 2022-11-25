import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  autos: any;
  conductores: any;
  pasajeros: any;
  viajes: any;
  ngOnInit() {
  }
  constructor(private adminServ:AdminUsuariosService, private loadingCtrl:LoadingController) {
    this.listarAutos();
   }

   listarAutos(){
    this.adminServ.obtenerListadoAutos()
    .then(respuesta => {
      this.autos = respuesta;
      console.log(respuesta)
    },
    (error) => {
      console.log(error);
    });
    
  }

  listarConductores(){
    this.adminServ.obtenerListadoConductores()
    .then(respuesta => {
      this.conductores = respuesta;
      console.log(respuesta)
    },
    (error) => {
      console.log(error);
    });
  }
  listarPasajeros(){
    this.adminServ.obtenerListadoPasajeros()
    .then(respuesta => {
      this.pasajeros = respuesta;
      console.log(respuesta)
    },
    (error) => {
      console.log(error);
    });
  }
  listarViajes(){
    this.adminServ.obtenerListadoViajes()
    .then(respuesta => {
      this.viajes = respuesta;
      console.log(respuesta)
    },
    (error) => {
      console.log(error);
    });
  }
  

}
