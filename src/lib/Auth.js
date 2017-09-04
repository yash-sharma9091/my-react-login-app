import { Component } from "react";

class Auth extends Component {
	static getCurrentUser() {
		const token = localStorage.getItem('auth.token');
		if( token ) {
			return true;
		}
		return false;
	}
	static signOutUser() {
		const token = localStorage.getItem('auth.token');
		if( token !== null ) {
			localStorage.removeItem('auth.token');
		}
	}
}

export default Auth;