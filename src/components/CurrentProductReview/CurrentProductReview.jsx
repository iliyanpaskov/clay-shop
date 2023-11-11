import { CComment } from '../common/CComment/CComment';
import { CFormButton } from '../common/CFormButton/CFormButton';
import { CInput } from '../common/CInput/CInput';
import { CLabel } from '../common/CLabel/CLabel';
import { CStartInput } from '../common/CStartInput/CStartInput';
import { CTextarea } from '../common/CTextarea/CTextarea';
import './CurrentProductReview.scss';

export const CurrentProductReview = ({
    comments
}) => {
    return (
        <section className='review__section'>
            <h1>reviews</h1>
            <form>
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
                    comments
                        ? comments.map(x => <CComment comment={x} key={Math.random()} />)
                        : null

                }
            </article>
        </section>
    )
}
