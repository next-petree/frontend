import axios, { AxiosError, AxiosResponse } from 'axios';
import Detail from 'components/common/detail/Detail';
import { API_PATHS } from '../../constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUserDetail } from 'assets/types/User';

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<IUserDetail>();

  const fetchDetail = async (id: string) => {
    try {
      const { data } = await axios.get<AxiosResponse<IUserDetail>>(API_PATHS.user(Number(id)));
      setDetail(data.data);
    } catch (e) {
      const err = e as AxiosError;
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    fetchDetail(id ?? '1');
  }, [id]);

  return detail && <Detail {...detail} />;
}
