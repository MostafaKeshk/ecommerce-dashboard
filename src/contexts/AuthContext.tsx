import { useState, useEffect, createContext, useContext } from "react";
import Loading from "../components/general/Loading";

type ContextState = {
  user: any | null;
  setUser: (user: any) => void;
  token: any | null;
  setToken: (token: any) => void;
  handleLogin: (user: any, token: any) => void;
  handleLogout: () => void;
};

const initialValues = {
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
};

type IProps = {
  children: React.ReactElement<any, any> & React.ReactNode;
};

export const AuthContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<any | null>(null);

  const handleLogin = (user: any, token: any) => {
    localStorage.setItem("e-user", JSON.stringify(user));
    localStorage.setItem("e-token", JSON.stringify(token));
    setUser(user);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("e-user");
    localStorage.removeItem("e-token");
    setUser(null);
    setToken(null);
  };

  // Effect to load user and token from local storage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("e-user") as any);
    const tokenData = JSON.parse(localStorage.getItem("e-token") as any);

    // If the user and token aren't already set and we have values in local storage, then use those
    if ((!user || !token) && userData && tokenData) {
      setUser(userData);
      setToken(tokenData);
    }

    setLoading(false);

    // eslint-disable-next-line
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        handleLogin,
        handleLogout,
      }}
    >
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): ContextState => useContext(AuthContext);
