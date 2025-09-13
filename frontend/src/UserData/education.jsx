import React, { useState } from "react";
import { SchoolIcon, PercentIcon } from "../assets/icons";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import Buttons from "./buttons";

export default function Education({ pointer, setPointer }) {
  const formAttributes = {
    educationLevel: {
      label: "Education Level",
      name: "educationLevel",
      icon: <SchoolIcon />,
      placeholder: "Select your education level",
      type: "text",
      errorMessage: "Please select your education level",
      menuItems: ["High School", "Bachelor's", "Master's", "PhD"],
    },
    tenthPercentage: {
      label: "10th std Percentage",
      name: "tenthPercentage",
      icon: <PercentIcon />,
      placeholder: "Enter your 10th percentage",
      type: "number",
      errorMessage: "Please enter 10th std percentage (0-100)",
      menuItems: [],
    },
    twelthPercentage: {
      label: "12th std Percentage",
      name: "twelthPercentage",
      icon: <PercentIcon />,
      placeholder: "Enter your 12th percentage",
      type: "number",
      errorMessage: "Please enter 12th std percentage (0-100)",
      menuItems: [],
    },
  };

  const [inputs, setInputs] = useState({
    educationLevel: "",
    tenthPercentage: "",
    twelthPercentage: "",
  });

  const [errors, setErrors] = useState({
    educationLevel: false,
    tenthPercentage: false,
    twelthPercentage: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });

    // clear error immediately when user types something
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = () => {
  let hasError = false;
  let newErrors = { ...errors };

  Object.keys(inputs).forEach((key) => {
    const value = inputs[key].trim();

    // check empty
    if (value === "") {
      newErrors[key] = true;
      hasError = true;
    } 
    // check percentage range for 10th and 12th
    else if (
      (key === "tenthPercentage" || key === "twelthPercentage") &&
      (isNaN(value) || value < 0 || value > 100)
    ) {
      if(key === "tenthPercentage") {
        formAttributes.tenthPercentage.errorMessage = "Please enter a valid 10th std percentage (0-100)";
      }
      if(key === "twelthPercentage") {
        formAttributes[key].errorMessage = "Please enter a valid 12th std percentage (0-100)";
      }
      newErrors[key] = true;
      hasError = true;
    } else {
      newErrors[key] = false;
    }


  });

  setErrors(newErrors);

  if (!hasError) {
    console.log(inputs);
    setPointer(pointer + 1); // only move next when no errors
  }
};


  return (
    <form className="flex flex-col gap-10 ">
      {Object.values(formAttributes).map((field, index) => (
        <div key={index} className="flex flex-col items-start gap-2">
          <Typography>{field.label}</Typography>
          <TextField
            label={
              <span className="flex items-center gap-5 ">
                {field.icon}
                {field.placeholder}
              </span>
            }
            type={field.type}
            name={field.name}
            error={errors[field.name]}
            select={field.menuItems.length > 0}
            value={inputs[field.name]}
            helperText={
              errors[field.name] ? [field.errorMessage] : null
            }
            onChange={handleInput}
            fullWidth
          >
            {field.menuItems.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
      ))}

            <Buttons pointer={pointer} setPointer={setPointer} handleSubmit={handleSubmit} />
      
    </form>
  );
}
