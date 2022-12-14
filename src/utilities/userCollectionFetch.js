import toast from "react-hot-toast"

const userCollectionFetch = userData => {

    fetch('https://luxary-hunt-server.vercel.app/userCollection', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                toast.success('Now you are our member!')
            }
        })
}

export default userCollectionFetch