import {
  ArrowDownwardRounded,
  Group,
  HelpOutline,
  RssFeed,
  School,
  VideoLabel,
  WorkOutline,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import "./leftbar.css";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <MailIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <VideoLabel className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">
          Show more <ArrowDownwardRounded className="leftbarButtonIcon" />
        </button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img
              className="leftbarFriendImg"
              src="../../assets/person/1.jpeg"
              alt=""
            />
            <span className="leftbarFriendName">Tanjona Andriantsitohaina</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarFriendImg"
              src="../../assets/person/2.jpeg"
              alt=""
            />
            <span className="leftbarFriendName">Fiantso Harena</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarFriendImg"
              src="../../assets/person/9.jpeg"
              alt=""
            />
            <span className="leftbarFriendName">Tendry Axel</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarFriendImg"
              src="../../assets/person/4.jpeg"
              alt=""
            />
            <span className="leftbarFriendName">Tendry</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
