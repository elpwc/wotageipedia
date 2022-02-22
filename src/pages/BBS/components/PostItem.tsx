interface PostItemProps {
  title: string;
  reply: number;
  hasImage: boolean;
  postUser: string;
  postTime: Date;
}

const PostItem = (props: PostItemProps) => {
  return (
    <>
      <div className="postitem">
        <p>
          <span className="postitemtitle"> {props.title}</span>
          <span>[{props.reply}]</span>
          <span>{props.hasImage ? '图' : ''}</span>
        </p>
        <p>
          <span>{props.postUser}</span>
          <span>{props.postTime.toLocaleTimeString()}</span>
        </p>
      </div>
    </>
  );
};

export default PostItem;
