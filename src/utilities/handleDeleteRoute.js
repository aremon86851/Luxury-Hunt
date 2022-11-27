import toast from "react-hot-toast"

export const handleDeleteRoute = (route, refetch, id) => {
    fetch(`http://localhost:5000/${route}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            toast.success('Your item deleted successfully!')
            refetch()
        })

}
