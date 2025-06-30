import Chat from "@/components/sammy-chat/chat";

export default function HomePage() {
  return (
    <>
      <Chat />
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://mms.businesswire.com/media/20250519455411/en/2473594/22/Miter_Logo_Final_RGB_Miter_Logo_Midnight.jpg"
              alt="Miter HR Logo"
              className="mx-auto w-48 h-48 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Miter
          </h1>

        </div>
      </div>
    </>
  );
}
