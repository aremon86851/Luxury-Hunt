import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import AuthContext, { AuthProvider } from '../../AuthContext/AuthContext';
import userCollectionFetch from '../../utilities/userCollectionFetch';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthProvider)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const userInfo = {
                    userName: user.displayName,
                    userEmail: user.email,
                    profile: user.photoURL,
                    role: "Buyer",
                    status: ''
                }
                userCollectionFetch(userInfo)
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info w-full max-w-xl">Google Sign In</button>
        </div>
    );
};

export default SocialLogin;