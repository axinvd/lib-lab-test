export const renderItem = <T extends { [key: string]: React.ReactNode }>(
  data: T,
) => {
  return (
    <ul>
      {Object.entries(data).map(
        ([key, value]) =>
          value != null && (
            <li key={key}>
              <strong>{toPascalCase(key)}:</strong> {value}
            </li>
          ),
      )}
    </ul>
  );
};

function toPascalCase(key: string) {
  return (
    key.substring(0, 1).toUpperCase() +
    key.substring(1).replace(/([a-z])([A-Z])/g, "$1 $2")
  );
}
