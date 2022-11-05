import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";
type Props = {
    //ReactNodeはタグで囲った要素を渡す型定義
    children: ReactNode
}
export const HeaderLayout: FC<Props> = memo((props) => {
    const { children } = props
    return (
        <>
            <Header />
            {children}
        </>
    );
});
