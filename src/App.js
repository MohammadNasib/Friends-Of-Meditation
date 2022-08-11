import NavBar from './components/NavBar';
import './styles/global.scss';
import { Routes, Route } from 'react-router-dom';
import OurProducts from './components/pages/OurProducts';
import SleepMasks from './components/pages/SleepMasks';
import MediChairs from './components/pages/MediChairs';
import YogaChairs from './components/pages/YogaChairs';
import YogaMats from './components/pages/YogaMats';
import YogaBricks from './components/pages/YogaBricks';
import MediCushions from './components/pages/MediCushions';

function App() {
    return (
        <div className='main'>
            <NavBar />

            <Routes>
                <Route exact path='/' element={<OurProducts />} />
                <Route path='/mediChairs' element={<MediChairs />} />
                <Route path='/mediCushions' element={<MediCushions />} />
                <Route path='/sleepMasks' element={<SleepMasks />} />
                <Route path='/yogaChairs' element={<YogaChairs />} />
                <Route path='/yogaMats' element={<YogaMats />} />
                <Route path='/yogaBricks' element={<YogaBricks />} />
            </Routes>
        </div>
    );
}

export default App;
