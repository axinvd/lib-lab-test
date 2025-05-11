"use client";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

export const Pagination = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  const { push } = useRouter();
  if (totalPages <= 1) return null;

  return (
    <Stack spacing={2} alignItems="center" marginBottom={2}>
      <MuiPagination
        count={totalPages}
        page={page}
        shape="rounded"
        onChange={(_, value) => push(`?page=${value}`)}
      />
    </Stack>
  );
};
