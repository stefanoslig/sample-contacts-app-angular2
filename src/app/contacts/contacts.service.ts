import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './contact'
import { CONFIG } from '../shared/config'
import {Observer} from 'rxjs/Observer';

let contactsUrl = CONFIG.baseUrls.contacts;

@Injectable()
export class ContactsService {

    constructor(private _http:Http) { }

    getContacts():Observable<Contact[]> {
        return this._http.get(contactsUrl)
            .map((response: Response) => <Contact[]>response.json().data)
            .catch(this.handleError)
    }

    getContact(id:number): Observable<Contact>{
        return this.getContacts()
            .map((response: Contact[]) => response.find(p => p.id === id))
            .catch(this.handleError)
    }

    

    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.message || 'Server error');
    }

}