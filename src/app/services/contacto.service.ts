import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ContactoModel } from '../models/contactoModel.models';



const apiUlr = 'https://disweb.jokamaliva.com/jrq/'; // environment.apiUlr;


@Injectable({ providedIn: 'root', })
export class Scontacto{
    constructor(private http: HttpClient, public datepipe: DatePipe) { }
    addContacto(contacto: ContactoModel) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
        let body = new HttpParams();
        body = body.set('pnombre', contacto.nombre.toString());
        body = body.set('pemail', contacto.email.toString());
        body = body.set('ptelefono', contacto.telefono.toString());
        body = body.set('pasunto', contacto.asunto.toString());
        body = body.set('pfecharegistro', this.datepipe.transform(contacto.fecharegistro, 'yyyy-MM-dd') || '');
        body = body.set('pestadoregistro', contacto.estadoregistro ? '1' : '0');

        return this.http.post(apiUlr + 'addcontactobasico', body)
            .pipe(map((resp: any) => {
                console.log('respuesta');
                console.log(resp);
                if (resp['info'] != null) {
                    if (resp['mensaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('FAILD');
                        return null;
                    }
                } else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
}

