import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import{ ContactsService, Contact } from '../index';

@Component({
    moduleId: __moduleName,
    selector: 'contacts',
    templateUrl: 'contacts-list.component.html',
    styleUrls:['contacts-list.component.css'],
    directives:[ROUTER_DIRECTIVES]
})

export class ContactsListComponent implements OnInit {
    contacts:Contact[];

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

    private _getContacts(){
      this.contacts = [];
      this._contactsService.getContacts()
        .subscribe(contacts => {this.contacts = contacts})
    }

}