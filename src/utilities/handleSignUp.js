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
                    console.log('img upload:', imageUrl);
                    // For profile pic and username
                    const profile = {
                        displayName: name,
                        photoURL: imageUrl
                    }
                    userProfile(profile)
                })
            console.log(user)
        })
        .catch(err => console.error(err))
}
export default handleSignUp;