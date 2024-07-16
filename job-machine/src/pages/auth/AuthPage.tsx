import { useEffect, useState } from 'react';
import { TypeActivePanel } from '@/interfaces/interfaces';
import WebFont from 'webfontloader';
import { Body, Container } from './Auth.styled';
import { useNavigate } from 'react-router-dom';
import FormContainer from '@/components/auth/FormCommon/FormContainer';
import TooglePanel from '@/components/auth/ToogleCommon/TooglePanel';
import { getCookie } from '@/utils/utils';
import { PATH_URL_ROUTER, SIGN_IN, SIGN_UP } from '@/constants/constants';
const AuthPage = () => {
  const [typePanel, setTypePanel] = useState<TypeActivePanel>('sign-in');
  const handleChange = () => {
    setTypePanel(prevPanel => (prevPanel === SIGN_IN ? SIGN_UP : SIGN_IN));
  };
  const returnTypeActive = () => {
    return typePanel;
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto'],
      },
    });
  }, []);

  const token = getCookie('token');
  const refreshToken = getCookie('refreshToken');

  const navigate = useNavigate();
  useEffect(() => {
    if (token && refreshToken) {
      navigate(PATH_URL_ROUTER.home);
    }
  }, []);

  return (
    <Body>
      <Container>
        <div className={typePanel === 'sign-in' ? '' : 'active'}>
          <FormContainer state={typePanel} />
          <TooglePanel
            handleChange={handleChange}
            returnTypePanel={returnTypeActive}
          />
        </div>
      </Container>
    </Body>
  );
};

export default AuthPage;
