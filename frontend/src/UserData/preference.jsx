import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import Buttons from "./buttons";

const internshipTypes = ["Full-time", "Part-time", "Remote", "On-site", "Hybrid"];
const locations = [
  "Coimbatore","Bangalore", "Chennai", "Delhi", "Hyderabad",
  "Mumbai", "Pune", "Kolkata", "Remote"
];

export default function InternshipDetails({ pointer, setPointer }) {
  const [internshipType, setInternshipType] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({ internshipType: false, location: false });

  const handleSubmit = () => {
    const newErrors = {
      internshipType: internshipType === "",
      location: location === "",
    };
    setErrors(newErrors);

    if (newErrors.internshipType || newErrors.location) return;

    console.log({ internshipType, location });
    console.log(pointer)
    if(pointer<=2)
    setPointer(pointer + 1);
  };

  return (
    <Box sx={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
        Internship Details
      </Typography>

      {/* Internship Type */}
      <TextField
        select
        fullWidth
        label="Internship Type *"
        value={internshipType}
        onChange={(e) => setInternshipType(e.target.value)}
        error={errors.internshipType}
        helperText={errors.internshipType ? "Please select internship type" : ""}
      >
        {internshipTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      {/* Location */}
      <TextField
        select
        fullWidth
        label="Location *"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        error={errors.location}
        helperText={errors.location ? "Please select a location" : ""}
      >
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </TextField>

      {/* Buttons */}
      <Buttons pointer={pointer} setPointer={setPointer} handleSubmit={handleSubmit} />
    </Box>
  );
}
