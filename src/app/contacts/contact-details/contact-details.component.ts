import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactsService, Contact } from '../index';

@Component({
    moduleId: __moduleName,
    selector: 'sd-contact-details',
    templateUrl: 'contact-details.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES],
})
export class ContactDetailsComponent implements OnInit {

    selected_contact: Contact;

    public contactsForm: FormGroup;

    constructor(
        private _contactsService:ContactsService,
        private _router: Router, 
        private _route: ActivatedRoute
        ) { }

    ngOnInit() { 
        let id = +this._route.snapshot.params['id'];
        this._getContactDetails(id);
    }

    onCancel() {
        this._router.navigate(['/contacts']);
    }

    private _getContactDetails(id){
        this._contactsService.getContact(id)
                .subscribe((contact:Contact) => {
                    const contact_to_clone = JSON.stringify(contact);
                    this.selected_contact = JSON.parse(contact_to_clone);
                    this._setContactsForm();
                })
    }

    private _setContactsForm(){
        this.contactsForm = new FormGroup({
                firstName: new FormControl(this.selected_contact.firstName, Validators.required),
                lastName: new FormControl(this.selected_contact.lastName, Validators.required),
                address: new FormControl(this.selected_contact.address, Validators.required),
                phone: new FormControl(this.selected_contact.phone, Validators.required)
        });
    }
}