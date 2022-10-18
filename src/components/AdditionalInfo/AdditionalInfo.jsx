import { Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { SubTitle, Container, LinkStyle } from './AdditionalInfoStyle';
import { Loader } from '../Loader';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <SubTitle>Additional Information</SubTitle>
        <LinkStyle to={'cast'} state={{ from: location.state?.from }}>
          Cast
        </LinkStyle>
        <LinkStyle to={'reviews'} state={{ from: location.state?.from }}>
          Reviews
        </LinkStyle>
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};