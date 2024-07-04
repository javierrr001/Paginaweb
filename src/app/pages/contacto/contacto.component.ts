import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { Scontacto } from '../../services/contacto.service';
import { DatePipe } from '@angular/common';
import { ContactoModel } from '../../models/contactoModel.models';



@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [DatePipe, Scontacto]
})
export class ContactoComponent implements OnInit {

   
  pacienteModel: ContactoModel = new ContactoModel();
  constructor(private scontacto: Scontacto) { }

  ngOnInit(): void { }

  guardar(forma: NgForm) {
    console.log(`imprimiendo`);
  console.log(this.pacienteModel);
  
    this.scontacto.addContacto(this.pacienteModel)
    .subscribe((resp) => {
      console.log('Coctacto enviado correcta mente ');
      Swal.fire({
        allowOutsideClick: false,
        title: 'Confirmación',
        text: 'Contacto  guardado',  
      });    
      this.pacienteModel=new ContactoModel();
       forma.resetForm()  
    });
   
  }
  

  abrirWhatsApp() {
    const telefono = 78183032;
    const mensaje = encodeURIComponent(`Hola, mi nombre es `);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
  }
  
}