import { FC, memo } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";

export const Home: FC = memo(() => {
    const { loginUser } = useLoginUser()
    return (
        <>
            <p>Home</p>
        </>
    );
});