package webgame.User.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(length = 100, unique = true) 
    private String email;
    
    @Column(length = 100)
    private String password;
    
    @Column(length = 50) 
    private String provider;
    
    @Column(length = 50, unique = true)
    private String nickname;
    
    @Column(length = 20) 
    private LocalDate joinDate;
    
    @Column(length = 10) 
    private String status;

    public User(String email, String password, String provider, String nickname) {
        this.email = email;
        this.password = password;
        this.provider = provider;
        this.nickname = nickname;
        this.joinDate = LocalDate.now();
        this.status = "active";
    }
}
