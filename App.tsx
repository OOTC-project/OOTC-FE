import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './src/redux/slice';

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
