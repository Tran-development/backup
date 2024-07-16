import ToogleImplement from './ToogleImplement';
import { ContainerToogle } from './Toogle.styled';
import { SIGN_IN } from '@/constants/constants';
import { TypeActivePanel } from '@/interfaces/interfaces';

interface TooglePanelProps {
  returnTypePanel: () => TypeActivePanel;
  handleChange: () => void;
}

const TooglePanel = ({ handleChange, returnTypePanel }: TooglePanelProps) => {
  const onChange = () => handleChange();
  const state = returnTypePanel();

  return (
    <ContainerToogle className={`${state === SIGN_IN || 'active'}`}>
      <div className={`toogle`}>
        <ToogleImplement
          state={SIGN_IN}
          handleClick={onChange}
          isActive={state === SIGN_IN}
        />
        <ToogleImplement
          state='sign-up'
          handleClick={onChange}
          isActive={state === SIGN_IN}
        />
      </div>
    </ContainerToogle>
  );
};

export default TooglePanel;
