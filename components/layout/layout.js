import { Fragment } from 'react';

import MainNavigation from './main-navigation';
import SideHero from './side-hero';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <SideHero />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;