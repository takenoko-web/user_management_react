import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { NotFound } from "../components/pages/NotFound";
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
                            element={route.children}
                        />
                    ))
                }
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});