package webgame.User.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import webgame.User.Dto.UserDto;
import webgame.User.Service.UserService;

@RestController
@RequestMapping("/api/user") 
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerNewUser(@RequestBody UserDto userDto) {
        try {
            userService.registerNewUser(userDto);
            return new ResponseEntity<>("User successfully registered.", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred during registration.", HttpStatus.BAD_REQUEST);
        }
    }
}
