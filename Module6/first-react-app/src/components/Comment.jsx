// try extracting a FormattedDate component from Comment
function FormattedDate({date, locale='en-US', tz='Australia/Sydney'}) {
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    return (
        <div className="Comment-date">{date.toLocaleString(locale, {timeZone: tz})}</div>
    )
}

// try extracting an Avatar component from UserInfo
// optional: add a width prop with a default value so we can control the size of the avatar image
function Avatar({user, width=64}) {
    return (
        <img className="Avatar" src={user.avatarUrl} alt={user.name} width={width}/>
    )
}

function UserInfo({user}) {
    return (
        // copied from ComplexComment so that the returned markup is the same
        <div className="UserInfo">
            {/* the user info is one aspect of the comment */}
            <Avatar user={user} />
            <div className="UserInfo-name">{user.name}</div>
        </div>        
    )
}

// simpler Comment component with the user info and date sections extracted out into their own components
function Comment(props) {
  return (
    <div className="Comment componentBox">
      {/* here we pass the author prop down to the UserInfo component */}
      <UserInfo user={props.author} />{" "}
      <div className="Comment-text">{props.text}</div>
      {/* we could also take these locale and tz values from the Comment props (if we wanted to) instead of hardcoding them */}
      <FormattedDate date={props.date} locale="en-AU" tz="Australia/Brisbane" />
    </div>
  );
}

export default Comment;