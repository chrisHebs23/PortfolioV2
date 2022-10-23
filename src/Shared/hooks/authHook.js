import { useCallback, useEffect, useState } from "react";

let logoutTimer;
export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [adminId, setAdminId] = useState(false);

  // Admin login function
  const login = useCallback(
    (aid, token, eDate) => {
      setToken(token);
      setAdminId(aid);
      const tokenExpiration =
        eDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpiration);

      localStorage.setItem(
        "adminData",
        JSON.stringify({
          adminId: aid,
          token: token,
          expiration: tokenExpiration.toISOString(),
        })
      );
    },
    [setTokenExpirationDate]
  );

  //Log out admin
  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setAdminId(null);
    localStorage.removeItem("adminData");
  }, []);

  // useEffect to see if time remaining on expiration date
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  //   login admin if still time left on expiration date
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("adminData"));

    if (storedData && storedData.token && new Date(storedData.expiration)) {
      login(
        storedData.adminId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);
  return { token, login, logout, adminId };
};
