import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center my-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Site</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your gateway to amazing content and experiences. Explore our services
          and discover what makes us unique.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 my-16">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Feature One</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Feature Two</h2>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
        </div>
        <Link href="/blogs">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Go To Blogs</h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
