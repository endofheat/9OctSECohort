import { useUserContext } from "../context/UserContext";
import { Button } from "@mui/material";

export default function Profile() {
    const { currentUser, handleUpdateUser } = useUserContext();
    
        return (
      <div className="Profile">
        <h1>Profile</h1>
        <h2>{currentUser.value}, welcome. </h2>
        <Button onClick={() => handleUpdateUser({})}>Log Out</Button>
      </div>
    );
  }
  