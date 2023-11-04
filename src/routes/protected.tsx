/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import CustomPageLoader from "../components/PageLoader/Index";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return (<CustomPageLoader pageLoader={true}/>);
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return (
    <>
      {children}
    </>
  );
}
