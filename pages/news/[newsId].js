import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  return <div>Details {router.query.newsId}</div>;
}

export default DetailsPage;
