import { PostProps } from "pages/home";

import styles from "./Comment.module.scss";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import useTranslation from "hooks/useTranslation";

export interface CommentProps {
  comment: string;
  uid: string;
  email: string;
  createdAt: string;
}

interface CommentBoxProps {
  data: CommentProps;
  post: PostProps;
}
const PROFILE_DEFAULT_URL = "/default-img.png";

export default function CommentBox({ data, post }: CommentBoxProps) {
  const { user } = useContext(AuthContext);
  const translate = useTranslation();

  const handleDeleteComment = async () => {
    if (post) {
      try {
        const postRef = doc(db, "posts", post?.id);
        await updateDoc(postRef, {
          comments: arrayRemove(data),
        });
        toast.success("댓글을 삭제했습니다");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="post__comment">
      <div key={data?.createdAt} className={styles.comment}>
        <div className={styles.comment__borderBox}>
          <div className={styles.comment__imgBox}>
            <div className={styles.comment__flexBox}>
              <img src={PROFILE_DEFAULT_URL} alt="profile" />
              <div className={styles.comment__email}>{data?.email}</div>
              <div className={styles.comment__createdAt}>{data?.createdAt}</div>
            </div>
          </div>
          <div className={styles.comment__content}>{data?.comment}</div>
          <div className={styles.comment__submitDiv}>
            {data?.uid === user?.uid && (
              <button
                type="button"
                className="comment__delete-btn"
                onClick={handleDeleteComment}
              >
                {translate("BUTTON_DELETE")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
