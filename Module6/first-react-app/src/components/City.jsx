// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults
function City({ name, state = "AKL", country = "New Zealand", children }) {

    return (
      <div className="City componentBox">
        <strong>{name}</strong> is in {state}, {country}
        <div>{children}</div>
      </div>
    );
  }
  
  export default City;