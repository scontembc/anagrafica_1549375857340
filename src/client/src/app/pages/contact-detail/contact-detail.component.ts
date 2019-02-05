// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ContactService } from '../../services/contact.service';
import { CompanyService } from '../../services/company.service';
// Import Models
import { Contact } from '../../domain/my-contacts_db/contact';
import { Company } from '../../domain/my-contacts_db/company';

// START - USED SERVICES
/**
* ContactService.create
*	@description CRUD ACTION create
*
* ContactService.get
*	@description CRUD ACTION get
*
* CompanyService.list
*	@description CRUD ACTION list
*
* ContactService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Contact
 */
@Component({
    selector: 'app-contact-detail',
    templateUrl: 'contact-detail.component.html',
    styleUrls: ['contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
    item: Contact;
    listCompany: Company[];
    model: Contact;
    formValid: Boolean;

    constructor(
    private contactService: ContactService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Contact();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.contactService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.companyService.list().subscribe(list => this.listCompany = list);
        });
    }


    /**
     * Save Contact
     *
     * @param {boolean} formValid Form validity check
     * @param Contact item Contact to save
     */
    save(formValid: boolean, item: Contact): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.contactService.update(item).subscribe(data => this.goBack());
            } else {
                this.contactService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



