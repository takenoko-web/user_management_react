/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const { showMessage } = useMessage()
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<Array<User>>([])
    const getUsers = useCallback(() => {
        axios.
            get<Array<User>>("https://jsonplaceholder.typicode.com/users").
            then((res) => {
                setLoading(true)
                setUsers(res.data)
            }).catch(() => {
                setLoading(true)
                showMessage({ title: 'ユーザー取得失敗', status: 'error' })
            }).finally(() => setLoading(false))
    }, [])
    return { getUsers, loading, users }
}