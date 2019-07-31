import React from 'react';
import styled from 'styled-components'

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;




export default function PostCard({ entryId, title, text, props }) {
    return(
        <PostCardDiv>
            {console.log("props on post card ", props)}
            <h2>{title}</h2>
            <p>{text}</p>
            <nav>
                <a
                    href="#"
                    onClick={() => props.history.push(`/home/${entryId}`)}
                >Link to another component</a>
            </nav>
        </PostCardDiv>

    )

}