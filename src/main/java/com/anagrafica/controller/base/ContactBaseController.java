package com.anagrafica.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.anagrafica.db.mycontacts_db.service.ContactService;
import com.anagrafica.db.mycontacts_db.entity.Contact;

//IMPORT RELATIONS
import com.anagrafica.db.mycontacts_db.entity.Company;

public class ContactBaseController {
    
    @Autowired
	ContactService contactService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({  })
		@RequestMapping(value = "/contacts", method = RequestMethod.POST, headers = "Accept=application/json")
	public Contact insert(@RequestBody Contact obj) {
		Contact result = contactService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({  })
	@RequestMapping(value = "/contacts/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		contactService.delete(id);
	}
	

    //CRUD - FIND BY Company
    @Secured({  })
	@RequestMapping(value = "/contacts/findBycompany/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Contact> findBycompany(@PathVariable("key") Long idcompany) {
		List<Contact> list = contactService.findBycompany(idcompany);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({  })
	@RequestMapping(value = "/contacts/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Contact get(@PathVariable Long id) {
		Contact obj = contactService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({  })
	@RequestMapping(value = "/contacts", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Contact> getList() {
		return contactService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({  })
	@RequestMapping(value = "/contacts/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Contact update(@RequestBody Contact obj, @PathVariable("id") Long id) {
		Contact result = contactService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
