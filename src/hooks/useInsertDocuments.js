import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config'
import { collection, addDoc,Timestamp } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch(action.type) {

        case "LOADIN":
        case "INSERTED_DOC":
        case "ERROR":
        default:

    }
}

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useReducer(insertReducer, initialState)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled) {
            dispatch(action)
        }
    }

    const insertDocument = async(document) => {
        
        try {

            const newDocument = {...document, createdAt: Timestamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCancelBeforeDispatch({
                type: "",
                payload: insertedDocument
            })

        } catch (error) {

        }
    }

}