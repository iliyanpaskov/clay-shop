import { CCommentStars } from '../CCommentStars/CCommentStars';
import './CComment.scss';

export const CComment = ({
    comment
}) => {
    return (
        <article className='comment'>
            <div>
                <span>{comment.user}</span>
                <span> &#60;{comment.email}&#62;</span>
            </div>
            <CCommentStars count={comment.stars} />
            <p>{comment.comment}</p>
        </article>
    )
}
