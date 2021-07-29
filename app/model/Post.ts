export interface IPost {
  username: string;
  userProfilePic: string;
  Contents: string;
  image?: string;
  timestamp: number;
  postID: string;
  parentID: string;
}
export default IPost;
