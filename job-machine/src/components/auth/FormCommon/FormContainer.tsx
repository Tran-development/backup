import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Typography, Form, Input } from 'antd';
// import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormIcon from './FormIcon';
import { ContainerForm } from './FormContainer.styled';
import { WrapperFormItem } from './WrapperFormItem.styled';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
  Data,
  FormLoginType,
  FormRegisterType,
  TypeActivePanel,
} from '@/interfaces/interfaces';
import { schemaLogin, schemaRegister } from '@/utils/yup';
import { PATH_URL_ROUTER, SIGN_IN, dataSignIn, dataSignUp } from '@/constants/constants';
import { AuthApi } from '@/api/auth/AuthApi';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { registerRequest } from '@/redux/actions/authAction';

const { Title } = Typography;

type FormContainerProps = {
  state: TypeActivePanel;
};

const FormContainer = ({ state }: FormContainerProps) => {
  const [formData, setFormData] = useState<Data>(dataSignIn);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm<
    FormLoginType | FormRegisterType
  >({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    // resolver: yupResolver<FormLoginType | FormRegisterType>(schema),
  });
  let timeoutId: NodeJS.Timeout;

  function returnData(): Promise<Data> {
    return new Promise(resolve => {
      timeoutId = setTimeout(() => {
        resolve(state === 'sign-in' ? dataSignIn : dataSignUp);
      }, 300);
    });
  }

  useEffect(() => {
    returnData().then(data => {
      setFormData(data);
    });
    reset();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [state]);

  const handleSubmitForm = async (values: FormRegisterType | FormLoginType) => {
    setLoading(true);
    if (state === 'sign-in') {
      const { email, password } = values;
      const valuesLogin = {
        email: email,
        password: password,
      };
      await AuthApi.apiLogin(valuesLogin)
        .then((res: any) => {
          Cookies.set('token', res.data.token);
          Cookies.set('refreshToken', res.data.refreshToken);
          localStorage.setItem('firstName', res.data.firstName);
          localStorage.setItem('lastName', res.data.lastName);
          navigate(PATH_URL_ROUTER.home);
        })
        .catch(err => {
          // TODO show error.
        })
        .finally(() => {
          setLoading(false);
        })
        ;
    } else {
      dispatch(registerRequest(values as FormRegisterType));
    }
  };

  return (
    <ContainerForm className={`${state}`}>
      <Form onFinish={handleSubmit(handleSubmitForm)}>
        <Title level={1}>{formData.title}</Title>
        <span className='sub-title'>{formData.subTitle1}</span>
        <FormIcon />
        <WrapperFormItem>
          {formData.fieldInput.map(value => (
            <Controller
              key={value.name}
              name={value?.name}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Form.Item
                    validateStatus={fieldState.error?.message && 'error' }
                    help={fieldState.error?.message || null}
                    style={{ padding: 0 }}
                  >
                    {value.name === 'password' ? (
                      <Input.Password {...field} placeholder={value.label} />
                    ) : (
                      <Input {...field} placeholder={value.label} />
                    )}
                  </Form.Item>
                );
              }}
            />
          ))}
        </WrapperFormItem>
        <a href='#a'>{formData.subTitle2}</a>
        <BaseButton htmlType='submit' className='ant-btn-primary' loading={loading}>
          {formData.contentButton}
        </BaseButton>
      </Form>
    </ContainerForm>
  );
};

export default FormContainer;
