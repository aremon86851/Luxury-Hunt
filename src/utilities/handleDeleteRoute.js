import toast from "react-hot-toast"

export const handleDeleteRoute = (route, refetch, id) => {
    fetch(`https://luxary-hunt-server.vercel.app/${route}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            toast.success('Your item deleted successfully!')
            refetch()
        })

}
