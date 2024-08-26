import CommentPost from "../commentPost"
import LikeComment from "../likeComment"
import LikePost from "../likePost"
import ReplyComment from "../replyComment"

const Notifications = ()=> {
    return (
        <>
            <div className="p-2 font-semibold">New</div>
            <LikePost />
            <LikeComment />
            <ReplyComment />
            <CommentPost />

            <div className="w-full h-[1px] bg-gray-700 my-3"></div>
            <div className="p-2 font-semibold">Today</div>
            <LikePost />
            <LikeComment />
            <ReplyComment />
            <CommentPost />
            <div className="p-2 font-semibold">Yesterday</div>
            <LikePost />
            <LikeComment />
            <ReplyComment />
            <CommentPost />
        </>
    )
}

export default Notifications