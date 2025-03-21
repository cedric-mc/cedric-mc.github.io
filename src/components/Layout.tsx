import { Outlet } from 'react-router-dom';
import { SvgDefs } from './SvgDefs';
import { Navigation } from './Navigation/Navigation';
import { Footer } from './Footer';
import '@styles/globals/style.css';
import '@styles/globals/animation.css';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function Layout() {
    const queryParameters = new URLSearchParams(window.location.search);
    const etudes = queryParameters.get('e') === '1';

    useScrollToTop();

    return (
        <div className='app-container'>
            <SvgDefs />
            <Navigation isEtudes={etudes} />
            <main id='home' className='content'>
                <Outlet />
            </main>
            <Footer />
            {/* TODO: Ajouter un bouton pour remonter en haut de la page */}
        </div>
    );
}
