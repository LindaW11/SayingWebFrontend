import React, { FC } from "react";
import { Button } from "antd";
interface InfoCard {
  title: string;
  time: string;
  place: string;
}

const InfoCard: FC<InfoCard> = (props) => {
  const { title, time, place } = props;
  return (
    <div className="past-info-wrapper">
      <div className="past-info-left">
        <p className="past-info-title">{title}</p>
        <div className="past-info-left-mid">
          <div>
            <p className="past-label">演出时间</p>
            <p className="past-text">{time}</p>
          </div>
          <div>
            <p className="past-label">演出地点</p>
            <p className="past-text">{place}</p>
          </div>
        </div>
        <Button className="past-button">{title}</Button>
      </div>
      <img src="" alt="play" />
    </div>
  );
};

export default InfoCard;
