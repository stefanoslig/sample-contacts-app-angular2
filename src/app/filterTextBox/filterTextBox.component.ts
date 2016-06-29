import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'filter-text-box',
    template: `
    <form>
         Filter:
         <input type="text" name="filter"
                [(ngModel)]="model.text" 
                (keyup)="filterChanged($event)"  />
    </form>
  `
})

export class FilterTextBoxComponent {
    model: { text:string } = { text: null }
    
    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>(); 

    filterChanged(event:any){
        event.preventDefault();
        this.changed.emit(this.model.text);
    }

}