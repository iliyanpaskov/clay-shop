import { createContext, useState } from "react";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {

    const [commentsData, setCommentsData] = useState([]);

    const getAllComments = (data) => {
        setCommentsData(data);
    }

    const addComment = (newComment) => {
        setCommentsData([newComment,...commentsData]);
    }

    return (
        <CommentsContext.Provider value={{ commentsData, getAllComments, addComment }}>
            {children}
        </CommentsContext.Provider>
    )

}