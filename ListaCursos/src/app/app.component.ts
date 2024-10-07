import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from "./components/tabla-alumnos/tabla-alumnos.component";
import { TablaCursosComponent } from "./components/tabla-cursos/tabla-cursos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaAlumnosComponent, TablaCursosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cursos:boolean = true;
  handleCambio(){
    this.cursos = !this.cursos;
  }
}
