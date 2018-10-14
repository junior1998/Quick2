import { Component, OnInit } from '@angular/core';
import  { UsuariosService } from '../../servicios/usuarios.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor(public usuarioSer:UsuariosService) {
      this.usuarioSer.logueado = true;
   }

  ngOnInit() {

  }

}
