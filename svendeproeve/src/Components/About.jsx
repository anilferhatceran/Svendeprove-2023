import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-contol"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-contol"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-contol"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-contol"
              id="password2"
              name="password2"
              placeholder="Confirm your password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
