import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ContactService } from '../../services/contact.service';
// Import Models
import { Contact } from '../../domain/my-contacts_db/contact';

// START - USED SERVICES
/**
* ContactService.delete
*	@description CRUD ACTION delete
*
* ContactService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Contact
 * @class ContactListComponent
 */
@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    list: Contact[];
    search: any = {};
    idSelected: string;
    constructor(
        private contactService: ContactService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.contactService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Contact to remove
     *
     * @param {string} id Id of the Contact to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Contact
     */
    deleteItem() {
        this.contactService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
