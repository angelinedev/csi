
export function Footer() {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CSI Batch 2025 - 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
