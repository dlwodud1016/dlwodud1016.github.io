export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-6 py-16 max-w-6xl">
                <div className="flex justify-between items-start gap-8">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-primary mb-1">
                            이재영
                        </h1>
                        <p className="text-lg text-secondary">
                            데이터와 자동화로 서비스를 성장시키는 개발자
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                            <svg
                                className="w-16 h-16 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-6 pt-6 border-t border-gray-200"></div> */}
            </div>
        </header>
    );
}
