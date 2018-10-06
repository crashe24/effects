import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { CargarUsuario } from '../../store/actions/user.action';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  usuario: Usuario;
  loading: boolean;
  error: any;
  constructor( private route: ActivatedRoute,
    private store: Store<AppState>) { }

  // para la ruta activa ActivatedRoute
  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params['id'];
      // console.log(id);
      this.store.dispatch ( new CargarUsuario(id));

    });

    this.store.select('user')
    .subscribe( (data) => {
      console.log(data);
        this.usuario = data.user;
        this.loading = data.loading;
        this.error = data.error;
    });
  }

}
