import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    // TODO: FIX TYPES
    const error = useRouteError();
    console.error(error);

    // @ts-ignore
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}