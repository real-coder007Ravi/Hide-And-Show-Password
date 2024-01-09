let password = document.getElementById("password");
let passwordImg = document.getElementById("password-img");

passwordImg.onclick = function () {
	if (password.type == "password") {
		password.type = "text";
		passwordImg.src = "assets/images/eye-open.png";
	} else {
		password.type = "password";
		passwordImg.src = "assets/images/eye-close.png";
	}
};
