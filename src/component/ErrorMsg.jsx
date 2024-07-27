import React from "react";

export default function ErrorMsg(props) {
  const { type, field } = props;
  let errorMessage;

  if (type === "maxLength") {
    errorMessage = `${field} is to long`;
  } else if (type === "required") {
    errorMessage = `${field} is required`;
  } else if (type === "pattern" && field === "password") {
    errorMessage = `${field} must be 6-12 characters long, include at least one number, one uppercase letter, one lowercase letter, and special charecter`;
  }

  return (
    <div>
      <span className="text-red-500 font-medium">{errorMessage}</span>
    </div>
  );
}
