// add to main.jsx or App.jsx wrapped around top components
// to catch errors thrown by ANY children and render a fallback
// component instead of an error

// first do npm install react-error-boundary
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

<ErrorBoundary FallbackComponent={ErrorMessage}>
  <App /> {/* can wrap App or other high-level parent components */}
</ErrorBoundary>;

// add to ErrorMessage.jsx
function ErrorMessage({ error }) {
    const navigate = useNavigate();
    console.error(error);
 // Will work for errors caused by changing state, but not syntax errors
    return (
        <div className="ErrorMessage">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
        Okay, <button onClick={() => navigate(-1)}>go back</button> by the bus and wait for me, all right? Go back and wait. 
        </div>
    );
}

export default ErrorMessage;
