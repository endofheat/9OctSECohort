// Create a new file called PropsDisplayer.jsx in a components folder

function PropsDisplayer(props) {

    // convert object to string
    const stringProps = JSON.stringify(props);
  
    console.log(props)
  
    return (
      <div className="PropsDisplayer componentBox">
        <h2>Check out my props!</h2>
        <h3>{stringProps}</h3>
        {/* what happens if we try to render the object {props} ? - doesn't work because objects are raw data, React doesn't know how to format it */}
        <p>{props.name} ({props.alterEgo})</p> {/* we can print individual properties from the props object though */}
      </div>
    );
  }
  
  // export this component so we can import it elsewhere
  export default PropsDisplayer;