import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        SurfSnap
                    </Link>
                    <div className="space-x-4">
                        <Link href="/photographer/login" className="text-gray-600 hover:text-blue-600">
                            Photographer Login
                        </Link>
                        <Link href="/surfer/search" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Find Photos
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
