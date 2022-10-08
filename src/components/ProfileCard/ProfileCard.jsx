import React from 'react';
import RewardLabel from "../../UI-KIT/RewardLabel/RewardLabel.jsx";
import UserInfoSection from "../../UI-KIT/UserInfoSection/UserInfoSection.jsx";
import './ProfileCard.scss';
import SingleCharacteristic from "../../UI-KIT/SingleCharacteristic/SingleCharacteristic.jsx";

const userFromBackend = {
  mainInfo: [
    {type: 'fullName', value: 'Иван Вяземский'},
    {type: 'teamName', value: 'Иван Вяземский'},
    {type: 'specialization', value: 'Иван Вяземский'},
    {type: 'grade', value: 'Иван Вяземский'},
    {type: 'avatar', value: 'Иван Вяземский'},
  ],
  characteristics: [
    {type: 'communication', score: 45},
    {type: 'responsiveness', score: 10},
    {type: 'leadership', score: 85},
    {type: 'expertise', score: 55},
    {type: 'workQuality', score: 42},
    {type: 'toxicity', score: 96},
  ]
};

const leftColumnProps = [
  'communication',
  'responsiveness',
  'leadership',
];

const headerByType = {
  fullName: 'Имя, фамилия',
  teamName: 'Команда',
  specialization: 'Специализация',
  grade: 'Грейд',

  communication: 'Коммуникация',
  responsiveness: 'Отзывчивость',
  leadership: 'Лидерство',
  expertise: 'Экспертность',
  workQuality: 'Качество работы',
  toxicity: 'Токсичность',
};

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <header>
        <div className="profile-card__user-info">
          <img className="profile-card__avatar" src="/currencies/ruble.svg" alt="Your Avatar"/>
          <div className="user-info__first-line">
            {userFromBackend.mainInfo
              .filter(({type}) => type !== 'avatar' && type !== 'grade')
              .map(({type, value}) =>
                <UserInfoSection key={type} header={headerByType[type]} value={value}/>
              )
            }
            <RewardLabel currency="crystal" moneyAmount={1200}/>
          </div>
          <div className="user-info__second-line">
            <div className="second-line__up-block">
              <img className="team-emblem" src="/currencies/ruble.svg" alt="Team Emblem"/>
              <img className="close-button" src="/icons/close-button.svg" alt="Close Button"/>
            </div>
            <UserInfoSection header={headerByType['grade']}
                             value={userFromBackend.mainInfo.filter(({type, value}) => type === 'grade')[0].value}/>
            <RewardLabel currency="nft" moneyAmount={200}/>
          </div>
        </div>
        <hr className="profile-card__separator"/>
      </header>

      <footer className="profile-card__characteristics">
        <div className="characteristics__left-column">
          {userFromBackend.characteristics
            .filter(({type}) => leftColumnProps.includes(type))
            .map(({type, score}) =>
              <SingleCharacteristic key={type} type={type} name={headerByType[type]} progress={score}/>
            )}
        </div>
        <div className="characteristics__right-column">
          {userFromBackend.characteristics
            .filter(({type}) => !leftColumnProps.includes(type))
            .map(({type, score}) =>
              <SingleCharacteristic key={type} type={type} name={headerByType[type]} progress={score}/>
            )}
        </div>
      </footer>
    </div>
  );
}

export default ProfileCard;
