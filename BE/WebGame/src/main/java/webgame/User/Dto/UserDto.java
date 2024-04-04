package webgame.User.Dto;

public class UserDto {
	private String email;
	private String password;
	private String provider;
	private String nickname;
	private String joindate;
	private String status;
		
	public UserDto() {
		super();
	}

	public UserDto(String email, String password, String provider, String nickname, String joindate, String status) {
		super();
		this.email = email;
		this.password = password;
		this.provider = provider;
		this.nickname = nickname;
		this.joindate = joindate;
		this.status = status;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getProvider() {
		return provider;
	}

	public void setProvider(String provider) {
		this.provider = provider;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getJoindate() {
		return joindate;
	}

	public void setJoindate(String joindate) {
		this.joindate = joindate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "UserDto [email=" + email + ", password=" + password + ", provider=" + provider + ", nickname="
				+ nickname + ", joindate=" + joindate + ", status=" + status + "]";
	}
	
	
}
