import toast from "react-hot-toast";
import userCollectionFetch from "./userCollectionFetch";

const handleSignUp = (name, email, password, picture, userRole, createUser, userProfile, imgbbApi) => {

    createUser(email, password)
        .then(result => {
            const user = result.user
            // For image upload using imagebb

            const formData = new FormData();
            formData.append('image', picture)
            fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
                method: 'POST',
                body: formData
            })
                .then((res) => res.json())
                .then((imageData) => {
                    const imageUrl = imageData.data.url
                    // For profile pic and username
                    const profile = {
                        displayName: name,
                        photoURL: imageUrl
                    }
                    userProfile(profile)
                    // For fetching server
                    const userInfo = {
                        userName: name,
                        userEmail: email,
                        profile: imageUrl,
                        role: userRole
                    }
                    userCollectionFetch(userInfo)
                })
        })
        .catch(err => console.error(err))
}

export default handleSignUp;