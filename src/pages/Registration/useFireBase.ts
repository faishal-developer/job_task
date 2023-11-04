/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* @ts-ignore */
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import initializeFirebaseApp from "../../firebaseConfig/firebase.config";
import { PostPutPatch } from "../../ApiServices/Apiservices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../redux/userSlice";
import { toast } from "react-toastify";
import { DeleteDataLS, createDataLS } from "../../helper/LocalStorgeMS";
import { useNavigate } from "react-router-dom";

initializeFirebaseApp();
//todo:read about xss attack and prevent it
const googleProvider = new GoogleAuthProvider();
//code started here
const auth = getAuth();

const useFireBase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [user, setUser] = useState({})
  const [isLoading] = useState(true);

  const addUserOnMongodb = (body: any) => {
    console.log("addUserOnMongodb", body);
    PostPutPatch(`${Endpoints.sign_up}`, body, {
      thenCB: (res: any) => {
        dispatch(setUser(res.data.user));
        createDataLS(res.data.token, "token");
        navigate("/admin/users");
        toast.success("Signup successfull");
      },
      catchCB: () => {
        body.name && toast.error("Singup failed");
      },
      method: "post",
    });
  };
  const getUserFromMongodb = (body: any, isSignin: any) => {
    PostPutPatch(`${Endpoints.sign_in}`, body, {
      thenCB: (res: any) => {
        dispatch(setUser(res.data.user));
        createDataLS(res.data.token, "token");
        navigate("/admin/users");
        toast.success("Singin successfull");
      },
      catchCB: () => {
        isSignin && toast.error("Singin failed");
      },
      method: "post",
    });
  };

  const createUserWithPassword = (values: any, loader: any) => {
    console.log(values);
    loader(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async () => {
        console.log("response", values);
        await addUserOnMongodb(values);
      })
      .catch(() => {
        toast.error("signup failed");
      })
      .finally(() => {
        loader(false);
      });
  };
  const signInWithPassword = (values: any, loader: any) => {
    loader(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        getUserFromMongodb(values, "signin");
      })
      .catch(() => {})
      .finally(() => {
        loader(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
      })
      .catch(() => {
        // error.message = e.message;
        toast.error("Logout Failed");
        dispatch(clearUser());
      })
      .finally(() => {
        DeleteDataLS("token");
      });
  };

  const onReloadSigninCheking = () => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        const user = result.providerData[0];
        console.log("onReloadSigninCheking", result);
        getUserFromMongodb({ email: user.email }, null);
      }
    });
  };

  const googleSignin = (loader: any) => {
    loader(true);
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const user = result.user;
        console.log(googleSignin);
        await addUserOnMongodb({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        toast.success("Signed successfully");
      })
      .catch(() => {
        toast.error("Signin Failed");
      })
      .finally(() => {
        loader(false);
      });
  };

  return {
    signInWithPassword,
    createUserWithPassword,
    logOut,
    isLoading,
    googleSignin,
    onReloadSigninCheking,
  };
};

export default useFireBase;
