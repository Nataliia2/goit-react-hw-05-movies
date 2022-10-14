import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Item } from './NavigationStyle';
import { Dna  } from  'react-loader-spinner';

export const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <Wrapper>
            <Item>
              <NavLink to="/" end>
                Home
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/movies">Movies</NavLink>
            </Item>
          </Wrapper>
        </nav>
      </header>
      <Suspense fallback={<Dna
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper" />}>
        <Outlet />
      </Suspense>
    </>
  );
};