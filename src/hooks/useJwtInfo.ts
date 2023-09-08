import { CONSTANTS } from '../constants';
import { useEffect, useState } from 'react';
import { decodeToken } from 'utils/jwt';

export const useJwtInfo = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [cetified, setCertified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);

    if (token) {
      const jwtInfo = decodeToken(token);
      setEmail(jwtInfo.email);
      setRole(jwtInfo.role);
      setCertified(jwtInfo.certification);
    }
  }, []);

  return { email, role, cetified };
};
