import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';
import { LoadingStatus } from '../../types';

interface IUser {
    id: string;
    name: string;
}

interface IUserState {
    users: IUser[];
    status: LoadingStatus;
    error: string;
}

const initialState: IUserState = {
    users: [],
    status: LoadingStatus.Idle,
    error: '',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (id: string) => (state: RootState) => state.users.users.find(u => u.id === id);

export default usersSlice.reducer;
