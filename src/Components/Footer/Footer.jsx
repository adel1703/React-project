import React from "react";
import footerCss from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={footerCss.footer + " pt-5 text-white"}>
        <div className=" container ">
          <div className="row ">
            <div className="col-4 text-center">
              <div>
                <h3 className=" mb-3">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-4 text-center">
              <div>
                <h3 className=" mb-3">AROUND THE WEB</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio sint ratione itaque incidunt dolorem totam
                  molestiae velit accusamus delectus vitae voluptates, culpa
                  neque alias ducimus, quos architecto officiis laudantium est.
                </p>
              </div>
            </div>
            <div className="col-4 text-center">
              <div>
                <h3 className=" mb-3">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center bg-black p-3 mb-0">
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
