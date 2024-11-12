export default function Custom404() {
    return (
      <div className="container mx-auto flex items-center justify-center min-h-screen ">
        <div className="text-center">
          <h1 className="text-8xl font-extrabold text-red-500">404</h1>
          <p className="mt-4 text-2xl text-black dark:text-white">عذرًا، الصفحة غير موجودة</p>
          <a href="/" className="mt-6 inline-block text-lg text-blue-600 hover:underline">
            العودة إلى الصفحة الرئيسية
          </a>
        </div>
      </div>
    );
  }
  