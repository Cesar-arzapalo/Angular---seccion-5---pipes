import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'FErNAndo hErReRa JiMenez';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'es';
  urlVideo: string = 'https://www.youtube.com/embed/fH5-u3Qr_wA';
  activatedPasswordSecurity: boolean = true;

  valorPromesa = new Promise<string> ((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
  cambiarVisuzalizacionPassword(btnContraseña: HTMLButtonElement){
    if (this.activatedPasswordSecurity){
      btnContraseña.classList.remove('btn-outline-primary');
      btnContraseña.classList.add('btn-outline-danger');
      btnContraseña.innerHTML = 'Desactivar';
    }else{
      btnContraseña.classList.remove('btn-outline-danger');
      btnContraseña.classList.add('btn-outline-primary');
      btnContraseña.innerHTML = 'Activar';
    }
    this.activatedPasswordSecurity = !this.activatedPasswordSecurity;
  }

  // definirIdiomaFecha(idioma: string){
  //   this.idioma = idioma === 'Español' ? 'es' : idioma === 'Inglés' ? 'en' : idioma === 'Francés' ? 'fr' : '';
  // }
}
