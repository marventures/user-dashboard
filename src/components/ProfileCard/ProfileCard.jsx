import { useState } from 'react';
// prettier-ignore
import { ProfileCardContainer, ProfileImage, ProfileInfo, ProfileField, EditButton, SectionTitle } from './ProfileCard.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import avatar from '../../assets/avatar.jpg';

export const ProfileCard = () => {
  const { darkMode } = useDarkMode();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('marventures');
  const [title, setTitle] = useState('Full Stack Developer');
  const [email, setEmail] = useState('marvinpacis@email.com');
  const [bio, setBio] = useState(
    "I'm a full stack developer with over 3 years of experience. I'm eager and passionate to learn every bits and pieces happening in our modern world. Technology changes very fast and in my opinion, the only way to adapt to emerging technologies is to have a drive for continuous learning and application."
  );

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ProfileCardContainer darkMode={darkMode}>
      <SectionTitle>Profile</SectionTitle>
      <ProfileImage src={avatar} alt='Profile Picture' />
      <ProfileInfo>
        <ProfileField darkMode={darkMode}>
          <strong>Name:</strong>
          {isEditing ? (
            <input
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
              darkMode={darkMode}
            />
          ) : (
            <span>{username}</span>
          )}
        </ProfileField>
        <ProfileField darkMode={darkMode}>
          <strong>Title:</strong>
          {isEditing ? (
            <input
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
              darkMode={darkMode}
            />
          ) : (
            <span>{title}</span>
          )}
        </ProfileField>
        <ProfileField darkMode={darkMode}>
          <strong>Email:</strong>
          {isEditing ? (
            <input
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
              darkMode={darkMode}
            />
          ) : (
            <span>{email}</span>
          )}
        </ProfileField>
        <ProfileField darkMode={darkMode}>
          <strong>Bio:</strong>
          {isEditing ? (
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              darkMode={darkMode}
            />
          ) : (
            <span>{bio}</span>
          )}
        </ProfileField>
      </ProfileInfo>
      <EditButton darkMode={darkMode} onClick={handleEditClick}>
        {isEditing ? 'Save Changes' : 'Edit Profile'}
      </EditButton>
    </ProfileCardContainer>
  );
};
