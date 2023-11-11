import { CComment } from '../common/CComment/CComment';
import { CFormButton } from '../common/CFormButton/CFormButton';
import { CInput } from '../common/CInput/CInput';
import { CLabel } from '../common/CLabel/CLabel';
import { CStartInput } from '../common/CStartInput/CStartInput';
import { CTextarea } from '../common/CTextarea/CTextarea';
import { useContext } from 'react';
import { CommentsContext } from '../../context/CommentsContext';
import './CurrentProductReview.scss';

export const CurrentProductReview = ({
    comments
}) => {

    const { addComment, commentsData } = useContext(CommentsContext);

    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let star = Number(formData.get('star'));
        let user = formData.get('name');
        let email = formData.get('email');
        let comment = formData.get('message');

        let newComment = ({
            comment,
            stars: star,
            email,
            user
        });

        addComment(newComment);
        e.currentTarget.reset();
    }

    return (
        <section className='review__section'>
            <h1>reviews</h1>
            <form onSubmit={submitHandler}>
                <CStartInput />
                <div>
                    <div>
                        <CLabel inputId={"name"} title={"Name"} />
                        <CInput type={"text"} name={"name"} id={"name"} placeholder={"Type name ..."} />
                    </div>
                    <div>
                        <CLabel inputId={"email"} title={"Email"} />
                        <CInput type={"email"} name={"email"} id={"email"} placeholder={"Type email ..."} />
                    </div>
                </div>
                <div className='review__section__textarea__wrepper'>
                    <CLabel inputId={"message"} title={"Message"} />
                    <CTextarea id={"message"} name={"message"} placeholder={"Type message ..."} />
                </div>
                <CFormButton title={'Add Review'} />
            </form>

            <article className='review__section__comments'>
                {
                    commentsData
                        ? commentsData.map(x => <CComment comment={x} key={Math.random()} />)
                        : null

                }
            </article>
        </section>
    )
}
