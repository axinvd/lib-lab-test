"use client";
import { Box, CardActionArea, Card as MuiCard } from "@mui/material";
import { useRouter } from "next/navigation";

export const Card = ({
  id,
  text,
  url,
}: {
  id: string;
  text: string;
  url: string;
}) => {
  const { push } = useRouter();
  return (
    <MuiCard>
      <CardActionArea onClick={() => push(`${url}/${id}`)}>
        <Box padding={1} textAlign={"center"}>
          {text}
        </Box>
      </CardActionArea>
    </MuiCard>
  );
};
