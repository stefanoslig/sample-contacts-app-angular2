import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { ContactsService, Contact } from '../index';
import { FilterTextBoxComponent } from '../../filterTextBox/filterTextBox.component';

@Component({
    moduleId: __moduleName,
    selector: 'contacts',
    templateUrl: 'contacts-list.component.html',
    styleUrls:['contacts-list.component.css'],
    directives:[ROUTER_DIRECTIVES, FilterTextBoxComponent]
})

export class ContactsListComponent implements OnInit {
    contacts:Contact[];
    filterText:string = '';
    filteredContacts:Contact[] = [];

    constructor( 
        private _contactsService:ContactsService,
        private _router: Router
        ) { }

    ngOnInit() { 
        this._getContacts();
    }

    onSelect(contact: Contact) {
        this._router.navigate(['/contacts', contact.id]);
    }

    filterChanged(data:string){
        if(data && this.contacts){
            data = data.toUpperCase();
            let props = ["firstName", "lastName", "address" , "phone"]
            let filtered = this.contacts.filter(item=> {
                let match = false;
                for(let prop of props){
                    if(item[prop].toString().toUpperCase().indexOf(data) >-1 ){
                        match = true;
                        break;
                    }
                }
                return match;
            });
            this.filteredContacts = filtered;
        }else{
            this.filteredContacts = this.contacts;
        }
    }

    private _getContacts(){
      this._contactsService.getContacts()
        .subscribe(contacts => {this.contacts  = this.filteredContacts = contacts})
    }
}