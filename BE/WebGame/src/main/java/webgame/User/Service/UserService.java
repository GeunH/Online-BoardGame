package webgame.User.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webgame.User.Dto.UserDto;
import webgame.User.Entity.User;
import webgame.User.Repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerNewUser(UserDto userDto) {
        User user = new User(
            userDto.getEmail(),
            userDto.getPassword(),
            userDto.getProvider(),
            userDto.getNickname()
        );
        userRepository.save(user);
        return;
    }
}
