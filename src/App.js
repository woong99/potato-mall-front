import { useAxiosInterceptor } from './hooks/useAxiosInterceptor';
import Router from './route/Router';

function App() {
    useAxiosInterceptor();

    return (
        <>
            <Router />
        </>
    );
}

export default App;
