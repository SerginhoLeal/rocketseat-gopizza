import * as React from 'react';
import * as Native from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string;
  isAdmin: string;
};

type PizzaProviderProps = {
  children?: React.ReactNode;
};

type PizzaContextProps = {
  isLoggin: boolean;
  signOut: () => void;
  signin: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  user: User | null;
};

const USER_COLLECTION = '@gopizza:user';

const PizzaContext = React.createContext<PizzaContextProps>({} as PizzaContextProps);

const PizzaProvider = ({ children }: PizzaProviderProps) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoggin, setIsLoggin] = React.useState<boolean>(false);
  console.log(user);

  const signin = async(email: string, password: string) => {
    if(!email || !password){
      return Native.Alert.alert('Login', 'Informe o e-mail e a senha por favor!')
    };

    setIsLoggin(true);

    auth().signInWithEmailAndPassword(email, password)
      .then(account => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then(async(profile) => {
            const { name, isAdmin } = profile.data() as User;

            if(profile.exists){
              const userData = {
                id: account.user.uid,
                name,
                isAdmin
              };
              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
              setUser(userData);
            }
          })
          .catch(() => Native.Alert.alert('Login', 'Não foi possível buscar os dados do usuário.'))
      })
      .catch(error => {
        const { code }: any = error;

        if(code === 'auth/user-not-found' || code === 'auth/wrong-password'){
          return Native.Alert.alert('Login', 'E-mail ou senha inválida.')
        } else {
          return Native.Alert.alert('Login', 'Não foi possível realizar o login.')
        }
      })
      .finally(() => setIsLoggin(false))
  };

  const loadUserStorageData = async() => {
    setIsLoggin(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser){
      const userData = JSON.parse(storedUser) as User;

      setUser(userData);
    };

    setIsLoggin(false);
  };

  const signOut = async() => {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  };

  const forgotPassword = async(email: string) => {
    if(!email){
      return Native.Alert.alert('Redefinir senha', 'Informe o e-mail.')
    };

    auth()
      .sendPasswordResetEmail(email)
      .then(() => Native.Alert.alert('Redefinir senha', 'Enviamos um link no seu e-mail para redefinor sua senha.'))
      .catch(() => Native.Alert.alert('Redefinir senha', 'Não foi possível enviar o e-mail para redefinir a senha.'))

  };

  React.useEffect(() => {loadUserStorageData()}, []);

  const context = {
    isLoggin,
    signOut,
    signin,
    user,
    forgotPassword,
  };

  return (
    <PizzaContext.Provider value={context}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizzaContext = () => {
  const context = React.useContext(PizzaContext);
  return context;
};

export {
  PizzaProvider,
  usePizzaContext,
};
