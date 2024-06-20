import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/409801353_378426538084334_292439173387295636_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=JBmvEL5xlvgQ7kNvgGlQN8q&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYCiSelFhfd7zJDh1W9FbnmTMoAe2TVE_r96WisuyQ6zPw&oe=6679CF03",
    },
    {
      id: 2,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/409801353_378426538084334_292439173387295636_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=JBmvEL5xlvgQ7kNvgGlQN8q&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYCiSelFhfd7zJDh1W9FbnmTMoAe2TVE_r96WisuyQ6zPw&oe=6679CF03",
    },
    {
      id: 3,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/409801353_378426538084334_292439173387295636_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=JBmvEL5xlvgQ7kNvgGlQN8q&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYCiSelFhfd7zJDh1W9FbnmTMoAe2TVE_r96WisuyQ6zPw&oe=6679CF03",
    },
    {
      id: 4,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/409801353_378426538084334_292439173387295636_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=JBmvEL5xlvgQ7kNvgGlQN8q&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYCiSelFhfd7zJDh1W9FbnmTMoAe2TVE_r96WisuyQ6zPw&oe=6679CF03",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={"/upload/" + currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories