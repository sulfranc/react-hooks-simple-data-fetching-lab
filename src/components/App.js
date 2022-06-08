// create your App component here
import React,{useState,useEffect} from "react"

function App(){
    const api = "https://dog.ceo/api/breeds/image/random"
    const [image,setImage] = useState(null)
    useEffect(()=> {
        fetch(api)
        .then(res => res.json())
        .then(data => {setImage(data.message)}
            )
        

    },[])

    if (image === null){
        return <div>
             <p>Loading...</p>
        </div>
        
    }

    return(
        <div>
            <img src={image} alt = "A Random Dog"/>
        </div>
        


    )
}

export default App