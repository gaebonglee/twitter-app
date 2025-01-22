import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function PostHeader() {
  const navigate = useNavigate();
  return (
    <div className="post__header">
      {/*  navigate(-1) 로 하면 이전페이지로 돌아갈 수 있게 설정 가능! */}
      <button type="button" onClick={() => navigate(-1)}>
        <IoIosArrowBack className="post__header-btn" />
      </button>
    </div>
  );
}
