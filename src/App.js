import React, {useState, useEffect} from 'react';
import Modal from './modals/Modal'
import './App.css';
import Lists from './components/Lists';
import withListLoading from './components/withListLoading';


function App() {
    const [modalActive, setModalActive] = useState(true);
    const ListLoading = withListLoading(Lists);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://watchlater.cloud.technokratos.com/get/array`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, repos: repos });
            });
    }, [setAppState]);

    return (
        <div >
            <button onClick={() => setModalActive(true)}>click</button>
            <main>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </main>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default App;
