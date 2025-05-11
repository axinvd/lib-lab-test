import { Card, Typography, Link, Box } from "@mui/material";
import type { Character } from "@/api/models/Character";
import * as React from "react";

export type CharacterCardProps = {
  character: Character;
  isHasQuotes: boolean;
};

export function CharacterCard({ character, isHasQuotes }: CharacterCardProps) {
  const { race, gender, birth, death, hair, height, realm, spouse, wikiUrl } =
    character;

  const renderField = (label: string, value: string | null) =>
    value != null && (
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
        <strong>{label}:</strong> {value || "Unknown"}
      </Typography>
    );

  return (
    <Card sx={{ m: "auto", boxShadow: 3 }}>
      <Box padding={2}>
        {renderField("Race", race)}
        {renderField("Gender", gender)}
        {renderField("Birth", birth)}
        {renderField("Death", death)}
        {renderField("Hair", hair)}
        {renderField("Height", height)}
        {renderField("Realm", realm)}
        {renderField("Spouse", spouse)}
        {wikiUrl && (
          <Typography variant="body2">
            <Link href={wikiUrl} target="_blank" rel="noopener noreferrer">
              Wiki Page
            </Link>
          </Typography>
        )}
        {isHasQuotes && (
          <Typography variant="body2">
            <Link href={`/characters/${character._id}/quotes`}>
              View Character Quotes
            </Link>
          </Typography>
        )}
      </Box>
    </Card>
  );
}
