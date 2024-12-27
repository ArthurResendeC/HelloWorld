export default function userDetails({ params }: { params: { id: string}}){
    return(
        <>
            <h2>User</h2>
            <p>Id: {params.id}</p>
        </>
    )
}