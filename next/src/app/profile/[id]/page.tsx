export default function UserProfileId({params}:any){

    return(
        <>
        <h1>This is Profile with id Page</h1>
        <h3>Profile Page <span style={{backgroundColor:"slateblue"}}>{params.id}</span></h3>
    
        </>
    )
    
    
    
    }