import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './contact'
import { CONFIG } from '../shared'

let contactsUrl = CONFIG.baseUrls.contacts;

@Injectable()
export class ContactsService {

    constructor(private _http:Http) { }

    getContacts() {
        return this._http.get(contactsUrl)
        .map((response: Response) => <Contact[]>response.json().data)
        .catch(this.handleError)
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}