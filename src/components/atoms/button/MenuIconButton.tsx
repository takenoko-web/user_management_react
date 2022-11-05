import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onOpen: () => void;
}
export const MenuIconButton: FC<Props> = memo((props) => {
    const { onOpen } = props
    return (
        <>
            <IconButton icon={<HamburgerIcon />} aria-label="メニュー" size="sm" variant="unstyled" display={{ base: "block", md: "none" }} onClick={onOpen} />
        </>
    )
})