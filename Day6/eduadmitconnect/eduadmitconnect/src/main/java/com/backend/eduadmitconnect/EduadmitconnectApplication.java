package com.backend.eduadmitconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EduadmitconnectApplication {

	@CrossOrigin(origins = "http://localhost:8080/**")
	public static void main(String[] args) {
		SpringApplication.run(EduadmitconnectApplication.class, args);
	}

}
