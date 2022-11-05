import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { NotFound } from "../components/pages/NotFound";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { HomeRouter } from "./HomeRouter";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home">
                {
                    HomeRouter.map((route) => (
                        <Route key={route.path}
                            path={route.path}
                            element=
                            {
                                <HeaderLayout>
                                    {route.element}
                                </HeaderLayout>
                            }
                        />
                    ))
                }
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});