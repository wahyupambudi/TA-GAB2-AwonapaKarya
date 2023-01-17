import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Import Axios untuk Berinteraksi dengan Axios
import axios from "axios";

//InitialsState
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Membuat Method untuk Request ke API Login
export const login = createAsyncThunk("user/login", async(user, thunkAPI) => {
    try {
        const response = await axios.post('http://109.123.238.13:2024/login', {
            email: user.email,
            password: user.password
        });

        //Menjalankan Respon Email dan Password
        return response.data;

        //Jika Error
    } catch (error) {
        //Cek Respon Eror dan Mengambil Pesan dari Server
        if(error.response){
            const message = error.response.data.msg;
        //Menjalankan Pesan Error
        return thunkAPI.rejectWithValue(message);
        }
    }
})

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://109.123.238.13:2024/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("user/LogOut", async() => {
    await axios.delete('http://109.123.238.13:2024/logout');
});

//Membuat Slice
export const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        //Method yang digunakan untuk Mereset State
        //Jika kita melakukan reset maka nilai nya akan dikembalikan ke nilai Awal
        reset: (state) => initialState
    },
    //Menghandle CreateAsynThunk
    extraReducers:(builder) => {
        //Jika Pending
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        //Jika Benar
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        //Jika Error
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    //Get User Login

         //Jika Pending
         builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        })
        //Jika Benar
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        //Jika Error
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

//Export Fungsi Reset
export const {reset} = authSlice.actions;

export default authSlice.reducer;