package com.anagrafica.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.anagrafica.db.mycontacts_db.service.CompanyService;
import com.anagrafica.db.mycontacts_db.entity.Company;

//IMPORT RELATIONS
import com.anagrafica.db.mycontacts_db.entity.Company;

public class CompanyBaseController {
    
    @Autowired
	CompanyService companyService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({  })
		@RequestMapping(value = "/companies", method = RequestMethod.POST, headers = "Accept=application/json")
	public Company insert(@RequestBody Company obj) {
		Company result = companyService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({  })
	@RequestMapping(value = "/companies/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		companyService.delete(id);
	}
	
	
    //CRUD - GET ONE
    @Secured({  })
	@RequestMapping(value = "/companies/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Company get(@PathVariable Long id) {
		Company obj = companyService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({  })
	@RequestMapping(value = "/companies", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Company> getList() {
		return companyService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({  })
	@RequestMapping(value = "/companies/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Company update(@RequestBody Company obj, @PathVariable("id") Long id) {
		Company result = companyService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
