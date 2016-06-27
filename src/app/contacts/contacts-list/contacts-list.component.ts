import { Component, OnInit } from '@angular/core';

import{ Contact } from '../contact';

const CONTACTS: Contact[] = [
    { 
      id: 11, 
      firstName: 'Mr. Nice', 
      lastName:'Jones', 
      address:'dsfsdfsd', 
      phone:123123123 
    },
    { 
      id: 12, 
      firstName: 'Mr. Nice2', 
      lastName:'Jones2', 
      address:'dsfsdf', 
      phone:123 
    },
    { 
      id: 13, 
      firstName: 'Mr. Nice3', 
      lastName:'Jones3', 
      address:'', 
      phone:1231
    },
    { 
      id: 14, 
      firstName: 'Mr. Nice4', 
      lastName:'Jones4', 
      address:'dsfsdfsd', 
      phone:12312 
    },
    { 
      id: 15, 
      firstName: 'Mr. Nice5', 
      lastName:'Jones5', 
      address:'dsfsdf', 
      phone:123123
    },
    { 
      id: 16, 
      firstName: 'Mr. Nice6', 
      lastName:'Jones6', 
      address:'', 
      phone:1231231 
    }
  ];

@Component({
    moduleId: __moduleName,
    selector: 'contacts',
    templateUrl: 'contacts-list.component.html',
    styleUrls:['contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {
    contacts:Contact[]=[]
    constructor() { }

    ngOnInit() { 
        this.contacts = CONTACTS;
    }

}