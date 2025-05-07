export const baseFetch = async <T>(
  url: string,
): Promise<
  | { status: 200; data: T }
  | { status: 500; data: { success: false; message: string } }
> => {
  const response = await fetch(process.env.API_URL + url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();

  return response.status === 200
    ? { status: 200, data }
    : { status: 500, data };
};
