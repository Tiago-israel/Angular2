import { Pessoa } from './../models/pessoa.model';
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgModel, NgForm } from '@angular/forms';

@Component({
    selector: 'form-driven',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @ViewChild('form') form: NgForm;
    public pessoa: Pessoa = new Pessoa();
    public mensagens: string[] = [];

    public ngOnInit(): void { }

    public validarForm(input: NgModel): boolean {
        if ((input.invalid && input.touched)) {
            this.DispararMensagensValidacao(input);
            return true;
        }
        return false;
    }

    public validarSelects(input: NgModel): boolean {
        if (input.touched && input.value == -1) {
            this.mensagens[input.name] = `O campo ${input.name} é obrigatório.`;
            return true;
        }
        return false;
    }

    private DispararMensagensValidacao(input: NgModel): void {
        if (input.errors.required) {
            this.mensagens[input.name] = `O campo ${input.name} é obrigatório.`;
        }
        if (input.errors.minlength) {
            this.mensagens[input.name] = `O campo ${input.name} deve conter no mínimo ${input.errors.minlength.requiredLength} caracteres.`;
        }
        if (input.errors.email && input.value != "") {
            this.mensagens[input.name] = `Por favor informe um email válido.`;
        }
    }

    onSubmit(form: NgForm) {
        console.log(this.pessoa);
        this.form.reset();
    }
}