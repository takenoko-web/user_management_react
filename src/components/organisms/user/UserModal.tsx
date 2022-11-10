import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { User } from "../../../types/api/user";
import { PrimayButton } from "../../atoms/button/PrimaryButton";

type Props = {
    user: User | undefined;
    isOpen: boolean;
    onClose: () => void;
}

export const UserModal: FC<Props> = (props) => {
    const { user, isOpen, onClose } = props
    const { loginUser } = useLoginUser()
    const isAdmin: boolean = (loginUser?.isAdmin) ?? false
    const [userName, setUserName] = useState('')

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)

    const [name, setName] = useState('')

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

    const [email, setEmail] = useState('')

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

    const [phone, setPhone] = useState('')
    useEffect(() => {
        setName((user?.name) ?? '')
        setUserName((user?.username) ?? '')
        setEmail((user?.email) ?? '')
        setPhone((user?.phone) ?? '')
    }, [user])
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

    const onClickUpdate = () => { console.log('update') }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
                <ModalOverlay>
                    <ModalContent pb={6}>
                        <ModalHeader>ユーザー詳細</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody mx={4}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <FormLabel>名前</FormLabel>
                                    <Input value={userName} isReadOnly={!isAdmin} onChange={onChangeUserName} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>フルネーム</FormLabel>
                                    <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>メール</FormLabel>
                                    <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>電話番号</FormLabel>
                                    <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
                                </FormControl>
                            </Stack>
                        </ModalBody>
                        {isAdmin &&
                            (
                                <ModalFooter>
                                    <PrimayButton onClick={onClickUpdate}>更新</PrimayButton>
                                </ModalFooter>
                            )
                        }
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}