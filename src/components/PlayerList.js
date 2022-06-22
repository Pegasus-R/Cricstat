import React from 'react';

const List = ({
  playerName,
  country,
  id,
}) => 
{
  return (
    <div className="container">
      <div className="Row">
        <div className="Data">
          <div className="info">
            <h2 className="Name">{playerName}</h2>
            <h3 className="country">{country}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;