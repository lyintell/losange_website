import MediaShowcase from "@/components/MediaShowcase";

export const metadata = {
  title: "Vidéos | Losange",
};

export default async function VideosPage({ searchParams }) {
  const params = await searchParams;

  return <MediaShowcase initialTutorialId={params?.play} />;
}