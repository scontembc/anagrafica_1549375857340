// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CompanyService } from '../../services/company.service';
import { ContactService } from '../../services/contact.service';
// Import Models
import { Company } from '../../domain/my-contacts_db/company';
import { Contact } from '../../domain/my-contacts_db/contact';

// START - USED SERVICES
/**
* CompanyService.create
*	@description CRUD ACTION create
*
* ContactService.findBycompany
*	@description CRUD ACTION findBycompany
*
* CompanyService.get
*	@description CRUD ACTION get
*
* CompanyService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Company
 */
@Component({
    selector: 'app-company-edit',
    templateUrl: 'company-edit.component.html',
    styleUrls: ['company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
    item: Company;
    listCompany: Company[];
    externalContact: Contact[];
    model: Company;
    formValid: Boolean;

    constructor(
    private companyService: CompanyService,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Company();
        this.externalContact = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.companyService.get(id).subscribe(item => this.item = item);
                this.contactService.findByCompany(id).subscribe(list => this.externalContact = list);
            }
            // Get relations
        });
    }


    /**
     * Save Company
     *
     * @param {boolean} formValid Form validity check
     * @param Company item Company to save
     */
    save(formValid: boolean, item: Company): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.companyService.update(item).subscribe(data => this.goBack());
            } else {
                this.companyService.create(item).subscribe(data => this.goBack());
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



