
import DownloadButton from '@/components/download-button';

export default function AdminPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <DownloadButton />
      </div>
    </main>
  );
}
