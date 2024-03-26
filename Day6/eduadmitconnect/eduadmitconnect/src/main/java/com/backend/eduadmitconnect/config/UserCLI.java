package com.backend.eduadmitconnect.config;


import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.backend.eduadmitconnect.Entity.UserEntity;
import com.backend.eduadmitconnect.Repository.UserRepository;

import lombok.RequiredArgsConstructor;



@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count()>0)
           return;
        UserEntity u=new UserEntity();
        u.setEmail("admin@gmail.com");
        u.setPassword(passwordEncoder.encode("12345678"));
        u.setRoles("ADMIN");
        u.setName("Admin");
        userRepository.save(u);

}
}