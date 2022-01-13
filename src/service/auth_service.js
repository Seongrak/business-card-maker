import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

class AuthService {
  login(providerName) {
    let provider;
    if (providerName === "Google") provider = new GoogleAuthProvider();
    if (providerName === "Github") provider = new GithubAuthProvider();

    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }
}

export default AuthService;
