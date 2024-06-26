import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import Update from '../../components/update/Update';
import { makeRequest } from '../../axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const Profile = () => {
    const [openUpdate, setOpenUpdate] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const userId = parseInt(useLocation().pathname.split('/')[2]);

    const queryClient = useQueryClient();

    const { isPending: rIsLoading, data: relationshipData } = useQuery({
        queryKey: ['relationship'],
        queryFn: () =>
            makeRequest
                .get('/relationships?followedUserId=' + userId)
                .then((res) => {
                    return res.data;
                }),
    });

    const mutation = useMutation({
        mutationFn: (following) => {
            if (following)
                return makeRequest.delete('/relationships?userId=' + userId);
            return makeRequest.post('/relationships', { userId });
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['relationship'] });
        },
    });

    const handleFollow = () => {
        mutation.mutate(relationshipData.includes(currentUser.id));
    };

    return (
        <div className="profile">
            <div className="images">
                <img
                    src={'/upload/' + currentUser.coverPic}
                    alt=""
                    className="cover"
                />
                <img
                    src={'/upload/' + currentUser.profilePic}
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="http://instagram.com">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="http://twitter.com">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="http://linkedin.com">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="http://pinterest.com">
                            <PinterestIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>{currentUser.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>{currentUser.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>Url</span>
                            </div>
                        </div>
                        {rIsLoading ? (
                            'Loading ...'
                        ) : userId === currentUser.id ? (
                            <button onClick={() => setOpenUpdate(true)}>
                                update
                            </button>
                        ) : (
                            <button onClick={handleFollow}>
                                {relationshipData.includes(currentUser.id)
                                    ? 'Following'
                                    : 'Follow'}
                            </button>
                        )}
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts userId={userId} />
            </div>
            {openUpdate && (
                <Update setOpenUpdate={setOpenUpdate} user={currentUser} />
            )}
        </div>
    );
};

export default Profile;
