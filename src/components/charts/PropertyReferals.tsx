import React from "react";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants/index";

interface ProgessBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgessBar = ({ title, percentage, color }: ProgessBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142D">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142D">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      bgcolor="#e4e8ef"
      borderRadius={1}
    >
      <Box
        width={`${percentage}%`}
        height="100%"
        bgcolor={color}
        borderRadius={1}
        position="absolute"
        top={0}
        left={0}
      />
    </Box>
  </Box>
);

const PropertyReferals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142D">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((item) => (
          <ProgessBar key={item.title} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferals;
