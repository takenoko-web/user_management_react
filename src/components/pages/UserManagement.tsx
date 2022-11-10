/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserModal } from "../organisms/user/UserModal";

export const UserManagement: FC = memo(() => {
    const { getUsers, users, loading } = useAllUsers()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { onSelectUser, selectedUser } = useSelectUser()

    const onClickUser = useCallback((id: number) => {
        onSelectUser({
            id,
            users,
            onOpen
        })
        onOpen()
    }, [users])

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} justify="space-around">
                    {
                        users.map((user) => (
                            <WrapItem key={user.id}>
                                <UserCard img="https://source.unsplash.com/random" id={user.id}
                                    name={user.username} fullName={user.name} onClick={onClickUser} />
                            </WrapItem>
                        ))
                    }
                </Wrap>
            )}

            <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser} />

        </>
    );
});