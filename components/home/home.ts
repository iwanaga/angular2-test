import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `
    <h1>My First {{name}} {{1+1}} App</h1>
    <input type="text" [(ngModel)]="hoge">
    <span>{{hoge}}</span>
    <ul>
      <li *ngFor="#data of demoData">{{data.name}} - {{data.age}}</li>
    </ul>
    `
})
export class AppComponent {
    public name = 'Angular';
    public demoData = [
        {name: 'Yamada',    age: 24},
        {name: 'Tanaka',    age: 28},
        {name: 'Sato',      age: 18},
        {name: 'Inoue',     age: 32},
        {name: 'Takahashi', age: 46}
    ];
}
