function NamePart(props) {
    return ( // reusable component to display part of a name from the value prop
    <span className="NamePart">{props.value}</span>
    )
    }
    function FullName({first, middle, last}) {
        return (
          // composes the NamePart component to display a full name
          <div className="FullName componentBox">
            Full name: 
            <NamePart value={first} />{" "}
            <NamePart value={middle} />{" "}
            <NamePart value={last} />
          </div>
        );
      }

export default FullName;