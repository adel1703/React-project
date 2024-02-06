import React from "react";
import photo1 from '../../images/poert1.png';
import photo2 from '../../images/port2.png';
import photo3 from '../../images/port3.png';



export default function Portfolio() {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <h2 className="fs-1 text-center p-5 fw-bold">PORTFOLIO COMPONENT</h2>
          </div>
          <div className="row">
            <div className="col-4">
                <img className="w-100 mb-5 rounded-4"  src={photo1} alt="photo1" />
            </div>
            <div className="col-4">
              <img className="w-100 mb-5 rounded-4"  src={photo2} alt="photo2" />
            </div>
            <div className="col-4">
            <img className="w-100 mb-5 rounded-4"  src={photo3} alt="photo3" />
            </div>
            <div className="col-4">
                <img className="w-100 mb-5 rounded-4"  src={photo1} alt="photo1" />
            </div>
            <div className="col-4">
              <img className="w-100 mb-5 rounded-4"  src={photo2} alt="photo2" />
            </div>
            <div className="col-4">
            <img className="w-100 mb-5 rounded-4"  src={photo3} alt="photo3" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
