/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
    const { getUsers, users, loading } = useAllUsers()

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
                                <UserCard img="https://source.unsplash.com/random"
                                    name={user.username} fullName={user.name} />
                            </WrapItem>
                        ))
                    }
                </Wrap>
            )}
        </>
    );
});