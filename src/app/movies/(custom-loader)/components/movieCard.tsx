import type { Movie } from "@/api/models/Movies";
import LinkIcon from "@mui/icons-material/Link";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Typography,
} from "@mui/material";

export type MovieCardProps = {
  movie: Movie;
  url: string;
  isHasQuotes: boolean;
};

export const MovieCard = ({ movie, url, isHasQuotes }: MovieCardProps) => {
  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardHeader
        title={movie.name}
        action={
          isHasQuotes && (
            <Link href={`${url}/${movie._id}/quotes`}>
              <LinkIcon />
            </Link>
          )
        }
      />
      <Divider />
      <CardContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body2" color="text.secondary">
            <strong>Runtime:</strong> {movie.runtimeInMinutes} min
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Box Office:</strong> ${movie.boxOfficeRevenueInMillions}M
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Budget:</strong> ${movie.budgetInMillions}M
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Academy Award Nominations:</strong>{" "}
            {movie.academyAwardNominations}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Academy Award Wins:</strong> {movie.academyAwardWins}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Rotten Tomatoes:</strong> {movie.rottenTomatoesScore}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
