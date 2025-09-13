import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

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
      <div className="flex gap-[15px] justify-end">
        <Button
          variant="contained"
          sx={{
            padding: "10px 40px",
            borderRadius: "12px",
            backgroundColor: "#5978FF",
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "#4765e0" },
          }}
          onClick={() => setPointer(pointer - 1)}
        >
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            padding: "10px 40px",
            borderRadius: "12px",
            backgroundColor: "#5978FF",
            border: "2px solid #5978FF",
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "#4765e0", borderColor: "#4765e0" },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
