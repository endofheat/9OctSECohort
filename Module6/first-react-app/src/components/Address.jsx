// destructures props object into 5 variables, two with defaults
function Address({ street, suburb, postcode, state = "AKL", country = "New Zealand" }) {
    
    return (
      <div className="Address componentBox">
        <div>{street}</div>
        <div>{suburb}, {state}, {postcode}</div>
        <div>{country}</div>
      </div>
    );
}
  
export default Address;
  