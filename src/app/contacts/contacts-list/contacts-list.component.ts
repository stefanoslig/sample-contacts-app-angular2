import { Component, OnInit } from '@angular/core';

import{ Contact } from '../contact';
import{ ContactsService } from '../contacts.service';

@Component({
    moduleId: __moduleName,
    selector: 'contacts',
    templateUrl: 'contacts-list.component.html',
    styleUrls:['contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
    contacts:Contact[];

    constructor( private _contactsService:ContactsService) { }

    getContacts(){
      this.contacts = [];
      this._contactsService.getContacts()
        .subscribe(contacts => {this.contacts = contacts})
    }

    ngOnInit() { 
        this.getContacts();
    }

}