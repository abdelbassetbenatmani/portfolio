import Button from "../Button";

export default function SubmitButton({
  loading,
  loadingText,
  title,
}: {
  loading: boolean;
  loadingText: string;
  title: string;
}) {
  return (
    <Button
      disabled={loading}
      type="submit"
      className="w-full flex justify-center items-center font-semibold px-10 py-3">
      {loading && <>{loadingText}</>}

      {!loading && title}
    </Button>
  );
}
