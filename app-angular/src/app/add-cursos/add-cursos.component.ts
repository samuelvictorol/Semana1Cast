import { CastServiceService } from '../cast-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']

})
export class AddCursosComponent implements OnInit {
  categoriaList$!: Observable<any[]>
  cursosList: any = []
  descricao: any
  dateInicio:any
  dateTermino: any
  qtdAlunos: any
  categoriaId: any
  validaData: any
  constructor(private service: CastServiceService, private router: Router) { }

  ngOnInit(): void {
    this.categoriaList$ = this.service.getCategoria()
  }

  addCurso(){
    var curso = {
      descricao: this.descricao,
      dateInicio: this.dateInicio,
      dateTermino: this.dateTermino,
      qtdAlunos: this.qtdAlunos,
      categoriaId: this.categoriaId
    }

    if(curso.descricao == undefined || curso.descricao == ''){
      alert('Campo Descrição é Obrigatório')
      return
    }

    const dataValida = this.validarData(curso)

    if(curso.categoriaId == undefined) {
      alert('Selecione uma categoria')
      return
    }

    if(dataValida){
      this.service.addCurso(curso).subscribe(() =>{
        setTimeout(() => {
          alert("Curso adicionado com sucesso")
          this.router.navigate(['limbo'])
        }
        , 1500)
      })
    }else{
      return
    }

  }

  validarData(curso: any) {
    if(curso.dateInicio == undefined || curso.dateTermino == undefined){
      alert('Campo(s) de Data não preenchido(s)')
      return false
    }
    if(curso.dateInicio > curso.dateTermino){
      alert('Não é possível iniciar em uma data posterior a data de término')
      return false
    }

    return true
  }

  descricaoUpdate(descricao:any):void{
    this.descricao = descricao
  }

}
