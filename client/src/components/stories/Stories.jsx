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
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/409801353_378426538084334_292439173387295636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=FM2xbK3NRvsQ7kNvgHRKMlY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBe3hDNCfsnBStD8H7zBnf7PE9UlNtb_zW10acHflQZvw&oe=663B95E1",
    },
    {
      id: 2,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/409801353_378426538084334_292439173387295636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=FM2xbK3NRvsQ7kNvgHRKMlY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBe3hDNCfsnBStD8H7zBnf7PE9UlNtb_zW10acHflQZvw&oe=663B95E1",
    },
    {
      id: 3,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/409801353_378426538084334_292439173387295636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=FM2xbK3NRvsQ7kNvgHRKMlY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBe3hDNCfsnBStD8H7zBnf7PE9UlNtb_zW10acHflQZvw&oe=663B95E1",
    },
    {
      id: 4,
      name: "VITAS",
      img: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/409801353_378426538084334_292439173387295636_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGETKhN_3NbyK2TRJObTGStGdt12lPZOwMZ23XaU9k7A_5AFeYYRdVK-3lihVcLopt5ByIkG_6V6q52sBKRDSAb&_nc_ohc=FM2xbK3NRvsQ7kNvgHRKMlY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBe3hDNCfsnBStD8H7zBnf7PE9UlNtb_zW10acHflQZvw&oe=663B95E1",
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