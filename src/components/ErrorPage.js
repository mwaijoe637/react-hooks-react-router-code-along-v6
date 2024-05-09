// ErrorPage.js
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Error Page</h1>
      <p>Whoops! Something went wrong!</p>
    </div>
  );
}
