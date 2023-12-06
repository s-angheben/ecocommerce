import Navbar2 from '../components/blocks/NavBar2'

const JoinPage = () => {
  return (
    <main>

      <Navbar2 />
      <div className="flex justify-center items-center py-16 bg-gray-100">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold mt-0 mb-4 from-green-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Join us, boost your business</h1>
            <div className="text-gray-600 mb-2">
            <div>
              Start <b>fast</b> your online business with us
            </div>
            <div>
              We operate and maintain the site, don't worry about technology
            </div>
            <div>
              Upload <b>your products</b> and manage them quickly and easily
            </div>
            <div>
              Consult the <b>analyzes</b> on your online sales.
            </div>
          </div>

          <h1 className="text-3xl font-semibold mb-4 mt-8">Choose Your Plan</h1>
          <div className="flex">
            <div className="bg-white rounded-lg shadow-md p-8 m-2">
              <h2 className="text-3xl font-semibold mb-4">Eco Plan</h2>
              <p className="text-gray-600 mb-4">Ship your order </p>
              <p className="text-gray-600 mb-4">More flexible, more eco</p>
              <p className="text-gray-700 font-semibold">€200/year</p>
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 mt-6 rounded hover:bg-red-600 transition duration-300">
                Select
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 m-2">
              <h2 className="text-3xl font-semibold mb-4">Full Plan</h2>
              <p className="text-gray-600 mb-4">Use our warehouse</p>
              <p className="text-gray-600 mb-4">Totally managed by us</p>
              <p className="text-gray-700 font-semibold">€250/year</p>
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 mt-6 rounded hover:bg-red-600 transition duration-300">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

//const JoinPage = () => {
//    return (
//    <main>
//    <Navbar2 />
//        <div className="flex justify-center items-center min-h-screen bg-gray-100">
//      <div className="flex">
//        <div className="bg-white rounded-lg shadow-md p-6 mx-4">
//          <h2 className="text-2xl font-semibold mb-2">Eco Plan</h2>
//          <p className="text-gray-600 mb-2">Standard quality</p>
//          <p className="text-gray-600 mb-2">One device</p>
//          <p className="text-gray-700 font-semibold">200/year</p>
//          <button className=" bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-600 transition duration-300">
//            Select
//          </button>
//        </div>
//        <div className="bg-white rounded-lg shadow-md p-6 mx-4">
//          <h2 className="text-2xl font-semibold mb-2">Full Plan</h2>
//          <p className="text-gray-600 mb-2">HD/UHD quality</p>
//          <p className="text-gray-600 mb-2">Multiple devices</p>
//          <p className="text-gray-700 font-semibold">$14.99/month</p>
//          <button className=" bg-gradient-to-r from-green-400 to-green-600  text-white px-4 py-2 mt-4 rounded hover:bg-red-600 transition duration-300">
//            Select
//          </button>
//        </div>
//      </div>
//    </div>
//    </main>
//
//    )
//
//}

export default JoinPage
