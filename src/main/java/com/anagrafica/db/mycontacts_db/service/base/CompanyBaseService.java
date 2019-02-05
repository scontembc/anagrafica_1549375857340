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

import com.anagrafica.db.mycontacts_db.entity.Company;
import com.anagrafica.db.mycontacts_db.service.CompanyService;

//IMPORT RELATIONS
import com.anagrafica.db.mycontacts_db.entity.Company;

@Service
public class CompanyBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Company insert(Company obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `company`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `company` (`_id`, `address`,`mail`,`name`) VALUES (:id,:address,:mail,:name)";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("address", obj.getAddress())
			.addValue("mail", obj.getMail())
			.addValue("name", obj.getName());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Company` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - GET ONE
    	
	public Company get(Long id) {
	    
		String sql = "select * from `Company` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Company) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Company.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Company> getList() {
	    
		String sql = "select * from `Company`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Company.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Company update(Company obj, Long id) {

		String sql = "UPDATE `Company` SET `address` = :address,`mail` = :mail,`name` = :name  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("address", obj.getAddress())
			.addValue("mail", obj.getMail())
			.addValue("name", obj.getName());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in CompanyService.java
     */
    

}
