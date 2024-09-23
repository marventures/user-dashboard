import { useState } from 'react';
// prettier-ignore
import { ProfileCardContainer, ProfileImage, ProfileInfo, ProfileField, EditButton} from './ProfileCard.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import avatar from '../../assets/avatar.jpg';

export const ProfileCard = () => {
  const { darkMode } = useDarkMode();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('marventures');
  const [title, setTitle] = useState('Full Stack Developer'); // Added title state
  const [email, setEmail] = useState('marvinpacis@email.com');
  const [bio, setBio] = useState(
    "I'm a full stack developer. I'm eager and passionate to learn every bits and pieces happening in our modern world. Technology changes very fast and in my opinion, the only way to adapt to emerging technologies is to have a drive for continuous learning and application."
  );

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ProfileCardContainer darkMode={darkMode}>
      <ProfileImage src={avatar} alt='Profile Picture' />
      <ProfileInfo>
        <ProfileField>
          <strong>Name:</strong>
          {isEditing ? (
            <input
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          ) : (
            <span>{username}</span>
          )}
        </ProfileField>
        <ProfileField>
          <strong>Title:</strong>
          {isEditing ? (
            <input
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          ) : (
            <span>{title}</span>
          )}
        </ProfileField>
        <ProfileField>
          <strong>Email:</strong>
          {isEditing ? (
            <input
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          ) : (
            <span>{email}</span>
          )}
        </ProfileField>
        <ProfileField>
          <strong>Bio:</strong>
          {isEditing ? (
            <textarea value={bio} onChange={e => setBio(e.target.value)} />
          ) : (
            <span>{bio}</span>
          )}
        </ProfileField>
      </ProfileInfo>
      <EditButton onClick={handleEditClick}>
        {isEditing ? 'Save Changes' : 'Edit Profile'}
      </EditButton>
    </ProfileCardContainer>
  );
};
