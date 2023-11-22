import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ cardInfo }) => {
  const { thumbnail_url, name, topics, total_time_minutes, id } = cardInfo;

  const navigate = useNavigate();

  const goToRecipePage = () => {
    navigate(`/recipe/${id}`);
  };
  return (
    <>
      <div onClick={goToRecipePage}>
        <div className=" rounded bg-orange-100">
          <div>
            <img
              className="w-10/12 pl-20 py-8"
              src={thumbnail_url}
              alt={name}
            />
          </div>
          <div>
            <h2 className="text-xl text-center">{name}</h2>
            <div>
              <div className="text-gray-500 text-center">
                {topics ? <p>{topics[0].name}</p> : null}
              </div>
              {total_time_minutes ? (
                <p className="text-gray-500 text-center">{`${total_time_minutes} min`}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
