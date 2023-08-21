import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config'
import { collection, addDoc,Timestamp } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null
}

const inserReducer = (state, action) => {

}

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useReducer(inserReducer, initialState)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {

    }
}