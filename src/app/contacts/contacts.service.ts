import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact'
import { CONFIG } from '../shared'

let charactersUrl = CONFIG.baseUrls.contacts;

@Injectable()
export class ContactsService {

    constructor(private _http:Http) { }


}