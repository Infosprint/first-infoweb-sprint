import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



//async fetch
//userContactPost
export const userContactPost = createAsyncThunk('userContactPost', async ({ name, mobile, email }) => {
    let payload = null
    console.log({ name, mobile, email })
    await axios.post(`http://localhost:4000/qurinom-solutions/api/v1/user-info`, { name, mobile, email }).then((res) => {
        payload = res
    }).catch((err) => {
        payload = err
    })
    return payload
})

//userQueryForm
export const UserQueryForm = createAsyncThunk('UserQueryForm', async ({ firstname, lastname, email, query,mobile,file }) => {
    let payload = null
    await axios.post(`http://localhost:4000/qurinom-solutions/api/v1/user-query`, { firstname, lastname, email, query ,mobile,file}).then((res) => {
        payload = res
    }).catch((err) => {
        payload = err
    })
    return payload
})





//initialState
const initialState = {
    userContactResponceStatus: null,
    userQueryFormResponceStatus: null,
    userEmail:null
}


//createSlice
const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        removeUserContactResponceStatus: (state, action) => {
            state.userContactResponceStatus = null
        },
        removeUserQueryFormResponceStatus:(state, action)=>{
            state.userQueryFormResponceStatus = null
        },
        editUserEmail:(state,action)=>{
            console.log(action.payload,'h')
            state.userEmail=action.payload
        }

    }, extraReducers: {

        //userContactPost
        [userContactPost.fulfilled]: (state, action) => {
            const payload = action.payload
            if (payload.status === 200) {
                state.userContactResponceStatus = 'success'
            } else if (payload.response.status !== 200) {
                state.userContactResponceStatus = payload.response.data.status
            }
        },
        [userContactPost.rejected]: (state, action) => {
            console.log('rejected')
        },



        //userQueryForm
        [UserQueryForm.fulfilled]: (state, action) => {
            const payload = action.payload
            if (payload.status === 200) {
                state.userQueryFormResponceStatus = 'success'
            } else if (payload.response.status !== 200) {
                state.userQueryFormResponceStatus = payload.response.data.status
            }
        },
        [UserQueryForm.rejected]: (state, action) => {
            console.log('rejected')
        },

    }
})


export const { removeUserContactResponceStatus ,removeUserQueryFormResponceStatus,editUserEmail} = slice.actions

export default slice.reducer