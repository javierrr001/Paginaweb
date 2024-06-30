import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  usuario = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    fecharegistro: '',
    estadoregistro: false
  };

  ngOnInit(): void { }

  guardar(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }

  abrirWhatsApp() {
    const telefono = 72605012;
    const mensaje = encodeURIComponent(`Hola, mi nombre es ${this.usuario.nombre}.`);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
  }
}
