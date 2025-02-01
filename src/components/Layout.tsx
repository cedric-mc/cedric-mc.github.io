import { Outlet } from 'react-router-dom';
import { SvgDefs } from './SvgDefs';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import '@styles/globals/style.css';
import '@styles/globals/animation.css';

export function Layout() {
    const queryParameters = new URLSearchParams(window.location.search);
    const etudes = queryParameters.get('e') === '1';

    return (
        <div className='app-container'>
            <SvgDefs />
            <Navigation isEtudes={etudes} />
            {/* <Header /> */}
            <main id='home' className='content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
