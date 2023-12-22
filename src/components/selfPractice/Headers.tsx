import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import "./index.css";

export const DetailHeader = () => {
  return (
    <Box className="job-detail-job-headlines">
      <Box className="job-detail-desc">
        <Typography className="job-detail-job-headline" variant="h3">
          Need experienced Java developer
        </Typography>
        <Chip className="chip-top" label="Completed" />
      </Box>

      <Typography className="job-detail-coder-hired" variant="subtitle1">
        Hired coders- 4
      </Typography>
    </Box>
  );
};

export const CoderHeader = () => {
  return (
    <Box className="job-detail-job-headlines">
      <Box className="job-detail-desc">
        <Typography className="job-detail-job-headline" variant="h3">
          Need experienced Java developer
        </Typography>
        <Chip className="chip-top" label="Completed" />
      </Box>

      <Typography className="job-detail-coder-hired" variant="subtitle1">
        Hired coders- 4
      </Typography>
    </Box>
  );
};

export const PaymentHeader = () => {
  return (
    <Box className="job-detail-job-headlines">
      <Box className="job-detail-desc">
        <Typography className="job-detail-job-headline" variant="h3">
          Need experienced Java developer
        </Typography>
        <Chip className="chip-top" label="Completed" />
      </Box>

      <Typography className="job-detail-coder-hired" variant="subtitle1">
        Hired coders- 4
      </Typography>
    </Box>
  );
};
