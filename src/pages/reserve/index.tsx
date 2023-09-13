import { useEffect, useState } from 'react';
import BGIMG from 'assets/images/reserve/subvisual.jpg';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CardBoxLayout from 'layout/CardBoxLayout';
import ProfileBox from './profile';
import AgreeBox from './apply';
import CompletedMessage from './completed';
import { API_PATHS, CONSTANTS } from '../../constants';
import DefaultLayout from 'layout/DefaultLayout';

const TextButton = styled.span`
  cursor: pointer;
`;
export interface IBreederDogDetail {
  id: number;
  name: string;
  type: string;
  gender: string;
  birthDate: string;
  management: string;
  breederId: number;
  breederNickName: string;
  isBreederVerified: boolean;
  imagesUrl: string[];
}
export enum Step {
  Loading,
  Profile,
  Apply,
  Completed,
}

export enum Level {
  None,
  Silver,
  Gold,
}

export default function Login() {
  const [step, setStep] = useState<Step>(Step.Loading);
  const [islogin, setLogin] = useState<boolean>(false);
  const [dogProfile, setProfile] = useState<IBreederDogDetail>();
  const navigate = useNavigate();
  const params = useParams();
  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(API_PATHS.myDogDetail(Number(params.id)));
      setProfile(data.data);
      if (data.status === 'ERROR' || data.status === 'FAIL') throw new Error('500 error');
    } catch (e) {
      const err = e as AxiosError;
      console.log('error ::::', err.response?.data);
    }
  };
  useEffect(() => {
    const key = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    setLogin(!!key);
    console.log('params', params);
    if (!key) {
      navigate('/login');
    }
    fetchProfile();
  }, []);
  useEffect(() => {
    setStep(Step.Profile);
  }, [dogProfile]);
  if (step === Step.Completed) {
    return (
      <DefaultLayout>
        <CompletedMessage nextStep={() => navigate('/')} />
      </DefaultLayout>
    );
  }
  return islogin && dogProfile ? (
    <CardBoxLayout bg={BGIMG} title={'분양 신청하기'}>
      {step === Step.Profile ? <ProfileBox nextStep={() => setStep(Step.Apply)} dogProfile={dogProfile} /> : undefined}
      {step === Step.Apply ? (
        <AgreeBox nextStep={() => setStep(Step.Completed)} dogId={dogProfile.id} breederId={dogProfile.breederId} />
      ) : undefined}
    </CardBoxLayout>
  ) : (
    <div style={{ height: '750px' }}></div>
  );
}
