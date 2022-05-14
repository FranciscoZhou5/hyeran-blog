export function convertDateToReadableFormat(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", { dateStyle: "medium" });
}
