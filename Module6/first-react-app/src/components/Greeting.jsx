function Greeting({name, children}){
    return (
        <div className="Greeting componentBox">
          <h1>Hello {name ? <p>{name}</p> : <p>world.</p>}</h1> 
          <div>{children}</div>
        </div>
    )

}


export default Greeting;