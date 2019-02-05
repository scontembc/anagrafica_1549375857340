package com.anagrafica.db.mycontacts_db.service.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;

import com.anagrafica.db.mycontacts_db.entity.Contact;
import com.anagrafica.db.mycontacts_db.service.ContactService;

//IMPORT RELATIONS
import com.anagrafica.db.mycontacts_db.entity.Company;

@Service
public class ContactBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Contact insert(Contact obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `contact`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `contact` (`_id`, `email`,`name`,`note`,`phone`,`surname`,`company`) VALUES (:id,:email,:name,:note,:phone,:surname, :company )";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("email", obj.getEmail())
			.addValue("name", obj.getName())
			.addValue("note", obj.getNote())
			.addValue("phone", obj.getPhone())
			.addValue("surname", obj.getSurname())
			.addValue("company", obj.getCompany());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Contact` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - FIND BY Company
    	
	public List<Contact> findBycompany(Long idcompany) {
		
		String sql = "select * from `Contact` WHERE `company` = :idcompany";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
		.addValue("idcompany", idcompany);
	    
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Contact.class));
	}
    	
    //CRUD - GET ONE
    	
	public Contact get(Long id) {
	    
		String sql = "select * from `Contact` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Contact) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Contact.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Contact> getList() {
	    
		String sql = "select * from `Contact`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Contact.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Contact update(Contact obj, Long id) {

		String sql = "UPDATE `Contact` SET `email` = :email,`name` = :name,`note` = :note,`phone` = :phone,`surname` = :surname , `company` = :company  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("email", obj.getEmail())
			.addValue("name", obj.getName())
			.addValue("note", obj.getNote())
			.addValue("phone", obj.getPhone())
			.addValue("surname", obj.getSurname())
			.addValue("company", obj.getCompany());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in ContactService.java
     */
    

}
