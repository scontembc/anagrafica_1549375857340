import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CompanyService } from '../../services/company.service';
// Import Models
import { Company } from '../../domain/my-contacts_db/company';

// START - USED SERVICES
/**
* CompanyService.delete
*	@description CRUD ACTION delete
*
* CompanyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Company
 * @class CompanyComponent
 */
@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
    list: Company[];
    search: any = {};
    idSelected: string;
    constructor(
        private companyService: CompanyService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.companyService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Company to remove
     *
     * @param {string} id Id of the Company to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Company
     */
    deleteItem() {
        this.companyService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
